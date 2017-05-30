#!/usr/bin/env node
const path = require('path')
const update = require('./lib/').update
let oldModelPath = path.resolve(__dirname, process.argv.slice(-1)[0])
const oldModel = require(oldModelPath)

console.log(JSON.stringify(update(oldModel)))
