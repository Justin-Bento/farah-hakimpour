import Link from "next/link";
import { RiMailLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Contact() {
  return (
    <>
      <main className="container mx-auto min-h-dvh mt-32">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-12 lg:gap-y-24 px-6 lg:px-0">
          <div className="">
            <Breadcrumb className="mb-3">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary">
                    Contact
                  </BreadcrumbPage>
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
              className="tracking-wide hover:text-gray-900"
              href="mailto:farahsdesignss@gmail.com"
            >
              <Button
                variant="link"
                className="mt-6 hover:text-primary hover:underline"
              >
                <RiMailLine className="size-4" aria-hidden="true" />
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
