import styles from './styles.module.css'
import Background from '../icons/UchuritaLogoYellowBack'

export function EmpyCart () {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
      <h1 className={styles.text}>
        el carrito esta vacio
      </h1>
    </section>
  )
}
