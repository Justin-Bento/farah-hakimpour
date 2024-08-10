import Head from "next/head";
import Link from "next/link";
import { RiMailLine } from "react-icons/ri";
import { Button } from '@/components/ui/button'
import ContactForm from "@/components/ContactForm";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../components/ui/breadcrumb";


export default function Contact() {
  return (
    <>
      <Head>
        <title>Farah Hakimpour - Contact</title>
        <meta name="title" content="Farah Hakimpour - Contact" />
        <meta name="description" content="Is a Graphic Designer and Illustrator based in Toronto, Ontario. Explore her digital portfolio and discover her creative process. " />
      </Head>
      <main className="container mx-auto min-h-screen mt-32">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-12 lg:gap-y-24">
          <div className="">
            <Breadcrumb className="mb-3">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="font-bold">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-bold text-primary underline">Contact</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">
              Want To Get In Touch?
            </h1>
            <p className="text-lg text-muted-foreground my-2">
              Enter in your information here to get in touch with me!
            </p>
            <hr className="border-black/30 mt-6" />
            <Link
              className="tracking-wide hover:text-primary-900"
              href="mailto:farahsdesignss@gmail.com"
            >
              <Button variant="link" className="mt-6">
                <RiMailLine
                  className="w-5 h-5 mr-1 text-primary-700 dark:text-primary-50/70"
                  aria-hidden="true" />
                farahsdesignss@gmail.com
              </Button>
            </Link>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
