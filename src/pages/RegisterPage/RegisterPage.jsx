import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate'
import Heading from '../../atoms/Heading/Heading'
import Button from '../../atoms/Button/Button'
import { registerUser } from '../../utils/auth'
import { useAuth } from '../../context/AuthContext'
import '../../styles/AuthPages.scss'

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  const onSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || password.length < 6) {
      setStatus({ ok:false, message: 'Заполните все поля (пароль от 6 символов)' })
      return
    }
    const res = registerUser({ name, email, password })
    if (!res.ok) {
      setStatus({ ok:false, message: res.message })
      return
    }
    login(email)
    navigate('/', { replace: true })
  }

  return (
    <HomeTemplate>
      <section className="auth container">
        <Heading level={1}>Регистрация</Heading>
        <form className="auth__form" onSubmit={onSubmit}>
          <label className="auth__label">Имя</label>
          <input className="auth__input" value={name} onChange={e=>setName(e.target.value)} placeholder="Как к вам обращаться"/>
          <label className="auth__label">Email</label>
          <input className="auth__input" value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@example.com"/>
          <label className="auth__label">Пароль</label>
          <input className="auth__input" type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••"/>
          <div className="auth__actions">
            <Button size="lg">Создать аккаунт</Button>
            <Link className="auth__link" to="/login">У меня уже есть аккаунт</Link>
          </div>
          {status && <div className="auth__status auth__status--err">{status.message}</div>}
        </form>
      </section>
    </HomeTemplate>
  )
}
