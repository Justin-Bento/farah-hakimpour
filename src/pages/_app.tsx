import '@/styles/globals.css'
import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="animate-fadeIn">
      <Appbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
