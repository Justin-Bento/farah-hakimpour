import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
import Error from "next/error";
import { useRouter } from "next/router";
import { CategoryItemComponentProps } from "../../../../typings";
import GridList from "@/components/GridList";
import Image from "next/image";
import Link from "next/link";
import { files } from "../../../../lib/data";

export default function CategoryPage() {
  const router = useRouter();
  const { category } = router.query;
  return (
    <>
      <Appbar />
      <CategoryHeader Category={category} />
      <Footer />
    </>
  );
}

function CategoryHeader({ Category }: CategoryItemComponentProps) {
  switch (Category) {
    case "designs":
    case "illustrations":
      return (
        <>
          <main className="grid-cols-1 p-4 my-16 space-y-16 wrapper sm:p-0 ">
            <GridList Columns="grid-cols-1 md:grid-cols-2">
              {files.map((data: any) => {
                return (
                  <>
                    <Link
                      href={`/projects/${Category}/project_name`}
                      className="flex flex-col gap-3"
                    >
                      <div className="w-full h-[21.875rem] relative">
                        <Image
                          fill
                          src={data.source}
                          alt=""
                          className="object-cover object-center rounded"
                        />
                      </div>
                      <p className="body-large">{data.title}</p>
                    </Link>
                  </>
                );
              })}
            </GridList>
          </main>
        </>
      );
    default:
      return <Error statusCode={504} />;
  }
}
