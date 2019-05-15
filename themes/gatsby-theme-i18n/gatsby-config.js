module.exports = options => {
  const {
    availableLngs = ['en'],
    fallbackLng = 'en',
    redirect = false,
    debug = false,
    ...otherOptions
  } = options

  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `locales`,
          name: `locale`,
        },
      },
      {
        resolve: `@jamfury/gatsby-plugin-i18next`,
        options: {
          availableLngs,
          fallbackLng,
          redirect,
          debug,
          ...otherOptions,
        },
      },
    ],
  }
}
