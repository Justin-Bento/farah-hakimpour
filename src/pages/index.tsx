import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

export default function index() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Home - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="p-4 my-16 md:p-0 md:my-0 theme">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex items-center">
            <div className="lg:pl-24">
              <h1 className="font-bold display-medium">Farah Hakimpour</h1>
              <p className="mt-2 text-xl tracking-wide">See my stunning visuals that blend traditional and modern techniques and include my love of the colour purple!</p>
              <button
                type="button"
                onClick={() => router.push('/projects')}
                className="px-3 py-2 mt-8 text-sm font-semibold text-white rounded-md shadow-sm bg-fuchsia-600 hover:bg-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Projects
              </button>
            </div>
          </div>
          <div className="relative w-full h-screen">
            <Image fill quality={90} src={`/media/main photo.png`} alt="&nbsp;" className="object-cover object-center rounded-l aspect-square" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
