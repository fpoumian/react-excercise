import React from 'react'
import PropTypes from 'prop-types'

const Button = ({onClick, primary = false, children}) => (
  <button onClick={onClick} className={`button ${primary ? `button--primary` : ``} `}>{children}</button>
)


Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  children: PropTypes.node,
}

export default Button