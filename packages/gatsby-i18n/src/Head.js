import React from 'react'
import { Helmet } from 'react-helmet'

import { I18nConsumer } from './I18nContext'

function Head({
  children,
  htmlClasses,
  availableLngs,
  lng,
  originalPath,
  siteUrl,
}) {
  return (
    <>
      <Helmet>
        <html lang={lng} className={htmlClasses} />
        <link rel="alternate" href={`${siteUrl}`} hrefLang="x-default" />
        {availableLngs.map(value => (
          <link
            key={value}
            rel="alternate"
            href={`${siteUrl}${value}${originalPath}`}
            hrefLang={value}
          />
        ))}
        {children}
      </Helmet>
    </>
  )
}

Head.defaultProps = {
  hreflang: true, // TODO https://github.com/nfl/react-helmet/issues/342
}

export default props => (
  <I18nConsumer>{lngProps => <Head {...lngProps} {...props} />}</I18nConsumer>
)
