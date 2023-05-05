import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { client, urlFor } from "../../../sanityClient";
import Head from "next/head";
import BlogPost from "@/components/BlogPost";

export default function ProjectsSlug({ post }: any) {
  return (
    <>
      <Head>
        <title>Project Page</title>
      </Head>
      <Appbar />
      <main className="p-4 my-16 wrapper sm:p-0">
        <BlogPost Headline={post.title} Description={post.description} Media={post.mainImage} Content={post.body} />
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