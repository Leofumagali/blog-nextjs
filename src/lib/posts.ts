import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostCardProps } from "@/components/PostCard";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContents);

    return {
      ...data,
      slug: data.slug || filename.replace(/\.md$/, ""),
    } as PostCardProps;
  });

  return posts.sort((a: any, b:any) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): PostCardProps | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    content,
    slug,
  } as PostCardProps;
}