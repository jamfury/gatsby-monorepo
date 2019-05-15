import { PureComponent } from 'react'
import { navigate } from 'gatsby'
import { lookup, navigatorLanguages } from 'langtag-utils'

import isBrowser from './utils'

class Redirect extends PureComponent {
  componentDidMount() {
    if (!isBrowser()) this.perform()
  }

  perform = () => {
    const {
      pageContext: { fallbackLng, availableLngs, redirectPage },
    } = this.props

    const detectedLng =
      window.localStorage.getItem('@gatsby-i18n-Lng') ||
      lookup(availableLngs, navigatorLanguages(), fallbackLng)

    window.localStorage.setItem('@gatsby-i18n-Lng', detectedLng)

    const newUrl = `/${detectedLng}${redirectPage}`
    navigate(newUrl, { replace: true })
  }

  render() {
    return null
  }
}

export default Redirect
