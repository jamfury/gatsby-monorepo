'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _react = _interopRequireDefault(require('react'))

var _reactHelmet = require('react-helmet')

var _I18nContext = require('./I18nContext')

var _jsxFileName =
  '/Users/ramin/Projects/jamfury/gatsby-monorepo/packages/gatsby-i18n/src/Head.js'

function Head(_ref) {
  var children = _ref.children,
    htmlClasses = _ref.htmlClasses,
    availableLngs = _ref.availableLngs,
    lng = _ref.lng,
    originalPath = _ref.originalPath,
    siteUrl = _ref.siteUrl
  return _react.default.createElement(
    _react.default.Fragment,
    null,
    _react.default.createElement(
      _reactHelmet.Helmet,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
        },
        __self: this,
      },
      _react.default.createElement('html', {
        lang: lng,
        className: htmlClasses,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
        },
        __self: this,
      }),
      _react.default.createElement('link', {
        rel: 'alternate',
        href: '' + siteUrl,
        hrefLang: 'x-default',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
        },
        __self: this,
      }),
      availableLngs.map(function(value) {
        return _react.default.createElement('link', {
          key: value,
          rel: 'alternate',
          href: '' + siteUrl + value + originalPath,
          hrefLang: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
          },
          __self: this,
        })
      }),
      children
    )
  )
}

Head.defaultProps = {
  hreflang: true, // TODO https://github.com/nfl/react-helmet/issues/342
}

var _default = function _default(props) {
  return _react.default.createElement(
    _I18nContext.I18nConsumer,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
      },
      __self: this,
    },
    function(lngProps) {
      return _react.default.createElement(
        Head,
        (0, _extends2.default)({}, lngProps, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
          },
          __self: this,
        })
      )
    }
  )
}

exports.default = _default
