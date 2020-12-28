import { Fragment, useState, useEffect } from 'react'
import { ProductCardModal } from '../ProductCardModal'
import styles from './styles.module.css'

export function ProductCard ({ title, description, src, cost, disableModal, extendDescription }) {
  const logDescriptionCaracters = 120
  const shortDescriptionCarcters = 45
  const [formatedDescription, setFormatedDescription] = useState('description')
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (extendDescription) {
      setFormatedDescription(description.slice(0, logDescriptionCaracters))
    } else {
      const formatedDes = description.slice(0, shortDescriptionCarcters)
      if (formatedDes.length === shortDescriptionCarcters) {
        setFormatedDescription(formatedDes + '...')
      } else {
        setFormatedDescription(formatedDes)
      }
    }
  }, [])

  const modalHandler = () => {
    if (!disableModal) {
      setShowModal(!showModal)
    }
  }

  return (
    <Fragment>
        <article
          className={disableModal ? styles.container : `${styles.container} ${styles.clickable}`}
          onClick={modalHandler}
        >
          <div className={styles.imgContainer}>
            <img src={src} alt={`icono de ${title}`} />
          </div>
          <div className={styles.infoContainer}>
            <h3 className={styles.infoTitle}>
              {title}
            </h3>
            <p className={styles.infoDescription}>
              {formatedDescription}
            </p>
          </div>
            <h3 className={styles.cost}>
              {`$${cost}`}
            </h3>
      </article>
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
