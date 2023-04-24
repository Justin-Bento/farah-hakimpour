import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function IllustrationDynamic() {
  return (
    <>
      <Head>
        <title>Illustration Dynamic - Farah Hakimpour</title>
        <meta name="title" content=">Design - Farah Hakimpour" />
        <meta
          name="description"
          content="Get to know Fara Hakimpour - a talented Graphic Designer and Illustrator based in Vancouver. Explore her digital portfolio and discover her creative process. "
        />
      </Head>
      <Appbar />
      <main className="my-16 wrapper">
        <div className="mx-auto">
          <p className="text-sm uppercase text-primary-700">
            Post Catagory
          </p>
          <h1 className="mt-2 font-bold text-7xl">
            This is Where You Make A Cool Headline
          </h1>
          <div className="grid grid-cols-1 gap-8 mt-10 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas.
              </p>
            </div>
            <div>
              <p>
                Erat pellentesque dictumst ligula porttitor risus eget et eget.
                Ultricies tellus felis id dignissim eget. Est augue maecenas
                risus nulla ultrices congue nunc tortor.
              </p>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="relative pt-16 overflow-hidden lg:pt-20">
          <img
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
            alt=""
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
