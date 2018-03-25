import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onClick, primary = false, children}) => (
  <button onClick={e => onClick(e)} className={`btn ${primary ? `btn--primary` : `btn--default`} `}>{children}</button>
)


Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  children: PropTypes.node,
}

export default Button