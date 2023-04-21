import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function IllustrationDynamic() {
  return (
    <>
      <Head>
        <title>Illustration Dynamic - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="">
        <section className="wrapper">
          <h1 className="">Illustration Dynamic</h1>
        </section>
      </main>
      <Footer />
    </>
  )
}

