import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import { Button } from '@/components/Button'
import React from 'react'
import Image from 'next/image'

export default function index() {
  return (
    <>
      <Appbar />
      <main className="p-4 py-12 md:p-0 lg:container lg:mx-auto lg:p-0">
        <div className="flex flex-col items-start gap-8 md:flex-row md:justify-between md:items-center">
          <div className="">
            <h1 className="text-5xl font-extrabold tracking-tight scroll-m-20 text-primary-960 ">Farah Hakimpour</h1>
            <p className="mt-3 text-xl leading-7 tracking-wide">See my designs, art, and love of the colour purple!</p>
            <Button className="mt-6">Continue</Button>
          </div>
          <div className="relative w-full aspect-square md:h-screen md:w-72 lg:w-96">
            <Image fill alt='' src="/media/main photo.png" className="object-cover rounded md:rounded-none" />
          </div>
        </div>
      </main>
      <Footer
      />
    </>
  )
}
