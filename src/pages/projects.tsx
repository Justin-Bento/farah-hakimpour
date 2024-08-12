import { GetStaticProps } from "next";
import React from "react";
import { AllPosts } from "../../typings";
import { client, urlFor } from "../../sanityClient";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function projects({ posts }: AllPosts) {
  return (
    <>
      <Head>
        <title>Farah Hakimpour - Projects</title>
        <meta name="title" content="Farah Hakimpour  - Projects" />
        <meta
          name="description"
          content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process."
        />
      </Head>
      <article className="p-4 my-16 lg:container lg:mx-auto sm:px-6 lg:px-8">
        <Breadcrumb className="mb-3 sm:px-6 lg:px-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="font-bold">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-bold text-primary underline">Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <section className="space-y-1.5 px-4 sm:px-6 lg:px-8">
          <h1 className="pb-2 text-5xl font-bold tracking-wide capitalize transition-colors scroll-m-20 first:mt-0 dark:text-white">
            Dive into My Creative Realm!
          </h1>
          <p className="text-base tracking-wide lg:tracking-wider lg:text-xl dark:text-white">
            Where Design and Artistry Converge! A Journey Through Exquisite
            Artistry and Masterful Graphic Solutions.
          </p>
        </section>
        <section className="grid grid-cols-1 gap-4 px-4 my-8 lg:grid-cols-2 sm:px-6 lg:px-8">
          {posts.map((post: any) => {
            return (
              <Link key={post._id} href={`/projects/${post.slug.current}`}>
                <Card  className="border-primary-dark dark:bg-primary-dark dark:ring-1 dark:ring-primary-light">
                  <CardHeader>
                    <div className="relative w-full aspect-square">
                      <Image
                        fill
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        className="object-cover object-top rounded-md hover:opacity-80"
                      />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h2 className="text-lg font-semibold tracking-wide dark:text-white">{post.title}</h2>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </section>
      </article>
    </>
  );
}

export const getStaticProps: GetStaticProps<AllPosts> = async () => {
  const data = await client.fetch(`
    *[_type == "post"]{_id, title, slug,   "mainImage": mainImage.asset->url  }
  `);
  return {
    props: { posts: data },
    revalidate: 60,
  };
};
