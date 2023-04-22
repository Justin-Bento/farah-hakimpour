import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

import Head from "next/head";
import Link from "next/link";
import { client, urlFor } from "../../sanityClient";
import Image from "next/image";

export async function getStaticProps() {
  const posts = await client.fetch(` *[_type == "post"] { _id, title, description, body, slug, "mainImage": mainImage.asset->url } `);
  return {
    props: {
      posts,
    },
  };
}

export default function design({posts}: any) {
  
  return (
    <>
      <Head>
        <title>Design - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="p-4 my-32 space-y-16 wrapper">
        <section className="space-y-2 ">
          <h1 className="text-4xl font-extrabold leading-[1.3] tracking-[0.02rem]">Visually Stunning Designs From Start To Finish!</h1>
          <p className="max-w-5xl text-base leading-8 tracking-wider">Browse through my work to get a sense of my style and the type of design solutions I can provide for your business or personal brand. Contact me to discuss your project and let&#39;s bring your vision to life together.</p>
        </section>
        <section className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {posts.map((project: any) => {
            return (
              <Link key={project._id} href={`/designs/${project.slug.current}`}>
                <div  className="overflow-hidden transition-all border rounded-lg border-primary-300 bg-primary-200 hover:opacity-80 hover:cursor-pointer">
                  <div className="relative h-[350px]">
                    <Image fill quality={70} src={urlFor(project.mainImage).url()} alt={project.title} className="object-cover object-center rounded-lg" />
                  </div>
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