import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import Head from "next/head";
import { client } from "../../../sanityClient";
import Link from "next/link";
import GridList from "@/components/GridList";

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

export default function projects(props: CategoryProps) {
  const { data } = props;
  return (
    <>
      <Head>
        <title>Projects - Farah</title>
      </Head>
      <Appbar />
      <main className="p-4 my-16 space-y-8 wrapper sm:p-0">
        <section className="space-y-2">
          <h1 className="title-medium">🖌️ 🎨</h1>
          <h1 className="headline-large">Let&#39;s Create Something Beautiful Together</h1>
          <p className="body-large">As a budding graphic designer, I7&#39;m eager to explore all the design disciplines out there. From logo design to typography to web design, I7&#39;m ready to dive in and bring your vision to life. Let7&#39;s work together to create something beautiful and impactful</p>
        </section>
          <GridList Columns="grid-cols-1 md:grid-cols-2">
            {data.map((category) => (
              <>
                <Link
                  href={`/projects/${category.title.toString().toLowerCase()}`}
                  key={category._id}
                  className="h-[350px] bg-fuchsia-400 hover:opacity-80 transition-all hover:cursor-pointer rounded  flex place-content-center place-items-center"
                >
                  <div className="px-4 py-5 sm:p-6">{category.title}</div>
                </Link>
              </>

            ))}
          </GridList>
      </main>
      <Footer />
    </>
  );
}
