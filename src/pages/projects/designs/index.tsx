import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";

import Head from "next/head";
import { client } from "../../../../sanityClient";
import Card from "@/components/Card";


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


export default function design({ posts }: any) {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Design - Farah Hakimpour</title>
        <meta name="title" content=">Design - Farah Hakimpour" />
        <meta
          name="description"
          content="Get to know Fara Hakimpour - a talented Graphic Designer and Illustrator based in Vancouver. Explore her digital portfolio and discover her creative process. "
        />
      </Head>
      <Appbar />
      <main className="p-4 my-32 space-y-16 wrapper">
        <section className="space-y-2 ">
          <h1 className="mb-2 font-bold headline-large">
            Visually Stunning Designs From Start To Finish!
          </h1>
          <p className="max-w-5xl body-large">
            Browse through my work to get a sense of my style and the type of
            design solutions I can provide for your business or personal brand.
            Contact me to discuss your project and let&#39;s bring your vision
            to life together.
          </p>
        </section>
        <section className="responsive-grid">
          {posts.filter((post: any) =>
            post.categories.some(
              (category: any) => category.title === "Designs"
            )
          ).map((post: any) => {
            return <Card key={post._id} Headline={post.title}  Media={post.mainImage} URL={`/projects/designs/${post.slug.current}`} />
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
