module.exports = function () {
  return {
    layout: 'episodes_layout.njk',
    tags: 'episode',
    permalink: '/{{ episode }}-{{ title | slugify }}/'
  }
}
