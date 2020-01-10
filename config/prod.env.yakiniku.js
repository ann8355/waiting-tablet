'use strict'
const merge = require('webpack-merge')
const basicEnv = require('./basic.env')

module.exports = merge(basicEnv, {
  NODE_ENV: '"production"',
  POS_SERVICES: '`http://${location.hostname}:9999`',
  IMG_NAME: '"YAKINIKULIKE_TAIWAN.svg"',
})
