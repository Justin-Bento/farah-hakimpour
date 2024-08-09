import { Button } from "@/components/ui/button";
import Head from "next/head";
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
          <p className="font-mono text-base font-semibold leading-8 text-primary-700 dark:text-white">
            404
          </p>
          <h1 className="mt-4 text-4xl capitalize tracking-tight font-extrabold lg:text-5xl dark:text-white">
            Page not found
          </h1>
          <p className="mt-6 text-xl leading-7 tracking-wide dark:text-white">
            Sorry, we couldn&#39;t find the page you&#39;re looking for.
          </p>
          <div className="mt-10">
            <Button
              type="button"
              onClick={() => router.back()}
              className="flex items-center gap-1"
            >
              <RiArrowLeftLine className="m-0 p-0 size-4" />
              Back to home
            </Button>
          </div>
        </section>
      </section>
    </>
  );
}
