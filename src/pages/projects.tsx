import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
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
        <title>Projects - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="p-4 my-16 lg:container lg:mx-auto sm:p-0">
        <section className="space-y-1.5">
          <h1 className="pb-2 text-3xl font-extrabold tracking-normal capitalize transition-colors scroll-m-20 first:mt-0">Here is where all projects will be listed</h1>
          <p className="text-base tracking-wide lg:text-xl text-primary-960/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsa, possimus repellat voluptatem ad molestias eius iste obcaecati. Optio ut eligendi ipsam eos aliquam magni! Explicabo voluptatum fugiat rem dolor!</p>
        </section>
        <GridList Columns="grid-cols-1 md:grid-cols-2" className='my-8'>
          {posts.map((post: any) => {
            return <ImageCard key={post._id} Links={`/projects/${post.slug.current}`} Media={urlFor(post.mainImage).url()} Title={post.title} CardType={false} />
          })}
        </GridList>
      </main>
      <Footer />
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
