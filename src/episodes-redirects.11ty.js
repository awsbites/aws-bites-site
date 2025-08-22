const settings = require('./_data/settings.js')

class EpisodesRedirects {
  data () {
    return {
      permalink: '/_redirects',
      eleventyExcludeFromCollections: true
    }
  }

  async render ({ collections }) {
    const redirects = []

    for (const item of collections.publishedEpisodes.reverse()) {
      redirects.push(`/${item.data.episode} ${settings.website}${item.url}`)
    }

    return redirects.join('\n')
  }
}

module.exports = EpisodesRedirects
