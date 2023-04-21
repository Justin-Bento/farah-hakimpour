import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "rukhzuu7",
  dataset: "production",
  useCdn: true,
});