const fs = require('fs')
const path = require('path')

const walk = function (dir, done) {
  let results = []
  // eslint-disable-next-line consistent-return
  fs.readdir(dir, function (err, list) {
    if (err) return done(err)
    let pending = list.length
    if (!pending) return done(null, results)
    list.forEach(function (file) {
      // eslint-disable-next-line no-param-reassign
      file = path.resolve(dir, file)
      // eslint-disable-next-line no-shadow
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          // eslint-disable-next-line no-shadow
          walk(file, function (err, res) {
            results = results.concat(res)
            // eslint-disable-next-line no-plusplus
            if (!--pending) done(null, results)
          })
        } else {
          results.push(file)
          // eslint-disable-next-line no-plusplus
          if (!--pending) done(null, results)
        }
      })
    })
  })
}

const readRecursive = (dir) =>
  new Promise((resolve, reject) => {
    walk(dir, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })

const renameFile = (oldPath, newPath) =>
  new Promise((resolve, reject) =>
    fs.rename(oldPath, newPath, function (err) {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  )

const withoutExtension = (f) => {
  const split = f.split('.')
  const fileName = split.slice(0, split.length - 1).join('.')
  return fileName
}

module.exports = {
  readRecursive,
  renameFile,
  withoutExtension,
}
