import { Blog } from "@/type/types";
import Image from "next/image";

interface BlogDetailsProps {
  blog: Blog;
}

export default function BlogDetailsModal({ blog }: BlogDetailsProps) {
  return (
    <div className="space-y-4">
      <div className="relative w-full h-60 rounded-lg overflow-hidden">
        <Image src={blog.image} alt={blog.title} fill className="object-cover" />
      </div>
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <div className="flex flex-wrap gap-2">
        {blog.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-500 text-sm">
        Published on {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <p className="leading-relaxed text-gray-700">{blog.content}</p>
    </div>
  );
}
