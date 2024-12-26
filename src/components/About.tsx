import Link from "next/link"

export const About = () => {
  return (
    <div className="my-12 container mx-auto p-6 flex gap-16 flex-col">
        <section className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
          <p className="text-lg text-gray-700">
            Explore insightful articles on web development, React, and the latest in technology. Join us as we dive into the world of coding and beyond!
          </p>
          <Link href="/posts" className="bg-blue-500 text-white py-2 px-4 rounded mt-4 inline-block hover:bg-blue-600">
            Explore Posts
          </Link>
        </section>
      
        <section className="flex flex-col items-center gap-4 mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
          <div>
            <img
              src="https://github.com/leofumagali.png"
              className="w-[150px] h-[150px]"
              alt="Author"
            />
          </div>
          <p className="text-gray-700 max-w-lg mx-auto">
            Hi! I'm a passionate web developer with a love for React and Gatsby. Through this blog, I aim to share knowledge, tips, and insights to help others on their coding journey.
          </p>
        </section>

        <section className="text-center">
        <p className="text-gray-700">Follow me on social media:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://github.com/leofumagali" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/leonardo-fumagali/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}