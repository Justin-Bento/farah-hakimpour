import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function IllustrationDynamic() {
  return (
    <>
      <Head>
        <title>Illustration Dynamic - Farah Hakimpour</title>
        <meta name="title" content=">Design - Farah Hakimpour" />
        <meta
          name="description"
          content="Get to know Fara Hakimpour - a talented Graphic Designer and Illustrator based in Vancouver. Explore her digital portfolio and discover her creative process. "
        />
      </Head>
      <Appbar />
      <main className="">
        <section className="wrapper">
          <h1 className="">Illustration Dynamic</h1>
        </section>
      </main>
      <Footer />
    </>
  );
}
