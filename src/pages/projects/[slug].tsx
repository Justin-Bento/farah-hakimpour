import { client, urlFor } from "../../../sanityClient";
import Head from "next/head";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function ProjectsSlug({ post }: any) {
  return (
    <>
      <Head>
        <title>Project Page</title>
      </Head>
      <article className="p-4 my-10 md:my-16 lg:container lg:mx-auto lg:p-0 lg:max-w-[80ch]">
        <section className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-wide scroll-m-20">{post.title}</h1>
          <p className="text-xl tracking-wide">{post.description}</p>
          <div className="relative aspect-video ">
            <Image fill quality={40} src={urlFor(post.mainImage).url()} alt={`Image of ${post.title}`} className="object-cover " />
          </div>
        </section>
        <section className="my-8 space-y-8 tracking-wide prose-lg">
          <PortableText value={post.body} />
        </section>
      </article>
    </>
  )
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

export async function getStaticProps({ params }: any) {
  const query = `*[_type == "post" && slug.current == $slug] {
    _id,
    title,
    description,
    'slug': slug.current,
    mainImage {
      asset-> {
        url
      }
    },
    body
  }
  `;
  const options = { slug: params.slug };
  const post = await client.fetch(query, options);
  return {
    props: { post: post[0] },
  };
}
