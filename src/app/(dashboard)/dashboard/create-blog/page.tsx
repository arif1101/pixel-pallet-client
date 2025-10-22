"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type BlogFormValues = {
  title: string;
  slug: string;
  content: string;
  tags: string;
  image?: string;
};

export default function CreateBlogPage() {
  const { register, handleSubmit, reset } = useForm<BlogFormValues>({
    defaultValues: { title: "", slug: "", content: "", tags: "", image: "" },
  });

  const onSubmit = (data: BlogFormValues) => {
    const payload = {
      ...data,
      tags: data.tags.split(",").map((tag) => tag.trim()),
    };

    console.log("Blog Payload:", payload);
    reset();
  };

  return (
    <div className="container mx-auto px-6 py-10 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-8">📝 Create Blog</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title */}
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            placeholder="Enter blog title"
            {...register("title", { required: true })}
          />
        </div>

        {/* Slug */}
        <div>
          <Label htmlFor="slug">Slug</Label>
          <Input
            id="slug"
            placeholder="Enter unique slug"
            {...register("slug", { required: true })}
          />
        </div>

        {/* Tags */}
        <div>
          <Label htmlFor="tags">Tags (comma-separated)</Label>
          <Input
            id="tags"
            placeholder="Next.js, React, Web Development"
            {...register("tags")}
          />
        </div>

        {/* Image */}
        <div>
          <Label htmlFor="image">Cover Image URL</Label>
          <Input
            id="image"
            placeholder="https://example.com/image.jpg"
            {...register("image")}
          />
        </div>

        {/* Content */}
        <div>
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            placeholder="Write your blog content here..."
            rows={8}
            {...register("content", { required: true })}
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full">
          Create Blog
        </Button>
      </form>
    </div>
  );
}
