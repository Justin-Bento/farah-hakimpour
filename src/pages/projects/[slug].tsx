import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
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
      <Appbar />
      <main className="p-4 my-16 wrapper sm:p-0">
        <article className="space-y-4 prose">
          <Content Headline={post.title} Description={post.description} Media={post.mainImage} Infromation={<PortableText value={post.body}/>} />
        </article>
      </main>
      <Footer />
    </>
  )
}


function Content(props: any) {
  return (
    <div className="relative py-16 overflow-hidden isolate lg:overflow-visible lg:px-0">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.Headline}</h1>
              <p className="mt-6 text-xl ">
              {props.Description}
              </p>
              <p className="mt-8 space-y-8">
              {props.Infromation}
              </p>
            </div>
          </div>
        </div>
        <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="w-[48rem] sm:w-[57rem] aspect-square h-96 relative ">
          <Image
            fill
            className="bg-gray-900 max-w-none rounded-xl ring-1 ring-gray-400/10"
            src={urlFor(props.Media).url()}
            alt=""
          />
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            </div>
          </div>
        </div>
      </div>
    </div>
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