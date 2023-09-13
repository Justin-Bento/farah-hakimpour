import Head from "next/head";
// End Of Next.js imports
import { PortableText } from "@portabletext/react";
import { client } from "../../../sanityClient";
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
          <h1>{post.title}</h1>
          <p>{post.description}</p>
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
  const query = `*[_type == "post" && slug.current == $slug] { title, description, body }
  `;
  const options = { slug: params.slug };
  const post = await client.fetch(query, options);
  return {
    props: { post: post[0] },
    revalidate: 60 // Update data every 60s
  };
}
