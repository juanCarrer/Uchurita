import { Fragment, useState, useEffect } from 'react'
import { ProductCardModal } from '../ProductCardModal'
import styles from './styles.module.css'
import Image from 'next/image'

export function ProductCard ({ title, description, src, cost, disableModal }) {
  const maxCaracters = 57
  const [formatedDescription, setFormatedDescription] = useState(description)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // la descripcion debe ser de maximo 57 caracteres
    if (formatedDescription.length > maxCaracters) {
      setFormatedDescription(formatedDescription.slice(0, maxCaracters))
    }
  }, [])

  const modalHandler = () => {
    if (!disableModal) {
      setShowModal(!showModal)
    }
  }

  return (
    <Fragment>
        <div className={styles.container} onClick={modalHandler}>
        <section className={styles.mainSection}>
          <div className={styles.imgContainer}>
            <Image src={src} alt={`foto de ${title}`} width='114' height='114'/>
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoTitle}>
              {title}
            </h3>
            <p className={styles.infoDescription}>
              {formatedDescription}
            </p>
            <h3 className={styles.infoCost}>
              {`$${cost}`}
            </h3>
          </div>
        </section>
      </div>
      {
        showModal && <ProductCardModal
          title={title}
          description={description}
          src={src}
          cost={cost}
          close={modalHandler}
        />
      }
    </Fragment>
  )
}
