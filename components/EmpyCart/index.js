import styles from './styles.module.css'
import Background from '../icons/UchuritaLogoYellowBack'

export function EmpyCart () {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
        <Background />
      </div>
      <h1 className={styles.text}>
        El carrito esta vacío
      </h1>
    </section>
  )
}
