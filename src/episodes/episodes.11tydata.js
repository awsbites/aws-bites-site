module.exports = function () {
  return {
    layout: 'episodes_layout.njk',
    tags: 'episode',
    rss_link: 'https://anchor.fm/s/6a3312a0/podcast/rss',
    permalink: '/{{ episode }}-{{ title | slugify }}/'
  }
}
