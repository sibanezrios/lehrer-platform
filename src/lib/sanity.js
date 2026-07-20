import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset: import.meta.env.VITE_SANITY_DATASET ?? "production",
      apiVersion: "2024-01-01",
      useCdn: true,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlForImage(source) {
  return builder.image(source);
}
