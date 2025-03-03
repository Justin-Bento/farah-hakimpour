import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="container mx-auto mt-24">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Hello, Projects Page.</h1>
      <ul className="grid grid-cols-3 gap-6">
        {posts.map((post: any) => (
          <li>
            <Card className="group border hover:border-blue-300">
              <CardHeader>
                <AspectRatio ratio={16 / 9} className="relative">
                  <Image src={urlFor(post.mainImage)
                    .width(2432)
                    .height(1442)
                    .quality(80)
                    .auto("format")
                    .url()}
                    alt={post?.mainImage?.alt || ""} fill className="rounded-md" />
                </AspectRatio>
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle>{post?.title}</CardTitle>
                <CardDescription>{post?.description}</CardDescription>
                <Link href="/#" className="text-muted-foreground text-sm group-hover:underline">See More</Link>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
      <hr className="opacity-25 my-4" />
      <Link href="/" className="text-sm">&larr; Return home</Link>
    </main>
  );
}