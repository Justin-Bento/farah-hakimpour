import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanityClient";

interface CardProps {
  Headline: string,
  Media: string,
  URL: string,
}

export default function Card({ Headline, Media, URL }: CardProps) {
  return (
    <>
      <Link href={URL}>
        <div className="overflow-hidden transition-all border rounded-lg border-primary-300 bg-primary-200 hover:opacity-80 hover:cursor-pointer">
          <div className="relative h-[350px]">
            <Image
              fill
              quality={70}
              src={urlFor(Media).url()}
              alt={Headline}
              className="object-cover object-center rounded-lg"
            />
          </div>
        </div>
      </Link>
    </>
  )
}