import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  BsFillInboxFill,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Farah Hakimpour</title>
        <meta name="title" content=">Design - Farah Hakimpour" />
        <meta
          name="description"
          content="Get to know Fara Hakimpour - a talented Graphic Designer and Illustrator based in Vancouver. Explore her digital portfolio and discover her creative process. "
        />
      </Head>
      <Appbar />
      <main className="p-4 mb-16 space-y-16 wrapper">
        <section className="grid grid-cols-1 my-16 lg:grid-cols-2">
          <div className="w-full space-y-8 text-base font-medium leading-8 tracking-wider lg:max-w-prose">
            <h1 className="text-4xl font-extrabold leading-[1.3] tracking-[0.02rem]">
              About Farah Hakimpour: Graphic Designer & Self Taught Artist
            </h1>
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
          <div className="col-span-3 md:col-span-1">
            <div className="relative aspect-video">
              <Image
                fill
                quality={40}
                src="/media/main photo.png"
                alt="Image Of Farah Hakimpour"
                className="object-cover object-center rounded-lg"
              />
            </div>
            <div className="">
              <ul role="list" className="flex flex-col my-8">
                {footer_navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-4 transition-all rounded-lg hover:bg-fuchsia-200 active:bg-fuchsia-300 text-fuchsia-500 hover:text-fuchsia-700"
                  >
                    <item.icon className="w-6 h-6" />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </section>
        {/* End Of Biograpgy Section For About Page */}
        <section className="">
          <div className="max-w-[75ch]">
            <h2 className="text-4xl font-extrabold leading-[1.3] tracking-[0.02rem]">
              Client Testimonials for Farah Hakimpour&#39;s Creative Services
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div className="w-full h-64 bg-fuchsia-400 rounded-xl">&nbsp;</div>
            <div className="w-full h-64 bg-fuchsia-400 rounded-xl">&nbsp;</div>
          </div>
        </section>
        {/* End Of Testimonials */}
      </main>
      <Footer />
    </>
  );
}
const footer_navigation = {
  social: [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/farah-hakimpour-0b41911b8/",
      icon: (props: any) => <BsLinkedin {...props} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/farahsdesignss_/",
      icon: (props: any) => <BsInstagram {...props} />,
    },
    {
      name: "Pintrest",
      href: "https://www.pinterest.ca/fairyhakimpour/_saved/",
      icon: (props: any) => <BsPinterest {...props} />,
    },
    {
      name: "Email",
      href: "mailto:farahsdesignss@gmail.com",
      icon: (props: any) => <BsFillInboxFill {...props} />,
    },
  ],
};
