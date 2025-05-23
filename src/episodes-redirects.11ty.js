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
      redirects.push(`/${item.data.episode} ${item.url}`)
    }

    return redirects.join('\n')
  }
}

module.exports = EpisodesRedirects
