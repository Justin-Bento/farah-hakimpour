import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>Farah Hakimpour - About</title>
        <meta name="title" content="Fara Hakimpour - About" />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <section className="relative min-h-screen overflow-hidden isolate lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <svg
            className="absolute left-[max(50%,25rem)] blur-[.5px] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-primary-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-primary-900">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        <div className="relative w-full bg-primary-300 aspect-video  lg:aspect-[16/5] rounded-b-2xl">
          <Image fill src="/media/about-page.webp" alt="picture of farah" className="object-cover" />
        </div>
        <article className=" max-w-[90ch] mx-auto my-8 lg:my-16 space-y-4 p-4">
          <h1 className="text-4xl font-extrabold lg:leading-tight tracking-normal scroll-m-20 [text-wrap:balance] capitalize lg:text-5xl">Farah Hakimpour, an artist who specializes in digital art, photography, and graphic design</h1>
        </article>
      </section>
    </>
  )
}
