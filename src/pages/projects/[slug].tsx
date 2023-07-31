import { client, urlFor } from "../../../sanityClient";
import Head from "next/head";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function ProjectsSlug({ post }: any) {
  return (
    <>
      <Head>
        <title>Fara Hakimpour - {post.title}</title>
        <meta name="title" content={`Fara Hakimpour - ${post.title}`} />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <article className="p-4 py-12 md:py-16 lg:container lg:mx-auto lg:py-20 lg:max-w-[80ch]">
        <nav className="flex items-center gap-2">
          <Link href='/'>
            <Button variant="ghost" size="sm" className="dark:text-primary-200/80 hover:underline">Home</Button>
          </Link>
          <span className="dark:text-primary-200/50">/</span>
          <Link href='/projects'>
            <Button variant="ghost" size="sm" className="dark:text-primary-200/80 hover:underline">Projects</Button>
          </Link>
          <span className="dark:text-primary-200/50">/</span>
          <Link href='/'>
            <Button variant="ghost" size="sm" className="hover:underline">{post.title}</Button>
          </Link>
        </nav>
        <section className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-wide scroll-m-20">{post.title}</h1>
          <p className="text-xl tracking-wide">{post.description}</p>
          <div className="relative aspect-video ">
            <Image fill quality={40} src={urlFor(post.mainImage).url()} alt={`Image of ${post.title}`} className="object-cover" />
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
