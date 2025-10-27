import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate'
import Heading from '../../atoms/Heading/Heading'
import { useAuth } from '../../context/AuthContext'

export default function AccountPage() {
  const { user } = useAuth()
  return (
    <HomeTemplate>
      <section className="container" style={{padding:'32px 0 56px'}}>
        <Heading level={1}>Личный кабинет</Heading>
        <p>Вы вошли как <b>{user?.email}</b>.</p>
      </section>
    </HomeTemplate>
  )
}
