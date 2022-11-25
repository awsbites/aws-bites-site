const fs = require('fs/promises')
const path = require('path')

module.exports = async function transcripts () {
  const transcriptsFolder = path.join(__dirname, '..', '_transcripts')
  const transcriptFiles = await fs.readdir(transcriptsFolder)

  const transcripts = await Promise.all(transcriptFiles.map(async (filename) => {
    const episodeNumber = filename.replace('.json', '')
    const fileContent = JSON.parse(await fs.readFile(path.join(transcriptsFolder, filename), 'utf8'))

    return [episodeNumber, fileContent]
  }))

  console.log(Object.fromEntries(transcripts))

  return Object.fromEntries(transcripts)
}
