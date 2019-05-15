'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _fsExtra = _interopRequireDefault(require('fs-extra'))

var onPreExtractQueries =
  /*#__PURE__*/
  (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref, pluginOptions) {
        var store, _store$getState, program, fragment, file

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                store = _ref.store
                ;(_store$getState = store.getState()),
                  (program = _store$getState.program)
                fragment =
                  "\n    import { graphql } from 'gatsby';\n\n    export const localeFragment = graphql`\n      fragment TranslationFragment on " +
                  (pluginOptions.translationsConnections || 'Locale') +
                  'Connection {\n        edges {\n          node {\n            id\n            lng\n            ns\n            data\n          }\n        }\n      }\n    `;\n'
                file =
                  program.directory +
                  '/.cache/fragments/@gatsby-i18n/fragments.js'
                _context.next = 6
                return _fsExtra.default.outputFile(file, fragment)

              case 6:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function onPreExtractQueries(_x, _x2) {
      return _ref2.apply(this, arguments)
    }
  })()

var _default = onPreExtractQueries
exports.default = _default
