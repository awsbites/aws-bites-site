#!/usr/bin/env node
const path = require('node:path')
const { readFileSync, writeFileSync } = require('node:fs')
const vtt = require('node-webvtt')
const yargs = require('yargs')

const argv = yargs
  .usage('Usage: $0 <transcriptFilePath>')
  .command('$0 <transcriptFilePath>', 'path to the transcript JSON file')
  .demandCommand(1, 'You need to provide a filename argument.')
  .argv

const filename = argv.transcriptFilePath
const transcriptContents = readFileSync(filename, 'utf8')
const transcript = JSON.parse(transcriptContents)

const vttCues = transcript.segments.map((segment, idx) => {
  const { start, end, text } = segment
  return {
    identifier: String(idx + 1),
    start,
    end,
    text: text.trim(),
    styles: ''
  }
})

const parsedPath = path.parse(filename)
const vttPath = path.join(parsedPath.dir, `${parsedPath.name}.vtt`)
const compiledVtt = vtt.compile({ cues: vttCues, valid: true })
writeFileSync(vttPath, compiledVtt)
console.log(vttPath)
