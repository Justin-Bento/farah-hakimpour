import Image from "next/image";
import { urlFor } from "../../sanityClient";

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
      return <ul>{children}</ul>;
    },
    number: ({ children }: any) => {
      return <ol>{children}</ol>;
    },
  },
  block: {
    h1: ({ children }: any) => {
      // Ex. 1: customizing h1 block types
      return <h1 className="">{children}</h1>;
    },
    h2: ({ children }: any) => {
      // Ex. 1: customizing h2 block types
      return <h2 className="">{children}</h2>;
    },
    h3: ({ children }: any) => {
      // Ex. 1: customizing h3 block types
      return <h3 className="">{children}</h3>;
    },
    h4: ({ children }: any) => {
      // Ex. 1: customizing h4 block types
      return <h4 className="">{children}</h4>;
    },
    h5: ({ children }: any) => {
      // Ex. 1: customizing h5 block types
      return <h4 className="">{children}</h4>;
    },
    h6: ({ children }: any) => {
      // Ex. 1: customizing h6 block types
      return <h4 className="">{children}</h4>;
    },
    p: ({ children }: any) => {
      return <p className="">{children}</p>;
    },
  },
};

export default RichTextComponents;
