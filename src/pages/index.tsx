import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Home - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="">
        <section className="wrapper">
          <h1 className="">Home</h1>
        </section>
      </main>
      <Footer />
    </>
  )
}
