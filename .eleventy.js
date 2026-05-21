'use strict'

const path = require('path')
const fs = require('fs/promises')
const { pipeline } = require('stream/promises')
const { createWriteStream, existsSync } = require('fs')
const { minify } = require('html-minifier-terser')
const Image = require('@11ty/eleventy-img')
const embedYouTube = require('eleventy-plugin-youtube-embed')
const axios = require('axios')
const striptags = require('striptags')
const { DateTime } = require('luxon')

const now = String(Date.now())
const includeFutureEpisodes = ['1', 'true', 'yes'].includes(
  String(process.env.INCLUDE_FUTURE_EPISODES || '').toLowerCase()
)
const currentPublishDate = DateTime.now().startOf('day')
const fallbackEpisodeImage = path.join(__dirname, 'src', '_includes', 'static', 'awsbites-og.png')
const episodeThumbnailsDir = path.join(__dirname, 'src', '_includes', 'images', 'episodes')
const youtubeThumbnailPattern = /^https:\/\/i\.ytimg\.com\/vi\/[^/]+\/maxresdefault\.jpg$/
const episodeThumbnailFetches = new Map()

function youtubePreviewUrl (id) {
  return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
}

function episodeThumbnailPath (episode) {
  const candidates = [
    path.join(episodeThumbnailsDir, `${episode}.jpg`),
    path.join(__dirname, 'src', '_includes', 'images', `${episode}.jpg`)
  ]

  return candidates.find((candidate) => existsSync(candidate))
}

function preferredEpisodeThumbnailPath (episode) {
  return path.join(episodeThumbnailsDir, `${episode}.jpg`)
}

async function downloadEpisodeThumbnail (episode, youtubeId) {
  const dest = preferredEpisodeThumbnailPath(episode)
  const tempDest = `${dest}.${process.pid}.${Date.now()}.tmp`

  try {
    await fs.mkdir(episodeThumbnailsDir, { recursive: true })
    const response = await axios.get(youtubePreviewUrl(youtubeId), { responseType: 'stream' })
    await pipeline(response.data, createWriteStream(tempDest))
    await fs.rename(tempDest, dest)
    console.log(`Fetched YouTube thumbnail ${dest}`)
    return dest
  } catch {
    await fs.rm(tempDest, { force: true }).catch(() => {})
    console.warn(`Could not fetch YouTube thumbnail ${youtubePreviewUrl(youtubeId)}; using fallback image.`)
    return null
  }
}

function ensureEpisodeThumbnail (episode, youtubeId) {
  const existingThumbnail = episodeThumbnailPath(episode)

  if (existingThumbnail) {
    return Promise.resolve(existingThumbnail)
  }

  const key = `${episode}:${youtubeId}`

  if (!episodeThumbnailFetches.has(key)) {
    episodeThumbnailFetches.set(key, downloadEpisodeThumbnail(episode, youtubeId))
  }

  return episodeThumbnailFetches.get(key)
}

function isPublishedEpisode (item) {
  if (includeFutureEpisodes) {
    return true
  }

  const publishDate = DateTime
    .fromJSDate(item.data.publish_date)
    .startOf('day')

  return publishDate <= currentPublishDate
}

function extractExcerpt (content) {
  let excerpt = null

  excerpt = striptags(content)
    .substring(0, 160)
    .replace(/^\s+|\s+$|\s+(?=\s)/g, '')
    .trim()
    .concat('...')
  return excerpt
}

async function imageShortcode (src, alt, sizes, _widths, _attrs) {
  const widths = _widths || [300, 600]
  const attrs = _attrs || {}

  let metadata

  try {
    metadata = await Image(src, {
      widths,
      formats: ['avif', 'jpeg'],
      outputDir: './dist/img/'
    })
  } catch (err) {
    if (!youtubeThumbnailPattern.test(src)) {
      throw err
    }

    console.warn(`Could not fetch YouTube thumbnail ${src}; using fallback image.`)
    metadata = await Image(fallbackEpisodeImage, {
      widths,
      formats: ['avif', 'jpeg'],
      outputDir: './dist/img/'
    })
  }

  const imageAttributes = {
    alt,
    sizes,
    loading: 'lazy',
    decoding: 'async',
    ...attrs
  }

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: 'inline'
  })
}

async function episodeImageShortcode (episode, youtubeId, alt, sizes, widths, attrs) {
  const thumbnail = await ensureEpisodeThumbnail(episode, youtubeId)
  return imageShortcode(thumbnail || fallbackEpisodeImage, alt, sizes, widths, attrs)
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './src/_includes/static/**': './' })

  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode)
  eleventyConfig.addNunjucksAsyncShortcode('episodeImage', episodeImageShortcode)

  eleventyConfig.addPlugin(embedYouTube)
  eleventyConfig.addShortcode('excerpt', (article) => extractExcerpt(article))

  eleventyConfig.addCollection('publishedEpisodes', function (collectionApi) {
    // get episodes, sorted by publish date, descending
    return collectionApi.getFilteredByTag('episode')
      .filter(isPublishedEpisode)
      .sort((a, b) => a.data.publish_date - b.data.publish_date)
  })

  eleventyConfig.on('eleventy.after', async () => {
    const { createIndex } = await import('pagefind')
    const { index } = await createIndex({ verbose: false })
    await index.addDirectory({ path: 'dist' })
    await index.writeFiles({ outputPath: 'dist/pagefind' })
  })

  // minify html pages
  eleventyConfig.addTransform('htmlmin', async function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath?.endsWith('.html')
    ) {
      const minified = await minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      })

      return minified
    }

    return content
  })

  eleventyConfig.addShortcode('version', function () {
    return now
  })

  eleventyConfig.addNunjucksFilter('youtubePreviewUrl', youtubePreviewUrl)

  eleventyConfig.addNunjucksAsyncFilter('youtubePreview', function (id, episodeUrl, episode, cb) {
    (async () => {
      const folderDest = path.join('dist', episodeUrl)
      const dest = path.join('dist', episodeUrl, 'og_image.jpg')
      const exists = await fs.stat(dest).then(() => true).catch(() => false)

      if (!exists) {
        const folderExists = await fs.stat(folderDest).then(() => true).catch(() => false)

        if (!folderExists) {
          await fs.mkdir(folderDest)
        }

        const localThumbnail = await ensureEpisodeThumbnail(episode, id)
        await Image(localThumbnail || fallbackEpisodeImage, {
          widths: [1200],
          formats: ['jpeg'],
          outputDir: folderDest,
          filenameFormat: () => 'og_image.jpg',
          transform: (image) => image.resize({ width: 1200, height: 630, fit: 'cover' })
        })
        console.log(`Created ${dest}`)
      }
      return `https://awsbites.com${path.join(episodeUrl, 'og_image.jpg')}`
    })().then((url) => cb(null, url)).catch(cb)
  })

  eleventyConfig.addFilter('youtubeLink', function (id) {
    return `https://www.youtube.com/watch?v=${id}`
  })

  eleventyConfig.addFilter('formatDate', (dateObj, format = 'yyyy-MM-dd') => {
    return DateTime.fromJSDate(dateObj).toFormat(format)
  })

  eleventyConfig.addFilter('formatDateISO', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISO()
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
