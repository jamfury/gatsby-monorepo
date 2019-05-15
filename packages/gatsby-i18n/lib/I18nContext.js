'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.I18nProvider = I18nProvider
exports.I18nConsumer = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutPropertiesLoose')
)

var _react = _interopRequireDefault(require('react'))

var _jsxFileName =
  '/Users/ramin/Projects/jamfury/gatsby-monorepo/packages/gatsby-i18n/src/I18nContext.js'

var I18nContext = _react.default.createContext()

function I18nProvider(_ref) {
  var children = _ref.children,
    rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ['children'])
  return _react.default.createElement(
    I18nContext.Provider,
    {
      value: (0, _extends2.default)({}, rest),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
      },
      __self: this,
    },
    children
  )
}

var I18nConsumer = I18nContext.Consumer
exports.I18nConsumer = I18nConsumer
