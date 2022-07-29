import { useState } from 'react'

export const useCart = () => {
  const movies = [
    {
      id: 1,
      name: 'Star Wars',
      price: 20,
    },
    {
      id: 2,
      name: 'Minions',
      price: 25,
    },
    {
      id: 3,
      name: 'Fast and Furious',
      price: 10,
    },
    {
      id: 4,
      name: 'The Lord of the Rings',
      price: 5,
    },
  ]
  const discountRules = [
    {
      m: [3, 2],
      discount: 0.25,
    },
    {
      m: [2, 4, 1],
      discount: 0.5,
    },
    {
      m: [4, 2],
      discount: 0.1,
    },
  ]

  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Star Wars',
      price: 20,
      quantity: 2,
    },
  ])

  const addQuantity = (id: number) => {
    const newCart = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        }
      }
      return item
    })
    setCart(newCart)
  }

  const removeQuantity = (id: number) => {
    const newCart = cart
      .map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          }
        }
        return item
      })
      .filter(item => item.quantity > 0)
    setCart(newCart)
  }

  const getTotal = () => {
    let total = 0
    cart.forEach(item => {
      total += item.price * item.quantity
    })
    return total
  }

  const addItem = (id: number) => {
    if (cart.find(item => item.id === id)) {
      addQuantity(id)
    } else {
      const newCart = cart.concat({
        id,
        name: movies.find(movie => movie.id === id).name,
        price: movies.find(movie => movie.id === id).price,
        quantity: 1,
      })
      setCart(newCart)
    }
  }

  return {
    cart,
    addItem,
    removeQuantity,
    getTotal,
    addQuantity,
    movies,
  }
}
