import React, { useState } from 'react'

const CartContext = React.createContext([])

export function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
