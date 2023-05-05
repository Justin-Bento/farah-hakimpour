import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Head>
        <title>Farah Hakimpour</title>
        <meta name="description" content="Explore Farah Hakimpour's portfolio of digital art, drawing, and graphic design. Unique, traditional, and modern techniques." />
        <meta name="keywords" content="Digital art, Photography, Graphic design, Traditional techniques Modern techniques Illustration, Website design, Custom art, Creative services, Visuals, Portfolio, Artistic, style,High-quality, Professional"/>
      </Head>
      <Appbar />
      <main className="p-4 my-16 md:p-0 md:my-0 theme">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex items-center">
            <div className="lg:pl-24">
              <h1 className="font-bold display-medium">Farah Hakimpour</h1>
              <p className="mt-2 text-xl tracking-wide">See my stunning visuals that blend traditional and modern techniques and include my love of the colour purple!</p>
              <Link
                type="button"
                href="/projects"
                className="px-3 py-2 mt-8 text-sm font-semibold text-white rounded-md shadow-sm bg-fuchsia-600 hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </Link>
            </div>
          </div>
          <div className="relative w-full h-screen">
            <Image fill quality={90} src={`/media/dummy-image.png`} alt="&nbsp;" className="object-cover object-center rounded-l aspect-square" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
