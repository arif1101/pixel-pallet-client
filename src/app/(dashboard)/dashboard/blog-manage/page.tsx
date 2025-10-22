"use client";

import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function BlogManagementPage() {
  const blogs = [
    {
      id: 1,
      title: "Mastering Next.js 15 — A Complete Guide",
      slug: "mastering-nextjs-15",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      createdAt: "2025-10-20",
      tags: ["Next.js", "Web Development", "Guide"],
    },
    {
      id: 2,
      title: "Understanding Prisma Relations with Express",
      slug: "prisma-relations-express",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      createdAt: "2025-10-18",
      tags: ["Prisma", "Express", "Database"],
    },
    {
      id: 3,
      title: "TailwindCSS + Shadcn: Building a Beautiful Dashboard",
      slug: "tailwind-shadcn-dashboard",
      image:
        "https://images.unsplash.com/photo-1608111282980-6f0b0b57f27b?w=800&q=80",
      createdAt: "2025-10-15",
      tags: ["UI", "TailwindCSS", "Design"],
    },
  ];

  return (
    <div className="w-full py-10 px-6">
      <h1 className="text-3xl font-semibold mb-8">📝 Blog Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            className="w-full overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <CardHeader className="p-0">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </CardHeader>

            <CardContent className="p-5 space-y-3">
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Published on {new Date(blog.createdAt).toLocaleDateString()}
              </p>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button
                variant="default"
                onClick={() => console.log(`View ${blog.slug}`)}
              >
                View
              </Button>
              <Button
                variant="outline"
                onClick={() => console.log(`Edit ${blog.id}`)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                onClick={() => console.log(`Delete ${blog.id}`)}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
