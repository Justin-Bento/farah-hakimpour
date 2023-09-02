import { GetStaticProps } from 'next';
import React from 'react'
import { AllPosts } from '../../typings';
import { client, urlFor } from '../../sanityClient';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';

export default function projects({ posts }: AllPosts) {
  return (
    <>
      <Head>
        <title>Farah Hakimpour - Projects</title>
        <meta name="title" content="Farah Hakimpour  - Projects" />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process." />
      </Head>
      <article className="p-4 my-16 lg:container lg:mx-auto md:p-0">
        <nav className="flex items-center gap-2">
          <Link href='/'>
            <Button variant="ghost" size="sm" className="dark:text-primary-200/80 hover:underline">Home</Button>
          </Link>
          <span className="dark:text-primary-200/50">/</span>
          <Link href='/projects'>
            <Button variant="ghost" size="sm" className="hover:underline">Projects</Button>
          </Link>
        </nav>
        <section className="space-y-1.5">
          <h1 className="pb-2 text-5xl font-bold tracking-wide capitalize transition-colors scroll-m-20 first:mt-0">Dive into My Creative Realm!</h1>
          <p className="text-base tracking-wide lg:tracking-wider lg:text-xl">Where Design and Artistry Converge! A Journey Through Exquisite Artistry and Masterful Graphic Solutions.</p>
        </section>
        <section className='grid grid-cols-1 gap-4 my-8 md:grid-cols-2 lg:grid-cols-3'>
          {posts.map((post: any) => {
            return (
              <Link href={`/projects/${post.slug.current}`} key={post._id} className="overflow-hidden transition-all bg-transparent border rounded-lg focus:ring-primary-300 dark:ring-primary-800 dark:border-primary-800 hover:ring-1 hover:ring-primary-400 hover:cursor-pointer">
                <div className="p-4 sm:p-6">
                  <div className=" relative w-full h-[486px]">
                    <Image fill src={urlFor(post.mainImage).url()} alt={post.title} className="object-cover rounded-md hover:opacity-80" />
                  </div>
                  <p className="mt-2 font-medium leading-7 tracking-wider font-display opacity-70">{post.title}</p>
                </div>
              </Link>
            )
          })}
        </section>
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
    revalidate: 60,
  };
}
