import { Fragment, useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import UchuritaBigLogo from '../components/icons/UchuritaBigLogo'
import UchuritaLogoYellowBack from '../components/icons/UchuritaLogoYellowBack'
import { ProductCard } from '../components/ProductCard'
import { Loading } from '../components/Loading'

export default function Home () {
  const [productData, setProductData] = useState([])

  useEffect(async () => {
    const response = await fetch('api/products')
    const data = await response.json()
    setProductData(data)
  }, [])

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
          productData.length &&
            productData.map((item, i) =>
              <div
                key={`productCard-${i}`}
                className={styles.productContainer}
              >
                <ProductCard
                  src={item.src}
                  title={item.title}
                  description={item.description}
                  cost={item.cost}
                />
              </div>
            )
        }
      </section>
      {
        !productData.length && <Loading />
      }
    </Fragment>
  )
}
