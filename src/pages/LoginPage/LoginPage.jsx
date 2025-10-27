import React, { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate'
import Heading from '../../atoms/Heading/Heading'
import Button from '../../atoms/Button/Button'
import { checkCredentials } from '../../utils/auth'
import { useAuth } from '../../context/AuthContext'
import '../../styles/AuthPages.scss'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const onSubmit = (e) => {
    e.preventDefault()
    const res = checkCredentials({ email, password })
    if (!res.ok) {
      setStatus({ ok: false, message: res.message })
      return
    }
    login(email)
    navigate(from, { replace: true })
  }

  return (
    <HomeTemplate>
      <section className="auth container">
        <Heading level={1}>Вход</Heading>
        <form className="auth__form" onSubmit={onSubmit}>
          <label className="auth__label">Email</label>
          <input className="auth__input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/>
          <label className="auth__label">Пароль</label>
          <input className="auth__input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/>
          <div className="auth__actions">
            <Button size="lg">Войти</Button>
            <Link className="auth__link" to="/register">Регистрация</Link>
          </div>
          {status && <div className="auth__status auth__status--err">{status.message}</div>}
        </form>
      </section>
    </HomeTemplate>
  )
}
