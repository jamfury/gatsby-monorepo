'use strict'

exports.__esModule = true
exports.default = isBrowser

function isBrowser() {
  return typeof window === 'undefined'
}
