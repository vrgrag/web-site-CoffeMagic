import React, { useState } from 'react'
import Button from '../../atoms/Button/Button'
import Heading from '../../atoms/Heading/Heading'
import './OrderForm.scss'

const drinks = [
  { id: 'cap', name: 'Капучино' },
  { id: 'lat', name: 'Латте' },
  { id: 'ame', name: 'Американо' },
  { id: 'fw',  name: 'Флэт уайт' },
]

export default function OrderForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    drink: 'cap',
    size: 'md',
    sugar: 0,
    pickup: ''
  })
  const [status, setStatus] = useState(null)

  const onChange = (e) => {
    const { name, value, type } = e.target
    setForm((f) => ({ ...f, [name]: type === 'number' ? Number(value) : value }))
  }

  const validate = () => {
    const errors = {}
    if (!form.name.trim()) errors.name = 'Укажите имя'
    if (!/^\+?\d[\d\s-]{6,}$/.test(form.phone)) errors.phone = 'Неверный телефон'
    if (!form.pickup) errors.pickup = 'Выберите время'
    return errors
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length) {
      setStatus({ ok: false, message: 'Заполните обязательные поля', errors })
      return
    }
    // Сохраняем "заказ" локально как демо
    const orders = JSON.parse(localStorage.getItem('orders') || '[]')
    orders.push({ ...form, createdAt: new Date().toISOString() })
    localStorage.setItem('orders', JSON.stringify(orders))
    setStatus({ ok: true, message: 'Заказ принят! Мы свяжемся для подтверждения.' })
    setForm({ name: '', phone: '', drink: 'cap', size: 'md', sugar: 0, pickup: '' })
  }

  const err = (field) => status?.errors?.[field]

  return (
    <section className="order">
      <div className="container">
        <Heading level={2}>Сделать заказ</Heading>
        <form className="order__form" onSubmit={onSubmit} noValidate>
          <div className="order__row">
            <label className="order__label" htmlFor="name">Имя*</label>
            <input className={`order__input ${err('name') ? 'order__input--error' : ''}`} id="name" name="name" value={form.name} onChange={onChange} placeholder="Как к вам обращаться" />
            {err('name') && <div className="order__hint">{err('name')}</div>}
          </div>
          <div className="order__row">
            <label className="order__label" htmlFor="phone">Телефон*</label>
            <input className={`order__input ${err('phone') ? 'order__input--error' : ''}`} id="phone" name="phone" value={form.phone} onChange={onChange} placeholder="+31 ..." />
            {err('phone') && <div className="order__hint">{err('phone')}</div>}
          </div>
          <div className="order__row">
            <label className="order__label" htmlFor="drink">Напиток</label>
            <select className="order__select" id="drink" name="drink" value={form.drink} onChange={onChange}>
              {drinks.map(d => <option key={d.id} value={d.id}>{d.name}</option>)}
            </select>
          </div>
          <div className="order__row">
            <span className="order__label">Размер</span>
            <div className="order__segmented">
              <label className={`order__seg ${form.size==='sm'?'order__seg--active':''}`}>
                <input type="radio" name="size" value="sm" checked={form.size==='sm'} onChange={onChange}/>
                Маленький
              </label>
              <label className={`order__seg ${form.size==='md'?'order__seg--active':''}`}>
                <input type="radio" name="size" value="md" checked={form.size==='md'} onChange={onChange}/>
                Средний
              </label>
              <label className={`order__seg ${form.size==='lg'?'order__seg--active':''}`}>
                <input type="radio" name="size" value="lg" checked={form.size==='lg'} onChange={onChange}/>
                Большой
              </label>
            </div>
          </div>
          <div className="order__row">
            <label className="order__label" htmlFor="sugar">Сахар, ч.л.</label>
            <input className="order__input" id="sugar" type="number" min="0" max="5" name="sugar" value={form.sugar} onChange={onChange} />
          </div>
          <div className="order__row">
            <label className="order__label" htmlFor="pickup">Время самовывоза*</label>
            <input className={`order__input ${err('pickup') ? 'order__input--error' : ''}`} id="pickup" type="time" name="pickup" value={form.pickup} onChange={onChange} />
            {err('pickup') && <div className="order__hint">{err('pickup')}</div>}
          </div>
          <div className="order__actions">
            <Button size="lg">Оформить</Button>
          </div>
          {status && (
            <div className={`order__status ${status.ok ? 'order__status--ok' : 'order__status--err'}`}>
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
