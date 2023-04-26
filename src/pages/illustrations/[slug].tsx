import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { client, urlFor } from "../../../sanityClient";
import Head from "next/head";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function IllustrationsPost({ post }: any) {
  return (
    <>
      <Head>
        <title>{post.title} - Illustrations - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="my-16 wrapper">
        <article className="space-y-4">
          <div className="pb-4 border-b" aria-label="article-healidne">
            <h1 className="mb-2 font-bold display-small">{post.title}</h1>
            <p className="title-large">{post.description}</p>
          </div>
          <div className="mt-8 space-y-4 body-large" aria-label="article-body">
          <div className="relative h-[480px] w-full">
            <Image
              fill
              quality={70}
              src={urlFor(post.mainImage).url()}
              alt={post.slug}
              className="object-cover object-center rounded-lg"
            />
          </div>
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
    categories[]-> { title }
    "mainImage": mainImage.asset->url,
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
