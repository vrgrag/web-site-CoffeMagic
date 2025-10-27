import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate'
import Heading from '../../atoms/Heading/Heading'
import './ContactsPage.scss'

export default function ContactsPage() {
  return (
    <HomeTemplate>
      <section className="contacts container">
        <Heading level={1}>Контакты</Heading>
        <div className="contacts__grid">
          <div className="contacts__card">
            <h3 className="contacts__title">Адрес</h3>
            <p>ул. Примерная, 10<br/>Ежедневно 08:00–21:00</p>
          </div>
          <div className="contacts__card">
            <h3 className="contacts__title">Связаться</h3>
            <p>Тел.: +31 612 345 678<br/>Email: hello@coffeemagic.example</p>
          </div>
        </div>
      </section>
    </HomeTemplate>
  )
}
