import { useState, useContext, useRef } from 'react'
import styles from './styles.module.css'
import { ProductCard } from '../ProductCard'
import cartContext from '../../context/cartContext'
import { AddToCart } from '../AddToCart'
import PlusIcon from '../icons/PlusIcon'
import MinusIcon from '../icons/MinusIcon'
import CloseButtonIcon from '../icons/CloseButton'

export function ProductCardModal (props) {
  const modalContainer = useRef()
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

  const clickOutSide = (e) => {
    if (e.target === modalContainer.current) {
      close()
    }
  }

  return (
    <div
      className={styles.modalContainer}
      onClick={clickOutSide}
      ref={modalContainer}
    >
      <main className={styles.modalMain}>
        <div
          className={styles.closeButton}
          onClick={close}
        >
          <CloseButtonIcon />
        </div>
        <ProductCard
          title={title}
          description={description}
          src={src}
          cost={cost}
          disableModal={true}
          extendDescription={true}
        />
        <section className={styles.cartSection}>
          <h1 className={styles.quantity}>
            cantidad
          </h1>
          <div className={styles.quantityControls}>
              <MinusIcon className={styles.control} onClick={subHandler} />
              <h3>{quantity}</h3>
              <PlusIcon className={styles.control} onClick={plusHandler} />
          </div>
          <AddToCart action={addToCarthandler} />
        </section>
      </main>
    </div>
  )
}
