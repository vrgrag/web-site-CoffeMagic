import React from 'react'
import './Heading.scss'

export default function Heading({ level = 1, children, align = 'left' }) {
  const Tag = `h${level}`
  const className = `heading heading--l${level} heading--${align}`
  return <Tag className={className}>{children}</Tag>
}
