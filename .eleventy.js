'use strict'

const htmlmin = require('html-minifier')
const Image = require("@11ty/eleventy-img")
const embedYouTube = require("eleventy-plugin-youtube-embed")

const now = String(Date.now())


async function imageShortcode (src, alt, sizes, widths = [300, 600], attrs = {}) {
  let metadata = await Image(src, {
    widths,
    formats: ["avif", "jpeg"],
    outputDir: './dist/img/'
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
    ...attrs
  };

  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline"
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './src/_includes/static/**': './' })

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  eleventyConfig.addPlugin(embedYouTube);


  // minify html pages
  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath?.endsWith('.html')
    ) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      })

      return minified
    }

    return content
  })


  eleventyConfig.addShortcode('version', function () {
    return now
  })

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  }
}