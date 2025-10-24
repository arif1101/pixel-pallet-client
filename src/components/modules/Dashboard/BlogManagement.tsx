"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Blog } from "@/type/types";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import BlogDetailsModal from "./BlogDetailsMdal";
import BlogEditFormModal from "./BlogEditFormModal";

interface BlogManagementProps {
  blogs: Blog[];
}

export default function BlogManagement({ blogs: initialBlogs }: BlogManagementProps) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);

  // ✅ Optimistic delete (instant UI update)
  const handleDelete = async (id: number) => {
    const prevBlogs = [...blogs];
    setBlogs(prev => prev.filter(blog => blog.id !== id));

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/delete/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
    } catch (err) {
      console.error("Delete failed:", err);
      setBlogs(prevBlogs); // rollback if API fails
    }
  };

  // ✅ Instant update (edit)
  const handleUpdate = (updatedBlog: Blog) => {
    setBlogs(prev =>
      prev.map(b => (b.id === updatedBlog.id ? { ...b, ...updatedBlog } : b))
    );

    // also update currently viewed blog if open
    if (selectedBlog?.id === updatedBlog.id) {
      setSelectedBlog({ ...selectedBlog, ...updatedBlog });
    }

    setIsEditOpen(false);
  };

  return (
    <div className="w-full py-10 px-6">
      <h1 className="text-3xl font-semibold mb-8">📝 Blog Management</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
        {blogs.map((blog: Blog) => (
          <Card
            key={blog.id}
            className="overflow-hidden shadow-md hover:shadow-lg transition-all"
          >
            <CardHeader className="p-0">
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>

            <CardContent className="p-5 space-y-3">
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map(tag => (
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
                onClick={() => {
                  setSelectedBlog(blog);
                  setIsViewOpen(true);
                }}
              >
                View
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedBlog(blog);
                  setIsEditOpen(true);
                }}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* View Modal */}
      <Dialog open={isViewOpen} onOpenChange={setIsViewOpen}>
        <DialogContent className="max-w-2xl h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Blog Details</DialogTitle>
            <DialogDescription>
              Read the full content of this blog.
            </DialogDescription>
          </DialogHeader>
          {selectedBlog && <BlogDetailsModal blog={selectedBlog} />}
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Edit Blog</DialogTitle>
            <DialogDescription>
              Update blog details and save changes.
            </DialogDescription>
          </DialogHeader>
          {selectedBlog && (
            <BlogEditFormModal
              blog={selectedBlog}
              onClose={() => setIsEditOpen(false)}
              onUpdated={handleUpdate} // ✅ triggers instant card update
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
