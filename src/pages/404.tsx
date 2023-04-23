import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Error404() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <main className="flex flex-col justify-center flex-auto wrapper h-[90vh] items-start">
        <p className="text-base font-semibold leading-8 text-primary-600">
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-primary-600">
          Sorry, we couldn&#39;t find the page you&#39;re looking for.
        </p>
        <div className="mt-10">
          <button
            type="button"
            onClick={() => router.back()}
            className="text-sm font-semibold leading-7 text-primary-600"
          >
            <span aria-hidden="true">&larr;</span> Back to home
          </button>
        </div>
      </main>
    </>
  );
}
