const fs = require('fs/promises')
const path = require('path')

const MAX_PARAGRAPH_LENGTH = 400
const MIN_PARAGRAPH_LENGTH = 150

module.exports = async function transcripts () {
  const transcriptsFolder = path.join(__dirname, '..', '_transcripts')
  const transcriptFiles = await fs.readdir(transcriptsFolder)
  const jsonTranscripts = transcriptFiles.filter((filename) => filename.endsWith('.json'))

  const transcripts = await Promise.all(jsonTranscripts.map(async (filename) => {
    const episodeNumber = filename.replace('.json', '')
    const fileContent = JSON.parse(await fs.readFile(path.join(transcriptsFolder, filename), 'utf8'))

    // Turn the segments into paragraphs, splitting the segments into readable paragraphs of maximum length with a tolerance
    // to avoid very short trailing paragraphs at the end of a speaker's slot

    // First, group all segments into 'slots' representing a sequential set of segments for a speaker
    let currentSlot = { textLength: 0, segments: [] }
    const speakerSlots = [currentSlot]
    let currentSpeakerLabel = ''
    for (const segment of fileContent.segments) {
      if (segment.speakerLabel !== currentSpeakerLabel) {
        currentSlot = { textLength: 0, segments: [] }
        speakerSlots.push(currentSlot)
      }
      currentSlot.textLength += segment.text.length
      currentSlot.segments.push(segment)
      currentSpeakerLabel = segment.speakerLabel
    }

    const paragraphs = []
    for (const speakerSlot of speakerSlots) {
      if (speakerSlot.textLength <= MAX_PARAGRAPH_LENGTH) {
        paragraphs.push(speakerSlot.segments)
      } else {
        // Attempt to split into paragraphs
        let remainingSlotLength = speakerSlot.textLength
        let paraLength = 0
        let paragraph = []
        for (const segment of speakerSlot.segments) {
          if (paraLength > MAX_PARAGRAPH_LENGTH) {
            const lastSegment = paragraph[paragraph.length - 1]
            const trimmed = lastSegment.text.trim()
            // We create a paragraph if we can at this point, but not if the last segment didn't finish a sentence
            // or if the remaining text in the slot won't be long enough for a paragraph on its own.
            if (['?', '!', '.'].includes(trimmed[trimmed.length - 1]) && remainingSlotLength - paraLength > MIN_PARAGRAPH_LENGTH) {
              paragraphs.push(paragraph)
              paragraph = []
              paraLength = 0
            }
          }
          paragraph.push(segment)
          paraLength += segment.text.length
          remainingSlotLength -= segment.text.length
        }
        paragraphs.push(paragraph)
      }
    }

    const episodeTranscript = {
      paragraphs,
      ...fileContent
    }

    return [episodeNumber, episodeTranscript]
  }))

  return Object.fromEntries(transcripts)
}
