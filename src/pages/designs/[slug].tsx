import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";

export default function DesignDynamic() {
  return (
    <>
      <Head>
        <title>Design Dynamic - Farah Hakimpour</title>
        <meta name="title" content=">Design - Farah Hakimpour" />
        <meta
          name="description"
          content="Get to know Fara Hakimpour - a talented Graphic Designer and Illustrator based in Vancouver. Explore her digital portfolio and discover her creative process. "
        />
      </Head>
      <Appbar />
      <main className="wrapper">
        <Content />
      </main>
      <Footer />
    </>
  );
}

function Content() {
  return (
    <article className="my-16 space-y-8">
      <div className="">
        <div className="space-y-4" aria-label="content-headline">
          <p className="text-sm font-semibold leading-7 text-purple-400">
            Article Post Demo
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl lg:text-5xl ">
            5 Tips for Starting a Successful Online Business
          </h1>
          <p className="text-xl font-medium leading-7 tracking-wide text-purple-600">
            Starting an online business can be both exciting and daunting. With
            so many options and possibilities, it can be hard to know where to
            start. In this post, we&#39;ll be sharing five tips to help you launch a
            successful online business and achieve your goals
          </p>
          <div className="border"></div>
        </div>
        {/* End Of Content Headline */}
        <div className="grid grid-cols-1 gap-8 mt-4 text-base leading-7 tracking-wide text-gray-700 lg:max-w-none lg:grid-cols-2">
          <div>
            <p>
              Identify your niche: One of the keys to success in any business is
              finding your niche. This means identifying a specific area or
              market that you can serve better than anyone else. Research your
              target audience and competition to help you narrow down your
              niche.
            </p>
            <p className="mt-8">
              Build a strong online presence: Your online presence is your
              digital storefront, so it&#39;s important to make a strong impression.
              This includes having a professional website, active social media
              profiles, and engaging content.
            </p>
          </div>
          <div>
            <p>
              Develop a solid business plan: A business plan is a roadmap that
              outlines your goals, strategies, and tactics for achieving
              success. It should include details on your target market, pricing,
              marketing, and financial projections.
            </p>
            <p className="mt-8">
              Focus on customer service: Your customers are the lifeblood of
              your business, so it&#39;s important to provide them with excellent
              service. This includes being responsive to their needs, offering
              high-quality products and services, and going above and beyond to
              exceed their expectations.
            </p>
          </div>
        </div>
      </div>
      <div className=" relative aspect-video w-full mb-[-12%] ring-gray-900/10">
        <Image
          fill
          className="rounded-xl ring-1 ring-fuchsia-800"
          src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1247&q=80"
          alt=""
        />
      </div>
    </article>
  );
}
