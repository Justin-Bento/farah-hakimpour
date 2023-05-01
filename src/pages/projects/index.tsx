import { GetStaticProps } from "next";
import { client } from "../../../sanityClient";
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Category {
  _id: string;
  title: string;
}

interface CategoryProps {
  data: Category[];
}

export default function CategoryPage(props: CategoryProps) {
  const { data } = props;
  return (
    <>
      <Appbar />
      <main className="my-32 wrapper">
        <section className="my-16 space-y-2">
          <h1 className="font-bold headline-large">
            🎨🖌️ Check Out My Latest Projects!
          </h1>
          <p className="tracking-[0.015rem] body-large">
            Over the my carrer, I&#39;ve been working on a variety of projects
            for clients in different industries. I&#39;ve had the opportunity to
            flex my creative muscles and bring my clients&#39; visions to life
            each post is breaken down into categorys to show my versatility as
            multimedia designer.
          </p>
        </section>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((category) => (
            <>
              <Link href={`projects/${category.title.toString().toLowerCase()}`}>
                <li key={category._id} className="overflow-hidden transition-all hover:opacity-70 bg-fuchsia-300/40 sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">{category.title}</div>
                </li>
              </Link>
            </>
          ))}
        </ul>
      </main>

      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps<CategoryProps> = async () => {
  const data = await client.fetch(`
    *[_type == "category"] {_id, title}
  `);
  return {
    props: { data },
  };
};
