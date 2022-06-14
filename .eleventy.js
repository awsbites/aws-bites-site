'use strict'

const path = require('path')
const fs = require('fs/promises')
const { pipeline } = require('stream/promises')
const { createWriteStream, createReadStream } = require('fs')
const htmlmin = require('html-minifier')
const Image = require('@11ty/eleventy-img')
const embedYouTube = require('eleventy-plugin-youtube-embed')
const axios = require('axios')
const sharp = require('sharp')
const striptags = require('striptags')
const { DateTime } = require('luxon')

const now = String(Date.now())

function extractExcerpt (content) {
  let excerpt = null

  excerpt = striptags(content)
    .substring(0, 160)
    .replace(/^\s+|\s+$|\s+(?=\s)/g, '')
    .trim()
    .concat('...')
  return excerpt
}

async function imageShortcode (src, alt, sizes, widths = [300, 600], attrs = {}) {
  const metadata = await Image(src, {
    widths,
    formats: ['avif', 'jpeg'],
    outputDir: './dist/img/'
  })

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

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './src/_includes/static/**': './' })

  eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode)

  eleventyConfig.addPlugin(embedYouTube)
  eleventyConfig.addShortcode('excerpt', (article) => extractExcerpt(article))

  eleventyConfig.addCollection('publishedEpisodes', function (collectionApi) {
    // get unsorted items
    return collectionApi.getFilteredByTag('episode').filter((item) => item.data.publish_date <= now)
  })

  // minify html pages
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath?.endsWith('.html')
    ) {
      const minified = htmlmin.minify(content, {
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

  eleventyConfig.addNunjucksAsyncFilter('youtubePreview', function (id, cb) {
    (async () => {
      const folderDest = path.join('dist', this.ctx.page.url)
      const dest = path.join('dist', this.ctx.page.url, 'og_image.jpg')
      const exists = await fs.stat(dest).then(() => true).catch(() => false)

      if (!exists) {
        const folderExists = await fs.stat(folderDest).then(() => true).catch(() => false)

        if (!folderExists) {
          await fs.mkdir(folderDest)
        }

        let imageStream = createReadStream(path.join(__dirname, 'src', '_includes', 'static', 'awsbites-og.png'))

        try {
          // trying to dowload this image from youtube before the video is actually published will give us
          // a 404. If that's the case we don't want to break the build, in this case we will use a default image
          const url = `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
          const response = await axios.get(url, { responseType: 'stream' })
          imageStream = response.data
        } catch (_) {}

        const transform = sharp().resize({ width: 1200, height: 630, fit: sharp.fit.cover })
        const destFile = createWriteStream(dest)
        await pipeline(imageStream, transform, destFile)
        console.log(`Created ${dest}`)
      }

      return `https://awsbites.com${path.join(this.ctx.page.url, 'og_image.jpg')}`
    })().then((url) => cb(null, url)).catch(cb)
  })

  eleventyConfig.addFilter('youtubeLink', function (id) {
    return `https://www.youtube.com/watch?v=${id}`
  })

  eleventyConfig.addFilter('formatDate', (dateObj) => {
    return DateTime.fromJSDate(dateObj).toFormat('yyyy-MM-dd')
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
