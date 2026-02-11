import { createContext, useContext, useState } from 'react'

/* 1️⃣ Create context */
const CartContext = createContext()

/* 2️⃣ Provider component */
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(
        item => item.name === product.name
      )

      if (existingItem) {
        return prevItems.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productName) => {
    setCartItems(prevItems =>
      prevItems.filter(item => item.name !== productName)
    )
  }

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
  }

  const getSubTotalPrice = () => {
    return cartItems.reduce (
      (toal, items) => {}
    )
  }

  const increaseQuantity = (productName) => {
    setCartItems(prevItems => 
      prevItems.map(item =>
        item.name === productName
        ? {...item, quantity: item.quantity + 1}
        : item
      ))
  }

  const decreaseQuantity = (productName) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.name === productName
        ? {...item, quantity: item.quantity -1}
        : item
      )
      .filter(item => item.quantity > 0)
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalPrice,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

/* 3️⃣ Custom hook */
export const useCart = () => useContext(CartContext)
