const { readFile } = require('node:fs/promises')
// const { search } = require('@orama/orama')
const { searchWithHighlight, afterInsert: highlightAfterInsert } = require('@orama/plugin-match-highlight')
const { restore } = require('@orama/plugin-data-persistence')

async function main () {
  const searchIndexData = await readFile('dist/search.json', 'utf-8')
  const index = await restore('json', searchIndexData.toString())
  const term = process.argv.slice(2).join(' ')

  const searchResult = await searchWithHighlight(index, {
    term,
    properties: '*',
    boost: {
      title: 2,
      description: 1.5
    }
  })

  console.log(`Results for "${term}": `)

  for (const hit of searchResult.hits) {
    console.log(`\n-> ${hit.id}`)
    console.log(hit.document)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
