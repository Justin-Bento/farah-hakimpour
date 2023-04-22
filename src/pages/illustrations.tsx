import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

import Head from "next/head";
import Link from "next/link";

import { client } from "../../sanityClient";


export async function getStaticProps() {
  const posts = await client.fetch(` *[_type == "post"] { _id, title, description, body, slug, "mainImage": mainImage.asset->url } `);
  return {
    props: {
      posts,
    },
  };
}

export default function Illustrations({posts}:any) {
  return (
    <>
      <Head>
        <title>Illustrations - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="p-4 my-32 space-y-16 wrapper">
        <section className="space-y-2 ">
          <h1 className="text-4xl font-extrabold leading-[1.3] tracking-[0.02rem] capitalize"> vibrant, creative Illustrations!</h1>
          <p className="max-w-5xl text-base leading-8 tracking-wider">Bringing my illustrations to life with rich colors and dynamic compositions. From whimsical characters to intricate landscapes, each piece is a unique expression of their artistic vision.</p>
        </section>
        <section className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {posts.map((posts: any) => {
            return (
              <Link key={posts._id} href={`/illustrations/${posts.slug.current}`}>
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
