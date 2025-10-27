import { NavLink } from 'react-router-dom'
import Button from '../../atoms/Button/Button'
import Heading from '../../atoms/Heading/Heading'
import Card from '../../molecules/Card/Card'
import './MenuGrid.scss'

const demo = [
  { title: 'Капучино', price: '7.50 BYN', image: 'https://michelbakery.ru/wp-content/uploads/DSCF3358.jpg' },
  { title: 'Латте', price: '10 BYN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_68bUCxAA6b1vKh6hy2wVDFdg8j4JJcCtQ&s' },
  { title: 'Американо', price: '8.90 BYN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6T8Hw4ZTxIirnP0zv4nzdqS6vqFCQ_WO-g&s' },
  { title: 'Флэт уайт', price: '9.90 BYN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGL1cCWbWM1UdMz6eCJmLrAHwXosnPja_HFA&s' },
]

export default function MenuGrid() {
  return (
    <section id="menu" className="menu">
      <div className="container">
        <Heading level={2}>Меню</Heading>
        <div className="menu__grid">
          {demo.map((item) => (
            <Card key={item.title} title={item.title} price={item.price} image={item.image}>
              <div>200 мл · Двойной шот · Молоко</div>
              <div className="menu__actions">
                <NavLink to="/order"><Button size="sm">Заказать</Button></NavLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
