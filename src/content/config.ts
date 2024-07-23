import { defineCollection, z } from "astro:content";

const mdxCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    title: z.string(),
    pubDate: z.string(),
  }),
});

export const collections = {
  mdx: mdxCollection,
};
