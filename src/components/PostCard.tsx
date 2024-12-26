import Image from "next/image";
import Link from "next/link";

export interface PostCardProps {
  title: string
  subtitle: string
  postImage: string
  date: string
  slug: string
  content?: string
  author?: string
  authorImage?: string
}

const PostCard = ({ title, subtitle, postImage, date, slug }: PostCardProps) => {

  return (
    <>
      <Link
        href={`/post/${slug}`}
        className="flex flex-col w-[350px] bg-[#f0f0f0] bg-block rounded-2xl overflow-hidden cursor-pointer justify-start"
      >
        <div className="relative w-[350px] h-[200px]">
          <Image
            src={`/images/${postImage}`}
            alt="image alt"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col h-[120px] justify-between p-4">
          <h1 className="font-semibold">
            {title}
          </h1>
          <p>{subtitle}</p>
          <p className="text-xs text-right selftext-[#4f5257] mt-auto">{date}</p>
        </div>
      </Link>
    </>
  )
}

export default PostCard;