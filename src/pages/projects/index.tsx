import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProjectsIndex() {
  return (
    <>
      <Appbar />
      <main className="wrapper">
        <section className="">
          <h1 className="">Project Index Page</h1>
        </section>
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2" aria-label="project-category">
          <Link href="/projects/designs" className="w-full transition-all bg-gray-300 hover:cursor-pointer hover:bg-gray-300/60 h-96" aria-label="design-project-category">&nbsp;</Link>
          <Link href="/projects/illustrations" className="w-full transition-all bg-gray-300 hover:cursor-pointer hover:bg-gray-300/60 h-96" aria-label="illustrations-project-category">&nbsp;</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
