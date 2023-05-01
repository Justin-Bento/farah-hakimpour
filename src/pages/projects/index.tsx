import Appbar from "@/components/Appbar"
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ProjectsIndex() {
  return (
    <>
      <Appbar />
      <main className="mb-32 wrapper">
        <section className="my-16 space-y-2">
          <h1 className="font-bold display-small">Project Index Page</h1>
          <p className="tracking-[0.015rem] body-large">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem pariatur, repudiandae quis esse eaque nesciunt quae debitis odit, recusandae facilis similique possimus tenetur optio maiores qui. Maxime ex ipsa quos?</p>
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
