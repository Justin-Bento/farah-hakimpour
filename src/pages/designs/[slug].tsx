import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { client } from "../../../sanityClient";
import Head from "next/head";
import { PortableText } from "@portabletext/react";

export default function DesignPost({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title} - Design - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="my-16 wrapper">
        <article className="space-y-4">
          <div className="" aria-label="article-healidne">
            <p>Introducing</p>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </div>
          <div className="" aria-label="">
            <PortableText value={post.body} />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }: any) {
  const query = `*[_type == "post" && slug.current == $slug] {
    _id,
    title,
    description,
    'slug': slug.current,
    body
  }`;

  const options = { slug: params.slug };

  const post = await client.fetch(query, options);

  return {
    props: { post: post[0] },
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "post"]{ 'slug': slug.current }`;

  const posts = await client.fetch(query);

  const paths =
    posts?.map((post: any) => ({
      params: {
        slug: post.slug,
      },
    })) || [];

  return {
    paths,
    fallback: false,
  };
}
