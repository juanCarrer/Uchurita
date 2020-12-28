import { Fragment, useContext } from 'react'
import cartContext from '../../context/cartContext.js'
import { ProductCard } from '../../components/ProductCard'
import { EmpyCart } from '../../components/EmpyCart'
import CartDeleteIcon from '../../components/icons/CartDelete.js'
import { PaypalButton } from '../../components/PaypalButton'
import styles from '../../styles/cart.module.css'

export default function Card () {
  const { cart, setCart } = useContext(cartContext)
  const cartDeleteHandler = (deleteItem) => {
    setCart(cart.filter((i) => deleteItem.title !== i.title))
  }

  const getCartTotalCost = () => {
    let total = 0
    cart.forEach(item => {
      total += item.cost * item.quantity
    })
    return total
  }

  return (
    <Fragment>
    {
      cart.length
        ? <section className={styles.mainSection}>
          {
            <div>
            {
              cart.map((item, i) => (
                <div className={styles.container} key={`cart-item-${i}`}>
                  <div className={styles.ahead}>
                    <ProductCard
                      {...item}
                      disableModal={true}
                    />
                  </div>
                  <section className={styles.section}>
                    <div className={styles.info}>
                      <h1>Cantidad</h1>
                      <h1>{item.quantity}</h1>
                    </div>
                    <div className={styles.deleteOffCartContainer}>
                      <h1>Sacar el del carrito</h1>
                      <div className={styles.deleteButton} onClick={() => cartDeleteHandler(item)}>
                        <div className={styles.deleteButonContent}>
                          <CartDeleteIcon />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              ))
            }
            </div>
          }
            <PaypalButton total={getCartTotalCost()}/>
          </section>
        : <EmpyCart />
    }
    </Fragment>
  )
}
