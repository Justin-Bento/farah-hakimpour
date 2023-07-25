import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { client, urlFor } from "../../../sanityClient";
import Head from "next/head";
import BlogPost from "@/components/BlogPost";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default function ProjectsSlug({ post }: any) {
  return (
    <>
      <Head>
        <title>Project Page</title>
      </Head>
      <Appbar />
      <main className="p-4 my-10 md:my-16 lg:container lg:mx-auto lg:p-0 lg:max-w-[80ch]">
        <article>
          <section className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-wide scroll-m-20">{post.title}</h1>
            <p className="text-xl text-primary-960/80">{post.description}</p>
            <div className="relative aspect-video ">
              <Image fill quality={40} src={urlFor(post.mainImage).url()} alt={`Image of ${post.title}`} className="object-cover " />
            </div>
          </section>
          <section className="my-8 space-y-8 prose-lg">
            <PortableText value={post.body} />
          </section>
        </article>
      </main>
      <Footer />
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
