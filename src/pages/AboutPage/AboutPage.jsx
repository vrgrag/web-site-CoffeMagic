import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate'
import Heading from '../../atoms/Heading/Heading'
import './AboutPage.scss'

export default function AboutPage() {
  return (
    <HomeTemplate>
      <section className="about container">
        <Heading level={1}>О нас</Heading>
        <p className="about__lead">Мы готовим кофе из зёрен свежей обжарки и печём десерты по семейным рецептам.</p>
        <div className="about__grid">
          <div className="about__card">
            <h3 className="about__title">Свежая обжарка</h3>
            <p>Работаем с локальными обжарщиками и подбираем профили под наш эспрессо.</p>
          </div>
          <div className="about__card">
            <h3 className="about__title">Уютное пространство</h3>
            <p>Интерьер из дерева и мягкий свет — идеален для встреч и работы.</p>
          </div>
          <div className="about__card">
            <h3 className="about__title">Сообщество</h3>
            <p>Каппинги, лекции и благотворительные инициативы каждую неделю.</p>
          </div>
        </div>
      </section>
    </HomeTemplate>
  )
}
