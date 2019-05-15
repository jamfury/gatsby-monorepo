'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

var _interopRequireWildcard = require('@babel/runtime/helpers/interopRequireWildcard')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
)

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _react = _interopRequireWildcard(require('react'))

var _gatsby = require('gatsby')

var _I18nContext = require('./I18nContext')

var _jsxFileName =
  '/Users/ramin/Projects/jamfury/gatsby-monorepo/packages/gatsby-i18n/src/Language.js'

var Language =
  /*#__PURE__*/
  (function(_Component) {
    ;(0, _inheritsLoose2.default)(Language, _Component)

    function Language() {
      var _this

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this
      ;(0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'handleChangeLng',
        function(newLng) {
          var originalPath = _this.props.originalPath
          var newUrl = '/' + newLng + originalPath
          ;(0, _gatsby.navigate)(newUrl)
        }
      )
      return _this
    }

    var _proto = Language.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        availableLngs = _this$props.availableLngs,
        children = _this$props.children,
        lng = _this$props.lng
      return children({
        lng: lng,
        changeLng: this.handleChangeLng,
        availableLngs: availableLngs,
      })
    }

    return Language
  })(_react.Component)

var _default = function _default(props) {
  return _react.default.createElement(
    _I18nContext.I18nConsumer,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
      },
      __self: this,
    },
    function(lngProps) {
      return _react.default.createElement(
        Language,
        (0, _extends2.default)({}, lngProps, props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
          },
          __self: this,
        })
      )
    }
  )
}

exports.default = _default
