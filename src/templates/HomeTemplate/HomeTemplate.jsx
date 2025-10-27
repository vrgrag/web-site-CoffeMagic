import React from 'react'
import NavBar from '../../molecules/NavBar/NavBar'
import './HomeTemplate.scss'

export default function HomeTemplate({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <footer className="footer">
        <div className="container">© Coffee Magic, 2025</div>
      </footer>
    </>
  )
}
