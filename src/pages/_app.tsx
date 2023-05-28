import Layout from './_layout'
import type { AppProps } from 'next/app'
import "./style.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
