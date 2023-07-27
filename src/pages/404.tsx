import { Button } from "@/components/Button";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiArrowLeftLine } from "react-icons/ri";

export default function Error404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <section className="h-[90vh] grid place-content-center">
        <section className="flex flex-col items-start justify-center flex-auto">
          <p className="font-mono text-base font-semibold leading-8 text-primary-700">
            404
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight capitalize font-sanst-bold text-primary-950 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-xl font-medium leading-7 tracking-wide text-primary-950">
            Sorry, we couldn&#39;t find the page you&#39;re looking for.
          </p>
          <div className="mt-10">
            <Button
              type="button"
              onClick={() => router.back()}
              className="items-center gap-1 font-bold capitalize"
            >
              <RiArrowLeftLine />
              Back to home
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}
