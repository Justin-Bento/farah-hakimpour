import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "rukhzuu7",
  dataset: "production",
  apiVersion: '2021-08-31', // use a UTC date string
  useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}