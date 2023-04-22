import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "rukhzuu7",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}