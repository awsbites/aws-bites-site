const assert = require('node:assert/strict')
const { readFileSync } = require('node:fs')
const { test } = require('node:test')
const nunjucks = require('nunjucks')
const EpisodesFeed = require('../src/episodes-feed.11ty.js')
const EpisodesRedirects = require('../src/episodes-redirects.11ty.js')

function collection() {
  return Object.freeze(
    [1, 2, 3].map((episode) => ({
      url: `/${episode}-example/`,
      _templateContent: 'Example description',
      data: {
        episode,
        title: 'Example',
        publish_date: new Date(`2026-01-0${episode}`),
        settings: { website: 'https://awsbites.com' },
        transcripts: {},
      },
    })),
  )
}

test('the feed remains newest first without mutating navigation order on repeated renders', async () => {
  const publishedEpisodes = collection()
  const feed = new EpisodesFeed()
  for (let run = 0; run < 2; run++) {
    const result = JSON.parse(
      await feed.render({ collections: { publishedEpisodes } }),
    )
    assert.deepEqual(
      result.episodes.map((item) => item.title),
      ['3. Example', '2. Example', '1. Example'],
    )
    assert.deepEqual(
      publishedEpisodes.map((item) => item.data.episode),
      [1, 2, 3],
    )
  }
})

test('redirect rendering leaves the published collection in chronological order', async () => {
  const publishedEpisodes = collection()
  const result = await new EpisodesRedirects().render({
    collections: { publishedEpisodes },
  })
  assert.equal(result.split('\n')[0], '/3 https://awsbites.com/3-example/')
  assert.deepEqual(
    publishedEpisodes.map((item) => item.data.episode),
    [1, 2, 3],
  )
})

test('the actual homepage collection expression reverses a copy for newest-first display', () => {
  const source = readFileSync(`${__dirname}/../src/index.njk`, 'utf8')
  const expression = source.match(
    /{% set publishedEpisodes = collections[\s\S]*?%}/,
  )[0]
  const publishedEpisodes = collection()
  const output = nunjucks.renderString(
    `${expression}{% for item in publishedEpisodes %}{{ item.data.episode }}{% endfor %}`,
    {
      collections: { publishedEpisodes },
    },
  )
  assert.equal(output, '321')
  assert.deepEqual(
    publishedEpisodes.map((item) => item.data.episode),
    [1, 2, 3],
  )
})
