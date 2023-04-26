import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card"
import Head from "next/head";

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
          <h1 className="headline-large">
            {" "}
            vibrant, creative Illustrations!
          </h1>
          <p className="max-w-5xl body-large">
            Bringing my illustrations to life with rich colors and dynamic
            compositions. From whimsical characters to intricate landscapes,
            each piece is a unique expression of their artistic vision.
          </p>
        </section>
        <section className="responsive-grid">
          {posts.filter((post: any) =>
            post.categories.some(
              (category: any) => category.title === "Illustrations"
            )
          ).map((post: any) => {
            return <Card key={post._id} Headline={post.title}  Media={post.mainImage} URL={`/illustrations/${post.slug.current}`} />
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
