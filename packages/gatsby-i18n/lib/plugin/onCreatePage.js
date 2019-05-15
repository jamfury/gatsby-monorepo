'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _path = _interopRequireDefault(require('path'))

var onCreatePage = function onCreatePage(_ref, pluginOptions) {
  var page = _ref.page,
    actions = _ref.actions
  var createPage = actions.createPage,
    deletePage = actions.deletePage
  var fallbackLng = pluginOptions.fallbackLng,
    availableLngs = pluginOptions.availableLngs,
    siteUrl = pluginOptions.siteUrl,
    _pluginOptions$redire = pluginOptions.redirect,
    redirect = _pluginOptions$redire === void 0 ? true : _pluginOptions$redire,
    debug = pluginOptions.debug

  if (page.path.includes('dev-404')) {
    return Promise.resolve()
  }

  return new Promise(function(resolve) {
    deletePage(page)

    if (redirect) {
      var redirectComponent = _path.default.resolve(
        './.cache/@gatsby-i18n/redirect.js'
      )

      var redirectPage = (0, _extends2.default)({}, page, {
        component: redirectComponent,
        context: (0, _extends2.default)({}, page.context, {
          availableLngs: availableLngs,
          fallbackLng: fallbackLng,
          lng: null,
          routed: false,
          redirectPage: page.path,
          siteUrl: siteUrl,
          debug: debug,
        }),
      })
      createPage(redirectPage)
    } else {
      var langAwarePage = (0, _extends2.default)({}, page, {
        context: (0, _extends2.default)({}, page.context, {
          availableLngs: availableLngs,
          fallbackLng: fallbackLng,
          lng: fallbackLng,
          routed: true,
          siteUrl: siteUrl,
          debug: debug,
        }),
      })
      createPage(langAwarePage)
    } // if not redirecting to default/fallback language, then exclude
    // it from the available langauges so we don't generate it twice

    var langs = redirect
      ? availableLngs
      : availableLngs.filter(function(l) {
          return l !== fallbackLng
        })
    langs.forEach(function(lng) {
      var localePage = (0, _extends2.default)({}, page, {
        path: '/' + lng + page.path,
        context: (0, _extends2.default)({}, page.context, {
          availableLngs: availableLngs,
          fallbackLng: fallbackLng,
          lng: lng,
          routed: true,
          originalPath: page.path,
          siteUrl: siteUrl,
          debug: debug,
        }),
      })
      createPage(localePage)
    })
    resolve()
  })
}

var _default = onCreatePage
exports.default = _default
