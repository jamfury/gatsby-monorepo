import crypto from 'crypto'

const onCreateNode = async ({ node, actions, loadNodeContent, reporter }) => {
  const {
    absolutePath,
    internal: { type },
    sourceInstanceName,
    relativeDirectory,
    name,
    id,
  } = node

  const { createNode, createParentChildLink } = actions

  if (type !== 'File' || sourceInstanceName !== `locale`) return

  // Ignore _build folder
  if (/^_build/.test(relativeDirectory)) return
  // Ignore .DS_Store
  if (/^.DS/.test(relativeDirectory)) return

  //   process.env.NODE_ENV === `production`;
  //   if (mediaType === `application/json`) return;

  const activity = reporter.activityTimer(
    `@gatsby-i18n: create node: ${relativeDirectory}_${name}`
  )
  activity.start()

  const content = await loadNodeContent(node)
  const data = JSON.stringify(JSON.parse(content), undefined, '')

  const contentDigest = crypto
    .createHash(`md5`)
    .update(data)
    .digest(`hex`)

  const localeNode = {
    id: `${id} >>> Locale`,
    children: [],
    parent: id,
    internal: { content, contentDigest, type: `Locale` },
    lng: relativeDirectory,
    ns: name,
    data,
    fileAbsolutePath: absolutePath,
  }

  createNode(localeNode)

  createParentChildLink({ parent: node, child: localeNode })

  activity.end()
}

export default onCreateNode
