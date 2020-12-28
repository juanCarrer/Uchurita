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
        <link rel='icon' type='image.png' sizes='32x32' href='/favicon32x32.png' />
        <link rel='icon' type='image.png' sizes='16x16' href='/favicon16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
        <meta name='theme-color' content='#141414' />
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
