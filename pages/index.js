import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import UchuritaBigLogo from '../components/icons/UchuritaBigLogo'
import UchuritaLogoYellowBack from '../components/icons/UchuritaLogoYellowBack'
import { ProductCard } from '../components/ProductCard'

export default function Home () {
  return (
    <Fragment>
      <div className={styles.homeImage}>
        <div className={styles.imageBackground}>
          <UchuritaLogoYellowBack width={500}/>
        </div>
        <div className={styles.imageText}>
          <UchuritaBigLogo />
        </div>
      </div>
      <section className={styles.productSection}>
        {
          [1, 2, 3, 4, 5, 6].map((item, i) =>
            <div
              key={`productCard-${i}`}
              className={styles.productContainer}
            >
              <ProductCard
                src='/parchita.png'
                title='parchita'
                description='Delicioso helado de parchita hecho con leche de la mejor'
                cost='0.7'
              />
            </div>
          )
        }
      </section>
    </Fragment>
  )
}
