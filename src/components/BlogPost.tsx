import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../sanityClient";

export default function BlogPost(props: any) {
  return (
    <article className="relative py-16 space-y-4 overflow-hidden prose isolate lg:overflow-visible lg:px-0">
      <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 aria-label="Headline-blog-post" className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{props.Headline}</h1>
              <p aria-label="Description-blog-post" className="mt-6 text-xl ">
                {props.Description}
              </p>
              {<PortableText value={props.Content} />}
            </div>
          </div>
        </div>
        <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div className="w-[48rem] sm:w-[57rem] aspect-square h-96 relative ">
            <Image
              fill
              className="object-cover object-center bg-gray-900 max-w-none rounded-xl ring-1 ring-gray-400/10"
              src={urlFor(props.Media).url()}
              alt=""
            />
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}