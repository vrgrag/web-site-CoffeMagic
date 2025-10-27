import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../../atoms/Logo/Logo'
import Button from '../../atoms/Button/Button'
import { useAuth } from '../../context/AuthContext'
import './NavBar.scss'

export default function NavBar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const onLogout = () => { logout(); navigate('/') }

  return (
    <header className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__logo"><Logo /></NavLink>
        <nav className="nav__menu" aria-label="Главное меню">
          <NavLink className="nav__link" to="/menu">Меню</NavLink>
          <NavLink className="nav__link" to="/about">О нас</NavLink>
          <NavLink className="nav__link" to="/contacts">Контакты</NavLink>
        </nav>
        <div className="nav__actions">
          <NavLink to="/order" className="nav__cta">
            <Button kind="ghost" size="sm">Заказать</Button>
          </NavLink>
          {!user ? (
            <NavLink to="/login" className="nav__auth">Войти</NavLink>
          ) : (
            <>
              <NavLink to="/account" className="nav__auth">{user.email}</NavLink>
              <button className="nav__logout" onClick={onLogout} aria-label="Выйти">Выйти</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
