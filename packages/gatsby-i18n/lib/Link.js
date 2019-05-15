'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutPropertiesLoose')
)

var _react = _interopRequireDefault(require('react'))

var _propTypes = _interopRequireDefault(require('prop-types'))

var _gatsby = require('gatsby')

var _I18nContext = require('./I18nContext')

var _jsxFileName =
  '/Users/ramin/Projects/jamfury/gatsby-monorepo/packages/gatsby-i18n/src/Link.js'

var Link = function Link(_ref) {
  var to = _ref.to,
    lng = _ref.lng,
    fallbackLng = _ref.fallbackLng,
    children = _ref.children,
    rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, [
      'to',
      'lng',
      'fallbackLng',
      'children',
    ])
  return _react.default.createElement(
    _gatsby.Link,
    (0, _extends2.default)(
      {
        to: lng && lng !== fallbackLng ? '/' + lng + to : '' + to,
      },
      rest,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
        },
        __self: this,
      }
    ),
    children
  )
}

Link.propTypes = {
  to: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired,
}

var _default = function _default(props) {
  return _react.default.createElement(
    _I18nContext.I18nConsumer,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
      },
      __self: this,
    },
    function(_ref2) {
      var lng = _ref2.lng,
        fallbackLng = _ref2.fallbackLng
      return _react.default.createElement(
        Link,
        (0, _extends2.default)(
          {
            lng: lng,
            fallbackLng: fallbackLng,
          },
          props,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24,
            },
            __self: this,
          }
        )
      )
    }
  )
}

exports.default = _default
