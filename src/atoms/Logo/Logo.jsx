import React from 'react'
import './Logo.scss'

export default function Logo() {
  return (
    <a className="logo" href="/">
      <span className="logo__cup" aria-hidden>☕</span>
      <span className="logo__text">Coffee Magic</span>
    </a>
  )
}
