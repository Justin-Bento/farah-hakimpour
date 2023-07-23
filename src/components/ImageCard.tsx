import Image from "next/image";
import Link from "next/link";

type Props = {
  Media: any,
  Title: string,
  Links: any,
  CardType: any
}

export default function ImageCard({ Media, Title, Links, CardType }: Props) {
  if (CardType == true)  {
    return (
      <>
        <Link
          href={Links}
          className="flex flex-col gap-3 p-1 transition-all lg:p-4 hover:opacity-80 active:ring-1 ring-primary-400"
        >
          <div className="relative w-full aspect-square ">
            <Image
              fill
              src={Media}
              alt=""
              className="object-cover object-center rounded-lg"
            />
          </div>
        </Link>
      </>
      )
  } else {
    return (
      <>
        <Link
          href={Links}
          className="flex flex-col gap-3 p-1 transition-all lg:p-4 hover:opacity-80 active:ring-1 ring-primary-400"
        >
          <div className="relative w-full aspect-square">
            <Image
              fill
              src={Media}
              alt=""
              className="object-cover object-center rounded-lg"
            />
          </div>
          <p className="body-large">{Title}</p>
        </Link>
      </>
    )
  }

}
