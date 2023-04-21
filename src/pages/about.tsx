import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="">
        <section className="wrapper">
          <h1 className="">About</h1>
        </section>
      </main>
      <Footer />
    </>
  )
}
