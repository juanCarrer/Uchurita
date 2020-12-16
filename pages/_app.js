import { Fragment } from 'react'
import { PageLayout } from '../components/PageLayout'
import { CartContextProvider } from '../context/cartContext.js'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {
  return (
    <Fragment>
      <CartContextProvider>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </CartContextProvider>
      <script src='https://www.paypal.com/sdk/js?client-id=AXT9vzUZB-BGIm8-I8xA2BYoEkTVQhSLRh4dLk6NKqH6BzinS0lomh7ucXtjbyfJLD_7TUr66PNpwQK_'></script>
    </Fragment>
  )
}

export default MyApp
