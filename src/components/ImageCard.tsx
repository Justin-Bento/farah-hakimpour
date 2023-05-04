import Image from "next/image";
import Link from "next/link";

type Props = {
  Media: string,
  Title: string,
  Links: string
}

export default function ImageCard({ Media, Title, Links }: Props) {
  return (
    <>
      <Link
        href={Links}
        className="flex flex-col gap-3 transition-all hover:opacity-90"
      >
        <div className="w-full h-[20rem] relative">
          <Image
            fill
            src={Media}
            alt=""
            className="object-cover object-center transition-all rounded hover:grayscale hover:object-top"
          />
        </div>
        <p className="body-large">{Title}</p>
      </Link>
    </>
  )
}