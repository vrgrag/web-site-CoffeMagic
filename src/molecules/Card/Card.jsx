import React from 'react'
import './Card.scss'

export default function Card({ title, price, image, children }) {
  return (
    <article className="card">
      {image && <img className="card__image" src={image} alt={title} loading="lazy" />}
      <div className="card__body">
        <h3 className="card__title">{title}</h3>
        {price && <div className="card__price">{price}</div>}
        <div className="card__content">{children}</div>
      </div>
    </article>
  )
}
