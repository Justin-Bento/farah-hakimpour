import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="min-h-dvh container mx-auto py-24 px-6">
      <section className="my-6 space-y-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem className="text-purple-500 underline">
              <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-bold tracking-tight">
          Dive into My Creative Realm.
        </h1>
        <p className="">
          Where Design and Artistry Converge! A Journey Through Exquisite
          Artistry and Masterful Graphic Solutions.
        </p>
      </section>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/projects/${post?.slug.current}`}>
              <Card className="group border hover:border-purple-300 hover:bg-purple-50/50 dark:hover:bg-purple-950/10">
                <CardHeader>
                  <AspectRatio ratio={16 / 9} className="relative">
                    <Image
                      src={urlFor(post.mainImage)
                        .width(2432)
                        .height(1442)
                        .quality(80)
                        .auto("format")
                        .url()}
                      alt={post?.mainImage?.alt || ""}
                      fill
                      className="rounded-md"
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle>{post?.title}</CardTitle>
                  <CardDescription>{post?.description}</CardDescription>
                  <p className="text-muted-foreground text-sm group-hover:underline group-hover:text-purple-800 dark:group-hover:text-purple-400">
                    See More
                  </p>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
