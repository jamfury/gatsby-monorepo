import fs from 'fs-extra'

const onPreExtractQueries = async ({ store }, pluginOptions) => {
  const { program } = store.getState()
  const fragment = `
    import { graphql } from 'gatsby';

    export const localeFragment = graphql\`
      fragment TranslationFragment on ${pluginOptions.translationsConnections ||
        `Locale`}Connection {
        edges {
          node {
            id
            lng
            ns
            data
          }
        }
      }
    \`;
`
  const file = `${program.directory}/.cache/fragments/@gatsby-i18n/fragments.js`

  await fs.outputFile(file, fragment)
}

export default onPreExtractQueries
