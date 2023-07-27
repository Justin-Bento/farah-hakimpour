import { Button } from "@/components/Button";
import Head from "next/head";
import { BsBuilding, BsEnvelope, BsPhone } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Farah Hakimpour</title>
        <meta name="title" content=">Contact - Farah Hakimpour" />
        <meta
          name="description"
          content="Get to know Fara Hakimpour - a talented Graphic Designer and Illustrator based in Vancouver. Explore her digital portfolio and discover her creative process. "
        />
      </Head>
      <section className="relative p-6 lg:py-32 isolate">
        <div className="grid items-center lg:items-start grid-cols-1 gap-8 lg:container lg:mx-auto lg:grid-cols-2">
          <div className="relative ">
            <div className="mx-auto lg:mx-0 lg:max-w-lg">
              <h2 className="mb-1 text-3xl font-bold tracking-tight capitalize scroll-m-20">
                Get in touch
              </h2>
              <p className="leading-7 tracking-wider">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
              <dl className="mt-10 space-y-4 text-base leading-7 text-primary-960">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BsBuilding
                      className="w-6 text-primary-700 dark:text-primary-50/70 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>545 Mavis Island Chicago, IL 99191</dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <BsPhone
                      className="w-6 text-primary-700 dark:text-primary-50/70 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-primary-900"
                      href="tel:+1 (555) 234-5678"
                    >
                      +1 (555) 234-5678
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <BsEnvelope
                      className="w-6 text-primary-700 dark:text-primary-50/70 h-7"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-primary-900"
                      href="mailto:hello@example.com"
                    >
                      hello@example.com
                    </a>
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
        <div className="flex justify-end lg:justify-start mt-8">
          <Button>Send message</Button>
        </div>
      </div>
    </form>
  );
}
