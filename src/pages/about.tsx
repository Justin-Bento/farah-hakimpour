import { Button } from "@/components/ui/button";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

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
            className="absolute left-[max(50%,25rem)] opacity-80 blur-[.5px] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary/50 dark:stroke-primary-light/70 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
            <svg x="50%" y={-1} className="overflow-visible fill-primary/30 dark:fill-primary/20">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        {/* End of Background Pattern */}
        <div className="relative w-full bg-primary-300 aspect-video  lg:aspect-[16/5] rounded-b-2xl">
          <Image fill src="/media/about-page.webp" alt="picture of farah" className="object-cover" />
        </div>
        <article className=" max-w-[90ch] mx-auto my-8 lg:my-16 p-4">
          <Breadcrumb className="mb-3">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-bold">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-bold text-primary underline">About</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-4xl lg:text-5xl tracking-wide font-extrabold capitalize leading-normal [text-wrap: pretty;] dark:text-white">Farah Hakimpour, an artist who specializes in digital art, photography, and graphic design</h1>
          <div className="my-5 text-lg leading-7 space-y-6 dark:text-white">
            <p>Hi there, I&#39;m Farah Hakimpour - a Graphic Designer and Self Taught Artist. I&#39;m all about creating cool stuff that makes people go &#34;wow!&#34; Whether it&#39;s a branding project, website mockup, or fan art piece, I put my heart and soul into everything I create.</p>
            <p>When I&#39;m designing, you&#39;ll usually find me working my magic with Adobe Illustrator and Photoshop. For my art pieces, I use FireAlpaca and ibisPaint X, often with references to make sure everything looks just right. Music is my muse, and I love jamming out to BTS, Post Malone, Melanie Martinez, and MCR while I work. But when I need a break from the tunes, I dive into my favorite horror podcasts for some spooky inspiration.</p>
            <p>In my free time, you&#39;ll find me drawing fan art of my favorite YouTube personalities and TV shows, or creating original characters. I&#39;m always pushing myself to improve my skills and create better work, and I can&#39;t wait to see where my art takes me next.</p>
            <p>Thanks for stopping by my website, and I hope you enjoy checking out my portfolio! You can follow me on social-media for simpler projects.</p>
          </div>
        </article>
      </section>
    </>
  )
}
