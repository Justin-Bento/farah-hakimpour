import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Image from 'next/image'

export default function index() {
  return (
    <>
      <Head>
        <title>Home - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="flex flex-col items-center lg:gap-24 lg:flex-row wrapper">
        <section className="w-full h-48 lg:w-[570px] lg:h-[90vh] relative">
          <Image fill quality={70} src="/media/main photo.png" className="object-cover object-center" alt="" />
        </section>
        <section className="flex flex-col gap-2 my-32">
          <h1 className="text-4xl font-bold lg:text-7xl">Farah Hakimpour</h1>
          <p className="text-base leading-10 tracking-wider lg:text-lg">See my designs, art, and love of the colour purple!</p>
          <div className="mt-8">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold text-white rounded-md bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              View Work
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
