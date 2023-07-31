import '@/styles/globals.css'
import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/logo-favicon.svg" />
      </Head>
      <main className="animate-fadeIn">
        <Appbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}
