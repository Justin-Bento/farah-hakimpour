import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
// End Of Next.js imports
import { Button } from "@/components/Button";
import { PortableText } from "@portabletext/react";
import { client, urlFor } from "../../../sanityClient";
import RichTextComponents from "@/components/RichTextComponents";
// End Of Sanity imports

export default function ProjectsSlug({ post }: any) {
  return (
    <>
      <Head>
        <title>Farah Hakimpour - {post.title}</title>
        <meta name="title" content={`Farah Hakimpour - ${post.title}`} />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <article className="p-4 py-12 md:py-16 lg:container lg:mx-auto lg:py-20 lg:max-w-[80ch]">
        <section className="my-8 space-y-8 tracking-wide prose-lg">
          <PortableText value={post.body} components={RichTextComponents} />
        </section>
      </article>
    </>
  )
}
export async function generateStaticParams() {
  const query = `*[_type == "post"]{ slug }`;
  const slugs: any = await client.fetch(query)
  const slugRoutes = slugs.map((slug: any) => slug.slug.current)
  return slugRoutes.map((slug: any) => {
    slug
  })
}
export async function getStaticPaths() {
  const query = `*[_type == "post"]{ 'slug': slug.current }`;
  const posts = await client.fetch(query);
  const paths = posts?.map((post: any) => ({ params: { slug: post.slug, }, })) || [];
  return {
    paths,
    fallback: 'blocking',
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
    revalidate: 60 // Update data every 60s
  };
}
