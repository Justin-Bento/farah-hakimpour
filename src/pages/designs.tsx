import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

import Head from "next/head";
import Link from "next/link";

export default function design() {
  return (
    <>
      <Head>
        <title>Design - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="my-32 space-y-16 wrapper">
        <section className="space-y-2 ">
          <h1 className="text-4xl font-extrabold leading-[1.3] tracking-[0.02rem]">Design Projects!</h1>
          <p className="max-w-5xl text-base leading-8 tracking-wider">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum ducimus omnis corporis quis eveniet magni necessitatibus, ullam culpa aut, quibusdam et in quos cumque architecto ea! Accusantium, inventore enim.</p>
        </section>
        <section className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {Design_items.map((project) => {
            return (
              <Link key={project.id} href={`/designs/${project.id}`}>
                <div  className="overflow-hidden h-[350px] transition-all border rounded-lg border-primary-300 bg-primary-200 hover:opacity-80 hover:cursor-pointer">
                  <div className="px-4 py-5 sm:p-6">&nbsp;</div>
                </div>
              </Link>
            )
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
const Design_items = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
]