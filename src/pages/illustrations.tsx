import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

import Head from "next/head";
import Link from "next/link";

import { client } from "../../sanityClient";

export async function getStaticProps() {
  const data = await client.fetch(`
    {
      "posts": *[_type == "post"] {
        _id,
        title,
        description,
        body,
        slug,
        "mainImage": mainImage.asset->url,
        categories[]-> {
          title
        }
      }
    }
  `);
  const posts = data.posts;
  return {
    props: { posts },
  };
}

export default function Illustrations({ posts }: any) {
  return (
    <>
      <Head>
        <title>Illustrations - Farah Hakimpour</title>
        <meta name="title" content=">Illustrations - Farah Hakimpour" />
        <meta
          name="description"
          content="Get to know Fara Hakimpour - a talented Graphic Designer and Illustrator based in Vancouver. Explore her digital portfolio and discover her creative process. "
        />
      </Head>
      <Appbar />
      <main className="p-4 my-32 space-y-16 wrapper">
        <section className="space-y-2 ">
          <h1 className="text-4xl font-extrabold leading-[1.3] tracking-[0.02rem] capitalize">
            {" "}
            vibrant, creative Illustrations!
          </h1>
          <p className="max-w-5xl text-base leading-8 tracking-wider">
            Bringing my illustrations to life with rich colors and dynamic
            compositions. From whimsical characters to intricate landscapes,
            each piece is a unique expression of their artistic vision.
          </p>
        </section>
        <section className="responsive-grid">
          {posts.map((posts: any) => {
            return (
              <Link
                key={posts._id}
                href={`/illustrations/${posts.slug.current}`}
              >
                <div className="overflow-hidden h-[350px] transition-all border rounded-lg border-primary-300 bg-primary-200 hover:opacity-80 hover:cursor-pointer">
                  <div className="px-4 py-5 sm:p-6">&nbsp;</div>
                </div>
              </Link>
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
