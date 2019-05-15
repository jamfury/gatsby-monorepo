# Gatsby We Themes

Learn more about Gatsby Themes here:\
https://www.gatsbyjs.org/blog/2018-11-11-introducing-gatsby-themes/

## Getting Started

### Create a [new gatsby project](https://www.gatsbyjs.org/docs/quick-start/)

```bash
> yarn global add gatsby-cli
> gatsby new we-site-i18n
> cd gatsby-site
```

### Install theme

```bash
> yarn add @jamfury/gatsby-theme-i18n@next
```

### Update `gatsby-config.js` file ([sample repo](./site)):

```js
module.exports = {
  __experimentalThemes: [
    {
      resolve: '@jamfury/gatsby-theme-i18n',
      options: {
        // these options should ideally be in constants somewhere
        // hardcoding here for illustration/usage
        availableLngs: ['en-US', 'de-DE'],
        fallbackLng: 'en-US'
      }
    }
  ],
  ...
}
```

### Create root `./locale` folder

```bash
> mkdir -p ./locale/en-US && touch ./locale/en-US/messages.json
> mkdir -p ./locale/de-DE && touch ./locale/de-DE/messages.json
```

Just to see some localized content, let's add the default Gatsby index page copy
to our messages files.

Add this to `locale/en-US/messages.json`

```json
{
  "Hi people": "Hi people",
  "Welcome to your new Gatsby site.": "Welcome to your new Gatsby site.",
  "Now go build something great.": "Now go build something great.",
  "Go to page {{page}}": "Go to page {{page}}"
}
```

Add this to `locale/de-DE/messages.json`

> These were taken from Google Translate, so may not be very accurate

```json
{
  "Hi people": "hallo Leute",
  "Welcome to your new Gatsby site.": "Willkommen auf Ihrer neuen Gatsby-Site.",
  "Now go build something great.": "Bauen Sie jetzt etwas Großes auf.",
  "Go to page {{page}}": "Gehe zu Seite {{page}}"
}
```

> **Note** maintaining string files are tedious, and there are ways to automate the process. One such approach can be seen here in [this PR from the `labs-www` project](https://github.com/WeConnect/labs-www/pull/18/files) which uses [i18next-parser](https://github.com/i18next/i18next-parser)

### Update Index Page

Update the generated `src/pages/index.js` file with the following:

```jsx
import React from 'react'
import { graphql } from 'gatsby'
import { withI18next } from '@jamfury/gatsby-plugin-i18next'
import { useTranslation } from 'react-i18next'

const IndexPage = () => {
  const { t } = useTranslation()

  return <h1>{t('Index Page!!')}</h1>
}

export default withI18next()(IndexPage)

export const query = graphql`
  query($lng: String) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`
```

### Run Gatsby server

```bash
> yarn develop
```

Once the server is up and running, navigate to [http://localhost:8000/de-DE](http://localhost:8000/de-DE) and you should see some German copy!

## Troubleshooting

> error
> The path passed to gatsby-source-filesystem does not exist on your file > system:
>
> locale
>
> Please pick a path to an existing directory.

The above error means you haven't created the `locale` folder at the root of your project. See [Getting Started](#getting-started) instructions above

> error Plugin @jamfury/gatsby-plugin-i18next returned an error
>
> SyntaxError: Unexpected end of JSON input

If you see the above error, it usually means that your `locale/en-US/messages.json` file has invalid JSON. At the very least, it needs `{}`
