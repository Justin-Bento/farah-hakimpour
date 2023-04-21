import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import { data } from 'autoprefixer'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Farah Hakimpour</title>
      </Head>
      <Appbar />
      <main className="grid grid-cols-1 p-4 my-16 lg:grid-cols-2 wrapper">
        <section className="w-full space-y-8 text-base font-medium leading-8 tracking-wider lg:max-w-prose">
          <h1 className="text-4xl font-extrabold leading-[1.3] tracking-[0.02rem]">About Farah Hakimpour: Graphic Designer & Self Taught Artist</h1>
          <p>Hi there, I&#39;m Farah Hakimpour - a Graphic Designer and Self Taught Artist. I&#39;m all about creating cool stuff that makes people go &#34;wow!&#34; Whether it&#39;s a branding project, website mockup, or fan art piece, I put my heart and soul into everything I create.</p>
          <p>When I&#39;m designing, you&#39;ll usually find me working my magic with Adobe Illustrator and Photoshop. For my art pieces, I use FireAlpaca and ibisPaint X, often with references to make sure everything looks just right. Music is my muse, and I love jamming out to BTS, Post Malone, Melanie Martinez, and MCR while I work. But when I need a break from the tunes, I dive into my favorite horror podcasts for some spooky inspiration.</p>
          <p>In my free time, you&#39;ll find me drawing fan art of my favorite YouTube personalities and TV shows, or creating original characters. I&#39;m always pushing myself to improve my skills and create better work, and I can&#39;t wait to see where my art takes me next.</p>
          <p>Thanks for stopping by my website, and I hope you enjoy checking out my portfolio! You can follow me on social-media for simpler projects.</p>
        </section>
        <section className="col-span-3 md:col-span-1">
          <div className="relative aspect-video">
            <Image fill quality={40} src="/media/main photo.png" alt='Image Of Farah Hakimpour' className="object-cover object-center rounded-lg" />
          </div>
          <div className="">
            <ul role="list" className="flex flex-col my-8">
              {items.map((item) => (
                <Link href={item.link} key={item.id} className="p-4 transition-all rounded-lg hover:bg-primary-100 hover:cursor-pointer active:bg-primary-300"> {item.title}</Link>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
const items = [
  { id: 1, title: "Instagram", link: "https://www.instagram.com/farahsdesignss_/" },
  { id: 1, title: "LinkedIn", link: "https://www.linkedin.com/in/farah-hakimpour-0b41911b8/" },
  { id: 1, title: "Pintrest", link: "https://www.pinterest.ca/fairyhakimpour/_saved/" },
  // More items...
]