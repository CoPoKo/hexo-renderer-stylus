const fs = require('fs/promises')

const pageageFile = {
  "name": "@copoko/hexo-renderer-stylus",
  "version": `0.0.${Date.now()}`,
  "description": "Stylus renderer plugin for Hexo",
  "main": "index",
  "scripts": {
    "eslint": "eslint .",
    "test": "mocha test/index.js",
    "test-cov": "nyc npm run test"
  },
  "directories": {
    "lib": "./lib"
  },
  "files": [
    "lib",
    "index.js"
  ],
  "repository": "CoPoKo/hexo-renderer-stylus",
  "keywords": [
    "hexo",
    "stylus",
    "css",
    "style",
    "stylesheet",
    "styl",
    "renderer"
  ],
  "author": "CoPoKo",
  "license": "MIT",
  "dependencies": {
    "@copoko/nib": "*",
    "stylus": "*"
  },
  "devDependencies": {
    "chai": "^4.3.4",
    "chai-as-promised": "^7.1.1",
    "eslint": "^8.5.0",
    "eslint-config-hexo": "^5.0.0",
    "hexo": "*",
    "mocha": "^9.1.3",
    "nyc": "^15.1.0"
  },
  "engines": {
    "node": ">=12.13.0"
  }
}

const pageageFileStr = JSON.stringify(pageageFile)
fs.writeFile('./package.json', pageageFileStr, 'utf8', (err) => {
  if (err) throw err
})

