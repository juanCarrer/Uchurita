import { useState, useContext } from 'react'
import styles from './styles.module.css'
import { ProductCard } from '../ProductCard'
import cartContext from '../../context/cartContext.js'
import { AddToCart } from '../AddToCart'
import PlusIcon from '../icons/PlusIcon.js'
import MinusIcon from '../icons/MinusIcon.js'

export function ProductCardModal (props) {
  const { title, description, src, cost, close } = props
  const quantityUnit = 5
  const [quantity, setQuantity] = useState(quantityUnit)
  const { cart, setCart } = useContext(cartContext)

  const plusHandler = () => {
    setQuantity(quantity + quantityUnit)
  }
  const subHandler = () => {
    if (quantity > quantityUnit) {
      setQuantity(quantity - quantityUnit)
    }
  }

  const addToCarthandler = () => {
    let alreadyInCart = false

    cart.forEach((element, i) => {
      if (element.title === title && element.description === description) {
        cart[i].quantity += quantity
        alreadyInCart = true
      }
    })

    if (!alreadyInCart) {
      setCart([...cart, { ...props, quantity: quantity }])
    }

    close()
  }

  return (
    <div className={styles.modalContainer}>
      <main className={styles.modalMain} >
        <h1
          className={styles.closeButton}
          onClick={close}
        >
          X
        </h1>
        <ProductCard
          title={title}
          description={description}
          src={src}
          cost={cost}
          disableModal={true}
        />
        <section className={styles.cartSection}>
          <h1 className={styles.quantity}>
            cantidad
          </h1>
          <div className={styles.quantityControls}>
              <MinusIcon onClick={subHandler} />
              <h3>{quantity}</h3>
              <PlusIcon onClick={plusHandler} />
          </div>
          <AddToCart action={addToCarthandler} />
        </section>
      </main>
    </div>
  )
}
