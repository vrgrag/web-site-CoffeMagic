import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate'
import MenuGrid from '../../organisms/MenuGrid/MenuGrid'
import Heading from '../../atoms/Heading/Heading'

export default function MenuPage() {
  return (
    <HomeTemplate>
      <section className="container" style={{paddingTop: '24px'}}>
        <Heading level={1}>Меню</Heading>
      </section>
      <MenuGrid />
    </HomeTemplate>
  )
}
