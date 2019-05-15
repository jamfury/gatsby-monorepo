'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _assertThisInitialized2 = _interopRequireDefault(
  require('@babel/runtime/helpers/assertThisInitialized')
)

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
)

var _react = require('react')

var _gatsby = require('gatsby')

var _langtagUtils = require('langtag-utils')

var _utils = _interopRequireDefault(require('./utils'))

var Redirect =
  /*#__PURE__*/
  (function(_PureComponent) {
    ;(0, _inheritsLoose2.default)(Redirect, _PureComponent)

    function Redirect() {
      var _this

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this =
        _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this
      ;(0, _defineProperty2.default)(
        (0, _assertThisInitialized2.default)(_this),
        'perform',
        function() {
          var _this$props$pageConte = _this.props.pageContext,
            fallbackLng = _this$props$pageConte.fallbackLng,
            availableLngs = _this$props$pageConte.availableLngs,
            redirectPage = _this$props$pageConte.redirectPage
          var detectedLng =
            window.localStorage.getItem('@gatsby-i18n-Lng') ||
            (0, _langtagUtils.lookup)(
              availableLngs,
              (0, _langtagUtils.navigatorLanguages)(),
              fallbackLng
            )
          window.localStorage.setItem('@gatsby-i18n-Lng', detectedLng)
          var newUrl = '/' + detectedLng + redirectPage
          ;(0, _gatsby.navigate)(newUrl, {
            replace: true,
          })
        }
      )
      return _this
    }

    var _proto = Redirect.prototype

    _proto.componentDidMount = function componentDidMount() {
      if (!(0, _utils.default)()) this.perform()
    }

    _proto.render = function render() {
      return null
    }

    return Redirect
  })(_react.PureComponent)

var _default = Redirect
exports.default = _default
