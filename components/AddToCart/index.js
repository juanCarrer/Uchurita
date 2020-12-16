import CartPlusIcon from '../icons/CartPlus.js'
import styles from './styles.module.css'

export function AddToCart ({ action }) {
  return (
    <div onClick={action} className={styles.container}>
      <h1 className={styles.title}>
        Añadir al carrito
      </h1>
      <CartPlusIcon width={28} height={28} />
    </div>
  )
}
