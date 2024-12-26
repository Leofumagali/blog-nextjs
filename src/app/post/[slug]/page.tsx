import { getAllPosts, getPostBySlug } from "@/lib/posts"
import Image from "next/image";
import { notFound } from "next/navigation";
import { remark } from "remark";
import html from "remark-html"

interface PageProps {
  params: Promise<any> | undefined
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({params}: PageProps) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const processedContent = await remark().use(html).process(post.content!);
  const contentHtml = processedContent.toString();

  return (
    <div className="w-1/2 flex flex-col mx-auto my-12 gap-8">
        <h1
          className="font-semibold text-4xl"
        >
          {post.title}
        </h1>

        <h2
          className="font-semibold text-[#4f5257]"
        >
          {post.subtitle}
        </h2>

        <div 
          className="flex gap-4"
        >
          <div
            className="w-[50px] w-[50px]"
          >
            <img
              src={post.authorImage}
              className="w-full h-full"
              alt="Author"
            />
          </div>

          <div>
            <div className="font-semibold">
              {post.author}
            </div>
            <div className="text-[#979797] text-sm">
              {post.date}
            </div>
          </div>
        </div>

        <div className="relative w-full h-[300px]">
          <Image
            src={`/images/${post.postImage}`}
            alt="image alt"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
  )
}