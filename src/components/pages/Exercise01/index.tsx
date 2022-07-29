import './assets/styles.css'
import { useCart } from '@/hooks/useCart'
import { Link } from 'react-router-dom'

export const Exercise01 = () => {
  const { cart, addItem, addQuantity, removeQuantity, getTotal, movies } =
    useCart()

  return (
    <section className="exercise01">
      <div className="movies__list">
        <ul>
          {movies.map(o => (
            <li key={o.id} className="movies__list-card">
              <ul>
                <li>ID: {o.id}</li>
                <li>Name: {o.name}</li>
                <li>Price: ${o.price}</li>
              </ul>
              <button onClick={() => addItem(o.id)}>Add to cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="movies__cart">
        <ul>
          {cart.map(x => (
            <li key={x.id} className="movies__cart-card">
              <ul>
                <li>ID: {x.id}</li>
                <li>Name: {x.name}</li>
                <li>Price: ${x.price}</li>
              </ul>
              <div className="movies__cart-card-quantity">
                <button onClick={() => removeQuantity(x.id)}>-</button>
                <span>{x.quantity}</span>
                <button onClick={() => addQuantity(x.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="movies__cart-total">
          <p>Total: ${getTotal()}</p>
        </div>
      </div>

      <div className="home__navigation">
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}
