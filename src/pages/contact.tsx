import { Button } from "@/components/Button";
import Head from "next/head";
import Link from "next/link";
import { RiBuildingLine, RiMailLine, RiPhoneLine, RiSendPlane2Line } from "react-icons/ri";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Fara Hakimpour - Contact</title>
        <meta name="title" content="Fara Hakimpour - Contact" />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <section className="relative p-6 lg:py-32 isolate">
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
          <MyContactForm />
        </div>
      </section>
    </>
  );
}

function MyContactForm() {
  return (
    <form
      action="#"
      method="POST"
      className=""
    >
      <div className="max-w-xl mx-auto lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="flex w-full px-3 py-1 text-sm transition-colors border rounded-md shadow-sm h-9 ring-primary-600 border-primary-600 dark:text-primary-10 bg-primary-10 dark:bg-primary-960 dark:caret-primary-50 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-960/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="text-sm font-medium leading-none capitalize peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="flex min-h-[60px] w-full rounded-md border ring-primary-600 border-primary-600 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 lg:justify-start">
          <Button className="flex items-center justify-end gap-1 capitalize" aria-label="send-contact" variant="secondary">
            <RiSendPlane2Line />
            Send message
          </Button>
        </div>
      </div>
    </form>
  );
}
