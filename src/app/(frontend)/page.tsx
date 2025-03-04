import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function page() {
  const links = ["home", "about", "projects", "contact"]
  return (
    <section className="relative w-full overflow-hidden isolate lg:overflow-visible">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <svg
          className="absolute left-[max(50%,25rem)] opacity-80 blur-[.5px] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-purple-200 dark:stroke-purple-200/50 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
          <svg x="50%" y={-1} className="overflow-visible fill-purple-200 dark:fill-primary/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      {/* End of Background Pattern */}
      <div className="container mx-auto lg:px-8 py-16 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start justify-center gap-y-4 mb-16">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Hi &#128075;, I&#39;m Farah Hakimpour!
            </h1>
            <p className="text-xl text-muted-foreground">
              See my designs, art, and love of the colour purple!
            </p>
            <div className="">
              <Link href="/projects">
                <Button className="bg-purple-800 dark:text-purple-50 dark:hover:bg-purple-900 hover:cursor-pointer">Explore My Projects</Button>
              </Link>
            </div>
          </div>
          <div className="lg:flex lg:justify-end">
            <div className="relative w-full aspect-[3/4] lg:h-screen lg:w-96">
              <Image fill alt='illustration of farah' src="/media/main-photo.webp" className="object-cover rounded md:rounded-none " />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
