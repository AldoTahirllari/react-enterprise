const minimist = require('minimist')
const { readRecursive, renameFile, withoutExtension } = require('./helpers/fs')
const { log, error } = require('./helpers/log')

const { DIR, FROM = 'js', TO = 'jsx' } = minimist(process.argv.slice(2))

const extensionChanger = (ext) => (file) => {
  const fileWithoutExtension = withoutExtension(file)
  return `${fileWithoutExtension}.${ext}`
}

const fileExtensionChanger = extensionChanger(TO)

const modifyFiles = async (dir, modifier) => {
  // todo implement from, so it doesn't transform every file. Probably a good idea to use glob
  const files = await readRecursive(dir, FROM)
  const tasks = files.map(modifier)
  await Promise.all(tasks)
}

;(async () => {
  if (DIR) {
    const modifier = async (fileName) => {
      const fileNameWithChangedExtension = fileExtensionChanger(fileName)
      if (fileNameWithChangedExtension === fileName) {
        log('skipping', fileName)
        return
      }
      await renameFile(fileName, fileNameWithChangedExtension)
      log(fileName, '=>', fileNameWithChangedExtension)
    }
    await modifyFiles(DIR, modifier)
    log('done')
  } else {
    error('Please specify a DIR argument')
  }
})()
