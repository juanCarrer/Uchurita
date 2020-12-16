import { Fragment } from 'react'
import Head from 'next/head'
import { Header } from '../Header'
import { Footer } from '../Footer'
import styles from './styles.module.css'

export function PageLayout ({ title = 'Uchurita', children }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={styles.main}>
        {
          children
        }
      </main>
      <Footer />
    </Fragment>
  )
}
