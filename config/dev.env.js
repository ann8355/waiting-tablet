'use strict'
const merge = require('webpack-merge')
const basicEnv = require('./basic.env')

module.exports = merge(basicEnv, {
  NODE_ENV: '"development"',
  POS_SERVICES: '"https://zhonghe-globalmall-dev-yakinikulike.lifeplus.tw:10000"',
  IMG_NAME: '"ANNE.jpg"',
})
