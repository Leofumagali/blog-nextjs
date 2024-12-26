import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function Posts() {
  const allPosts = getAllPosts()
  
  return (
    <div>
      <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto py-12">
        <h1
          className="font-semibold text-4xl"
        >
          Posts
        </h1>
        <div className="w-full flex flex-wrap gap-8 mx-auto">
          {allPosts.map((post, i) => {
            return (
              <PostCard
                key={i}
                title={post.title}
                subtitle={post.subtitle}
                date={post.date}
                postImage={post.postImage}
                slug={post.slug}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}