'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.onCreatePage = exports.onPreExtractQueries = exports.onCreateNode = exports.onPreBootstrap = void 0

var _onPreBootstrap = _interopRequireDefault(require('./onPreBootstrap'))

exports.onPreBootstrap = _onPreBootstrap.default

var _onCreateNode = _interopRequireDefault(require('./onCreateNode'))

exports.onCreateNode = _onCreateNode.default

var _onPreExtractQueries = _interopRequireDefault(
  require('./onPreExtractQueries')
)

exports.onPreExtractQueries = _onPreExtractQueries.default

var _onCreatePage = _interopRequireDefault(require('./onCreatePage'))

exports.onCreatePage = _onCreatePage.default
