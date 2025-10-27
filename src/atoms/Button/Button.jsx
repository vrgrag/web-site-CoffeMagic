import React from 'react'
import './Button.scss'

export default function Button({ children, kind = 'primary', size = 'md', ...rest }) {
  const className = `button button--${kind} button--${size}`
  return (
    <button className={className} {...rest}>{children}</button>
  )
}
