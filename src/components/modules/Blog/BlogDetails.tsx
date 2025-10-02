import React from "react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Blog } from "@/type/types"

interface PropsBlogcard {
  blog: Blog
}

export default function BlogDetails({blog} : PropsBlogcard) {
  return (
    <div className="max-w-[1140px] mx-auto px-4 py-10 text-white">
      {/* Title */}
      <h1 className="text-[36px] md:text-[42px] font-bold leading-tight mb-6">
        {blog.title}
      </h1>

      {/* Author & Date */}
      <div className="flex items-center gap-3 mb-8">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/author.jpg" alt="Arya Stark" />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">Arya Stark</span>
          <span className="text-sm text-muted-foreground">Jan 13, 2022</span>
        </div>

        <div className="ml-auto flex gap-3 text-muted-foreground">
          <button>
            <i className="ri-facebook-circle-line text-xl"></i>
          </button>
          <button>
            <i className="ri-twitter-line text-xl"></i>
          </button>
          <button>
            <i className="ri-share-line text-xl"></i>
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="mb-10">
        <Image
          src="/project-1.jpg"
          alt="Blog cover"
          width={1140}
          height={500}
          className="rounded-lg object-cover"
        />
        <p className="text-center text-sm text-muted-foreground mt-2">
          Pexel – Vlada Karpovich
        </p>
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <p>
          Habits matter. If you’ve ever tried breaking a bad habit, you know all too well how ingrained they are.
        </p>
        <p>
          Here’s a look at some daily, monthly, and yearly habits to help kickstart your quest. Just remember that everyone’s version of happiness is a little different, and so is their path to achieving it.
        </p>
        <p>
          If some of these habits create added stress or just don’t fit your lifestyle, ditch them. With a little time and practice, you’ll figure out what does and doesn’t work for you.
        </p>

        <h2>Daily habits</h2>
        <p>
          Most adults need at least 7 hours of sleep every night. If you find yourself fighting the urge to nap during the day or just generally feel like you’re in a fog, your body may be telling you it needs more rest.
        </p>
      </div>
    </div>
  )
}
