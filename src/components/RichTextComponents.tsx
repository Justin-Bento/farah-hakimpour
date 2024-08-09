import Image from "next/image";
import { urlFor } from "../../sanityClient";
import Link from "next/link";

const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <>
          <div className="relative w-full aspect-[2/3]">
            <Image
              fill
              src={urlFor(value).url()}
              alt=""
              loading="lazy"
              className="block object-cover object-center pb-8"
            />
          </div>
        </>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => {
      return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      // Ex. 1: customizing h1 block types
      return <h1 className="text-4xl dark:text-white">{children}</h1>;
    },
    h2: ({ children }: any) => {
      // Ex. 1: customizing h2 block types
      return <h2 className="text-3xl dark:text-white">{children}</h2>;
    },
    h3: ({ children }: any) => {
      // Ex. 1: customizing h3 block types
      return <h3 className="text-2xl dark:text-white">{children}</h3>;
    },
    h4: ({ children }: any) => {
      // Ex. 1: customizing h4 block types
      return <h4 className="text-xl dark:text-white">{children}</h4>;
    },
    h5: ({ children }: any) => {
      // Ex. 1: customizing h5 block types
      return <h5 className="text-lg dark:text-white">{children}</h5>;
    },
    h6: ({ children }: any) => {
      // Ex. 1: customizing h6 block types
      return <h6 className="text-lg font-bold dark:text-white">{children}</h6>;
    },
    p: ({ children }: any) => {
      return <p className="leading-7 dark:text-white">{children}</p>;
    },
    a: ({ children }: any) => {
      return <a href={children.url} className="underline dark:text-primary-light">{children.text}</a>
    },
  },
};

export default RichTextComponents;
