import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'

import { I18nConsumer } from './I18nContext'

const Link = ({ to, lng, fallbackLng, children, ...rest }) => (
  <GatsbyLink
    to={lng && lng !== fallbackLng ? `/${lng}${to}` : `${to}`}
    {...rest}
  >
    {children}
  </GatsbyLink>
)

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default props => (
  <I18nConsumer>
    {({ lng, fallbackLng }) => (
      <Link lng={lng} fallbackLng={fallbackLng} {...props} />
    )}
  </I18nConsumer>
)
