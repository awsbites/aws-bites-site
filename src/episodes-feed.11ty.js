const striptags = require('striptags')

function buildTranscript (transcript) {
  if (!transcript) {
    return ''
  }

  let t = ''
  let currentSpeakerLabel = ''
  let currentSpeaker = ''

  for (const paragraph of transcript.paragraphs) {
    if (t.length > 0) {
      t += '\n\n'
    }

    for (const segment of paragraph) {
      if (segment.speakerLabel !== currentSpeakerLabel) {
        currentSpeakerLabel = segment.speakerLabel
        currentSpeaker = transcript.speakers[currentSpeakerLabel]
        t += `${currentSpeaker}: `
      }

      t += `${segment.text.trim()}\n`
    }
  }

  return t
}

class EpisodesFeed {
  data () {
    return {
      permalink: '/episodes.json',
      eleventyExcludeFromCollections: true
    }
  }

  async render ({ collections }) {
    const episodes = []

    for (const item of collections.publishedEpisodes.reverse()) {
      episodes.push({
        title: `${item.data.episode}. ${item.data.title}`,
        url: `${item.data.settings.website}${item.url}`,
        publish_date: item.data.publish_date,
        abstract: striptags(item._templateContent),
        transcript: buildTranscript(item.data.transcripts[item.data.episode])
      })
    }

    return JSON.stringify({ episodes }, null, 2)
  }
}

module.exports = EpisodesFeed
