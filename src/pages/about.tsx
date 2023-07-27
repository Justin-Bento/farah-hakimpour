import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>Fara Hakimpour - About</title>
        <meta name="title" content="Fara Hakimpour - About" />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <section className="relative px-6 py-24 overflow-hidden isolate sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 dark:stroke-primary-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <h1 className="pb-2 mt-2 text-5xl font-bold tracking-normal transition-colors scroll-m-20 first:mt-0">Farah Hakimpour&#39;s</h1>
                <p className="mt-6 text-base tracking-wider lg:text-xl text-primary-960/70 dark:text-primary-50/80">
                  Welcome to the world of Farah Hakimpour, an artist who specializes in digital art, photography, and graphic design.
                </p>
              </div>
            </div>
          </div>
          <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <div className="w-[48rem] sm:w-[57rem] aspect-square h-[26rem] relative">
              <Image
                fill
                className="object-cover object-center bg-gray-900 shadow-xl max-w-none rounded-xl ring-1 ring-gray-400/10 "
                src="/media/dummy-image.png"
                alt=""
              />
            </div>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl space-y-4 text-base leading-7 tracking-wider text-gray-700 lg:max-w-lg">
                <p>
                  Hi there, I&#39;m Farah Hakimpour - a Graphic Designer and Self
                  Taught Artist. I&#39;m all about creating cool stuff that makes
                  people go &#34;wow!&#34; Whether it&#39;s a branding project,
                  website mockup, or fan art piece, I put my heart and soul into
                  everything I create.
                </p>
                <p>
                  When I&#39;m designing, you&#39;ll usually find me working my
                  magic with Adobe Illustrator and Photoshop. For my art pieces, I
                  use FireAlpaca and ibisPaint X, often with references to make sure
                  everything looks just right. Music is my muse, and I love jamming
                  out to BTS, Post Malone, Melanie Martinez, and MCR while I work.
                  But when I need a break from the tunes, I dive into my favorite
                  horror podcasts for some spooky inspiration.
                </p>
                <p>
                  In my free time, you&#39;ll find me drawing fan art of my favorite
                  YouTube personalities and TV shows, or creating original
                  characters. I&#39;m always pushing myself to improve my skills and
                  create better work, and I can&#39;t wait to see where my art takes
                  me next.
                </p>
                <p>
                  Thanks for stopping by my website, and I hope you enjoy checking
                  out my portfolio! You can follow me on social-media for simpler
                  projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
