import React, { Component } from 'react'
import { I18nextProvider } from 'react-i18next'
import { I18nProvider } from '@jamfury/gatsby-i18n'
//
import setupI18next from './setupI18next'

const withI18next = () => Comp => {
  class I18n extends Component {
    constructor(props) {
      super(props)
      const { pageContext } = props

      this.i18n = setupI18next(pageContext)
      this.activateLng()
    }

    componentDidUpdate(prevProps) {
      const {
        pageContext: { lng },
      } = this.props
      const {
        pageContext: { lng: prevLng },
      } = prevProps

      if (lng !== prevLng) {
        this.activateLng()
      }
    }

    activateLng = () => {
      const { data: dataProp, pageContext } = this.props

      if (dataProp && dataProp.locales) {
        const {
          locales: { edges },
        } = dataProp

        edges.forEach(({ node }) => {
          const { lng, defaultNS = 'messages', data } = node
          const parsedData = JSON.parse(data)

          if (!this.i18n.hasResourceBundle(lng, defaultNS)) {
            this.i18n.addResources(lng, defaultNS, parsedData)
          }
        })
      }

      this.i18n.changeLanguage(pageContext.lng)
    }

    render() {
      return (
        <I18nextProvider i18n={this.i18n}>
          <I18nProvider {...this.props.pageContext}>
            <Comp {...this.props} lng={this.props.pageContext.lng} />
          </I18nProvider>
        </I18nextProvider>
      )
    }
  }

  return I18n
}

export default withI18next
