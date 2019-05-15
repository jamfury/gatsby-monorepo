'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = exports.onPreBootstrap = void 0

var _fsExtra = _interopRequireDefault(require('fs-extra'))

var onPreBootstrap = function onPreBootstrap(_ref) {
  var store = _ref.store,
    reporter = _ref.reporter
  var activity = reporter.activityTimer('@gatsby-i18n: copy redirect component')
  activity.start()

  var _store$getState = store.getState(),
    program = _store$getState.program

  var module =
    "\n      const { Redirect } = require('@jamfury/gatsby-i18n');\n      module.exports = Redirect;\n  "
  var dir = program.directory + '/.cache/@gatsby-i18n'

  if (!_fsExtra.default.existsSync(dir)) {
    _fsExtra.default.mkdirSync(dir)
  }

  _fsExtra.default.writeFileSync(dir + '/redirect.js', module)

  activity.end()
}

exports.onPreBootstrap = onPreBootstrap
var _default = onPreBootstrap
exports.default = _default
