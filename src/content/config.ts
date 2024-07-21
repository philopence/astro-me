import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    title: z.string(),
    pubDate: z.string()
  })
});

export const collections = {
  blog: blogCollection,
};
