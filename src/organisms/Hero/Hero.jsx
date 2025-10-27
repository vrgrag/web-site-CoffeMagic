import React from 'react'
import { NavLink } from 'react-router-dom'
import Heading from '../../atoms/Heading/Heading'
import Button from '../../atoms/Button/Button'
import './Hero.scss'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__left">
          <Heading level={1}>Ваш идеальный кофе — здесь</Heading>
          <p className="hero__lead">Свежая обжарка, фирменные десерты и уютная атмосфера каждый день.</p>
          <div className="hero__actions">
            <NavLink to="/menu"><Button size="lg">Посмотреть меню</Button></NavLink>
            <NavLink to="/order"><Button kind="ghost" size="lg">Забронировать</Button></NavLink>
          </div>
        </div>
        <div className="hero__right" aria-hidden>
          <div className="hero__photo"></div>
        </div>
      </div>
    </section>
  )
}
