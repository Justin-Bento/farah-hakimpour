import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

  return (
    <main className="max-w-prose mx-auto mt-24">
      <h1 className="mb-4 text-3xl font-bold tracking-tight">Hello, Projects Page.</h1>
      <ul className="grid grid-cols-1 gap-4 mb-4 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="block p-4 hover:text-gray-500"
              href={`/projects/${post?.slug?.current}`}
            >
              {post?.title}
            </Link>
          </li>
        ))}
      </ul>
      <hr className="opacity-25 my-4" />
      <Link href="/" className="text-sm">&larr; Return home</Link>
    </main>
  );
}