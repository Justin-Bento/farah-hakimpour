
import { Button } from '@/components/Button'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

export default function index() {
  return (
    <>
      <Head>
        <title>Fara Hakimpour</title>
        <meta name="title" content="Fara Hakimpour " />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <section className="relative w-full overflow-hidden isolate lg:overflow-visible">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-primary-950/20 dark:stroke-primary-700 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-primary-900/20">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
          </svg>
        </div>
        {/* End of Background Pattern */}
        <div className="p-4 md:p-0 lg:container lg:mx-auto lg:p-0">
          <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:items-center">
            <div className="">
              <h1 className="text-5xl font-extrabold tracking-normal scroll-m-20 ">Hi &#128075;, I&#39;m Farah Hakimpour!</h1>
              <p className="mt-3 text-xl leading-7 tracking-wider">See my designs, art, and love of the colour purple!</p>
              <Link href="/projects">
                <Button variant="secondary" className="mt-6">View My Work</Button>
              </Link>
            </div>
            <div className="relative w-full aspect-square md:h-screen md:w-72 lg:w-96">
              <Image fill alt='' src="/media/main-photo.webp" className="object-cover rounded md:rounded-none " />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
