import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Category() {
  const router = useRouter();
  const { category } = router.query;
  
  return (
    <>
      <Head>
        <title>Category - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="p-4 my-32 space-y-8 wrapper sm:p-0">
        <section className="space-y-2" >
          <p className="uppercase body-small" aria-label="project-category">{category}</p>
          <h1 className="tracking-wide headline-large" aria-label="project-category-headline">Lorem Ispum</h1>
          <p className="tracking-wide body-large" aria-label="project-category-body">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        </section>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link href={`/projects/${category}/projectName`} className="w-full transition-all rounded h-96 bg-fuchsia-200 hover:scale-95 hover:opacity-80 hover:cursor-pointer"></Link>
          <li className="w-full transition-all rounded h-96 bg-fuchsia-200 hover:scale-95 hover:opacity-80 hover:cursor-pointer"></li>
          <li className="w-full transition-all rounded h-96 bg-fuchsia-200 hover:scale-95 hover:opacity-80 hover:cursor-pointer"></li>
          <li className="w-full transition-all rounded h-96 bg-fuchsia-200 hover:scale-95 hover:opacity-80 hover:cursor-pointer"></li>
          <li className="w-full transition-all rounded h-96 bg-fuchsia-200 hover:scale-95 hover:opacity-80 hover:cursor-pointer"></li>
          <li className="w-full transition-all rounded h-96 bg-fuchsia-200 hover:scale-95 hover:opacity-80 hover:cursor-pointer"></li>
        </ul>
      </main>
      <Footer />
    </>
  )
}
