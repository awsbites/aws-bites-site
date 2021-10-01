'use strict'

const htmlmin = require('html-minifier')

const now = String(Date.now())

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.config.js')
  eleventyConfig.addWatchTarget('./src/_includes/styles/tailwind.css')
  eleventyConfig.addPassthroughCopy({ './src/_includes/_tmp/style.css': './style.css' })

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