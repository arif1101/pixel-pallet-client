import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MessageSquare, User } from "lucide-react"
import { Blog } from "@/type/types"
import Link from "next/link"

interface BlogPropsCard {
  blog : Blog
}

export default function BlogCard({blog}:BlogPropsCard) {
  return (
    <Card className="bg-black text-white overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/project-1.jpg" // change to your image path
          alt="Blog thumbnail"
          fill
          className="object-cover"
        />
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Meta info */}
        <div className="flex items-center text-sm text-gray-400 gap-4">
          <div className="flex items-center gap-1">
            <User size={14} /> BY JENNY WATSON
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare size={14} /> COMMENTS 35
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />{blog.createdAt}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold leading-snug">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          Consulting is a great career path if you want to build a broad skill
          set that includes everything from critical thinking and strategic
          planning to communications. If you love rising to a challenge.
        </p>

        {/* Read More */}
        <Link
          href={`/blogs/${blog.id}`}
          className="text-green-400 text-sm font-medium hover:underline"
        >
          READ MORE...
        </Link>
      </CardContent>
    </Card>
  )
}
