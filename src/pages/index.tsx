import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <Head>
        <title>Farah Hakimpour</title>
        <meta name="title" content="Farah Hakimpour" />
        <meta name="description" content="Experience the captivating evolution of my design aesthetic. As my diverse portfolio ignites your creative sparks and ignghtes our love for the colour of purple" />
      </Head>
      <Appbar />
      <main>
        <Section_Hero />
      </main>
      <Footer />
    </>
  );
}


function Section_Hero() {
  return (
    <div className="relative overflow-hidden bg-primary-950 isolate">
      <div className="container p-4 py-8 mx-auto lg:py-24 lg:p-0 lg:flex">
        <div className="flex-shrink-0 max-w-2xl mx-auto lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-primary-700">
                <span>Farah Hamkinpor</span>
                {/* <ChevronRightIcon className="w-5 h-5 text-gray-500" aria-hidden="true" /> */}
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold leading-normal tracking-normal text-primary-950 sm:text-6xl">
            Dive into My Creative World!
          </h1>
          <p className="mt-6 text-lg leading-8 text-primary-700">
            Witness the evolution of my talent and see how my creative sparks ignite and an eye for aesthetic appeal into my diverse portfolio

          </p>
          <div className="flex items-center mt-10 gap-x-6">
            <Link
              href="/projects"
              className="rounded-md transition-all bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Get started
            </Link>
            <Link href="/about" className="text-sm font-semibold leading-6 text-primary-700">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="flex max-w-2xl mx-auto mt-16 sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="flex-none max-w-3xl sm:max-w-5xl lg:max-w-none">
            <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
