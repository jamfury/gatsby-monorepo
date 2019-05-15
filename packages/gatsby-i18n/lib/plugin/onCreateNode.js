'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _regenerator = _interopRequireDefault(require('@babel/runtime/regenerator'))

var _asyncToGenerator2 = _interopRequireDefault(
  require('@babel/runtime/helpers/asyncToGenerator')
)

var _crypto = _interopRequireDefault(require('crypto'))

var onCreateNode =
  /*#__PURE__*/
  (function() {
    var _ref2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var node,
          actions,
          loadNodeContent,
          reporter,
          absolutePath,
          type,
          sourceInstanceName,
          relativeDirectory,
          name,
          id,
          createNode,
          createParentChildLink,
          activity,
          content,
          data,
          contentDigest,
          localeNode
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                ;(node = _ref.node),
                  (actions = _ref.actions),
                  (loadNodeContent = _ref.loadNodeContent),
                  (reporter = _ref.reporter)
                ;(absolutePath = node.absolutePath),
                  (type = node.internal.type),
                  (sourceInstanceName = node.sourceInstanceName),
                  (relativeDirectory = node.relativeDirectory),
                  (name = node.name),
                  (id = node.id)
                ;(createNode = actions.createNode),
                  (createParentChildLink = actions.createParentChildLink)

                if (!(type !== 'File' || sourceInstanceName !== 'locale')) {
                  _context.next = 5
                  break
                }

                return _context.abrupt('return')

              case 5:
                if (!/^_build/.test(relativeDirectory)) {
                  _context.next = 7
                  break
                }

                return _context.abrupt('return')

              case 7:
                if (!/^.DS/.test(relativeDirectory)) {
                  _context.next = 9
                  break
                }

                return _context.abrupt('return')

              case 9:
                //   process.env.NODE_ENV === `production`;
                //   if (mediaType === `application/json`) return;
                activity = reporter.activityTimer(
                  '@gatsby-i18n: create node: ' + relativeDirectory + '_' + name
                )
                activity.start()
                _context.next = 13
                return loadNodeContent(node)

              case 13:
                content = _context.sent
                data = JSON.stringify(JSON.parse(content), undefined, '')
                contentDigest = _crypto.default
                  .createHash('md5')
                  .update(data)
                  .digest('hex')
                localeNode = {
                  id: id + ' >>> Locale',
                  children: [],
                  parent: id,
                  internal: {
                    content: content,
                    contentDigest: contentDigest,
                    type: 'Locale',
                  },
                  lng: relativeDirectory,
                  ns: name,
                  data: data,
                  fileAbsolutePath: absolutePath,
                }
                createNode(localeNode)
                createParentChildLink({
                  parent: node,
                  child: localeNode,
                })
                activity.end()

              case 20:
              case 'end':
                return _context.stop()
            }
          }
        }, _callee)
      })
    )

    return function onCreateNode(_x) {
      return _ref2.apply(this, arguments)
    }
  })()

var _default = onCreateNode
exports.default = _default
