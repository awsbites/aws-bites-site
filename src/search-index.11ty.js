const { create, insert } = require('@orama/orama')
const { afterInsert: highlightAfterInsert } = require('@orama/plugin-match-highlight')
const { persist } = require('@orama/plugin-data-persistence')
const striptags = require('striptags')

function flattenTranscript (transcript) {
  return transcript.paragraphs.flatMap(paragraph => paragraph.map(p => p.text)).join(' ')
}

module.exports = class SearchIndex {
  data () {
    return {
      permalink: '/search.json'
    }
  }

  async render (data) {
    const episodesIdx = await create({
      schema: {
        id: 'string',
        episodeNumber: 'number',
        title: 'string',
        description: 'string',
        transcript: 'string'
      },
      components: {
        afterInsert: [highlightAfterInsert]
      }
    })

    for (const episode of data.collections.publishedEpisodes) {
      const transcript = data.transcripts[String(episode.data.episode)] ? flattenTranscript(data.transcripts[String(episode.data.episode)]) : ''

      await insert(episodesIdx, {
        id: episode.url,
        episodeNumber: episode.data.episode,
        title: episode.data.title,
        description: striptags(episode.content),
        transcript
      })
    }

    const JSONIndex = await persist(episodesIdx, 'json')

    console.log(episodesIdx)
    console.log(episodesIdx.data.positions)

    // const { searchWithHighlight } = require('@orama/plugin-match-highlight')
    // const term = 'quick'

    // const searchResult = await searchWithHighlight(episodesIdx, {
    //   term,
    //   properties: '*',
    //   boost: {
    //     title: 2,
    //     description: 1.5
    //   }
    // })

    // console.log(`Results for "${term}": `)

    // for (const hit of searchResult.hits) {
    //   console.log(`\n-> ${hit.id}`)
    //   console.log(hit.document)
    //   console.log(hit.positions)
    // }

    return JSONIndex
  }
}
