import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Head from 'next/head'

export default function DesignDynamic() {
  return (
    <>
      <Head>
        <title>Design Dynamic - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="">
        <section className="wrapper">
          <h1 className="">Design Dynamic</h1>
        </section>
      </main>
      <Footer />
    </>
  )
}

