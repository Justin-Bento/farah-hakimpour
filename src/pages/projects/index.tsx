import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../../../sanityClient";
import Link from "next/link";

export default function projects(props: CategoryProps) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Projects - Farah</title>
      </Head>
      <Appbar />
      <main className="my-32 wrapper">
        <section className="">
          <h1 className="headline-large">projects</h1>
        </section>
        <ul className="grid grid-cols-1 gap-8 my-8 md:grid-cols-2">
          {data.map((category) => (
            <Link href={`/projects/${category.title.toString().toLowerCase()}`} key={category._id} className="overflow-hidden border rounded-lg hover:opacity-80 border-fuchsia-300 bg-fuchsia-200 dark:border-fuchsia-700 dark:bg-fuchsia-700">
              <div className="px-4 py-5 sm:p-6">{category.title}</div>
            </Link>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

interface Category {
  _id: string;
  title: string;
}

interface CategoryProps {
  data: Category[];
}

export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
  const data = await client.fetch(`
    *[_type == "category"] {_id, title}
  `);
  return {
    props: { data },
  };
};
