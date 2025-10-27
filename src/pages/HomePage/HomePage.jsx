import React from 'react'
import HomeTemplate from '../../templates/HomeTemplate/HomeTemplate'
import Hero from '../../organisms/Hero/Hero'
import MenuGrid from '../../organisms/MenuGrid/MenuGrid'
import OfferSlider from '../../organisms/OfferSlider/OfferSlider' // ✅ добавили

export default function HomePage() {
  return (
    <HomeTemplate>
      <Hero />
      <OfferSlider /> {}
      <MenuGrid />
    </HomeTemplate>
  )
}
