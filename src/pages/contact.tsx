import ContactForm from "@/components/ContactForm";
import Head from "next/head";
import Link from "next/link";
import { RiMailLine } from "react-icons/ri";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Fara Hakimpour - Contact</title>
        <meta name="title" content="Fara Hakimpour - Contact" />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <section className="relative p-6 py-24 lg:py-32 isolate">
        <div className="grid items-center grid-cols-1 gap-8 lg:items-start lg:container lg:mx-auto lg:grid-cols-2">
          <div className="relative ">
            <div className="mx-auto lg:mx-0 lg:max-w-2xl">
              <h2 className="mb-1 text-4xl font-extrabold tracking-normal capitalize scroll-m-20">
                Want to get in touch?
              </h2>
              <p className="leading-7 tracking-wider">
                Enter in your information here to get in touch with me!
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-primary-960">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <RiMailLine
                      className="w-6 text-primary-700 dark:text-primary-50/70 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <Link
                      className="tracking-wide hover:text-primary-900"
                      href="mailto:farahsdesignss@gmail.com"
                    >
                      farahsdesignss@gmail.com
                    </Link>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
