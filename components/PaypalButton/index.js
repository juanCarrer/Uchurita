import { useEffect } from 'react'
import styles from './styles.module.css'

export function PaypalButton ({ total }) {
  useEffect(() => {
    paypal.Buttons({ //eslint-disable-line

      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: total
            }
          }]
        })
      },

      onApprove: (data, actions) => {
        alert('transaccion terminada con exito')
      }

    }).render('#paypal-button-container')
  }, [])

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.totalCost}>Total ${total}</h1>
      <div
        className={styles.buttonContainer}
        id='paypal-button-container'
      >
      </div>
    </div>
  )
}
