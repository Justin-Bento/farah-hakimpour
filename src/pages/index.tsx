import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

export default function index() {
  return (
    <>
      <Head>
        <title>Home - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="p-4 my-16 lg:wrapper md:p-0 md:my-0">
        <div className="flex flex-col-reverse justify-center w-full gap-8 md:justify-normal md:p-0 md:flex-row md:items-center">
          <section className="w-full aspect-video md:w-[350px] lg:w-[570px] md:h-[90vh] relative mt-16 md:mt-0">
            <Image
              fill
              quality={70}
              src="/media/main photo.png"
              className="object-cover object-center"
              alt=""
            />
          </section>
          <section className="flex flex-col">
            <h1 className="text-4xl font-bold lg:text-7xl">Farah Hakimpour</h1>
            <p className="text-base leading-10 tracking-wider lg:text-lg">
              See my designs, art, and love of the colour purple!
            </p>
            <div className="mt-8">
              <button
                type="button"
                className="px-3 py-2 text-sm font-semibold text-white rounded-md bg-primary-600 hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
              >
                View Work
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
