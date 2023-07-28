import { GetStaticProps } from 'next';
import React from 'react'
import { AllPosts } from '../../typings';
import { client, urlFor } from '../../sanityClient';
import ImageCard from '@/components/ImageCard';
import GridList from '@/components/GridList';
import Head from 'next/head';

export default function projects({ posts }: AllPosts) {
  return (
    <>
      <Head>
        <title>Fara Hakimpour - Projects</title>
        <meta name="title" content="Fara Hakimpour  - Projects" />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <article className="p-4 my-16 lg:container lg:mx-auto sm:p-0">
        <section className="space-y-1.5">
          <h1 className="pb-2 text-5xl font-extrabold tracking-normal capitalize transition-colors scroll-m-20 first:mt-0">Dive into My Creative Process!</h1>
          <p className="text-base tracking-wide lg:tracking-wider lg:text-xl">Welcome to my world of art and imagination! Here, you&#39;ll find a collection of wonderful projects that showcase my unique artistic style. From beautiful illustrations to stunning graphic designs, each creation is a reflection of my deep passion for creativity.</p>
        </section>
        <GridList Columns="grid-cols-1 md:grid-cols-2" className='my-8'>
          {posts.map((post: any) => {
            return <ImageCard key={post._id} Links={`/projects/${post.slug.current}`} Media={urlFor(post.mainImage).url()} Title={post.title} CardType={false} />
          })}
        </GridList>
      </article>
    </>
  )
}

export const getStaticProps: GetStaticProps<AllPosts> = async () => {
  const data = await client.fetch(`
    *[_type == "post"]{_id, title, slug,   "mainImage": mainImage.asset->url  }
  `);
  return {
    props: { posts: data },
  };
};
