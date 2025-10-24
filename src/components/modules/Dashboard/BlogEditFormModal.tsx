"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Blog } from "@/type/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

// ✅ Validation schema
const formSchema = z.object({
  title: z.string().min(3, "Title is required"),
  content: z.string().min(10, "Content should be at least 10 characters"),
  image: z.string().optional(),
  tags: z.string().optional(),
});

interface BlogEditFormProps {
  blog: Blog;
  onClose: () => void;
  onUpdated: (updatedBlog: Blog) => void;
}

export default function BlogEditFormModal({
  blog,
  onClose,
  onUpdated,
}: BlogEditFormProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: blog.title,
      content: blog.content,
      image: blog.image || "",
      tags: blog.tags.join(", "),
    },
  });

  const imageUrl = form.watch("image");

const onSubmit = async (values: z.infer<typeof formSchema>) => {
  setLoading(true);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/blog/update/${blog.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          tags: values.tags?.split(",").map((t) => t.trim()),
        }),
      }
    );

    if (!res.ok) throw new Error("Failed to update blog");

    const result = await res.json();
    onUpdated(result.data); // ✅ correct object for instant UI update
    onClose();
  } catch (error) {
    console.error(error);
    alert("Error updating blog");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 pr-2"
          >
            {/* Title + Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="title">Title</Label>
                    <FormControl>
                      <Input
                        placeholder="Enter blog title"
                        {...field}
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="image">Image URL</Label>
                    <FormControl>
                      <Input
                        placeholder="https://example.com/image.jpg"
                        {...field}
                        className="h-11"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Image Preview */}
            {imageUrl && (
              <div className="relative w-full h-60 rounded-lg overflow-hidden border">
                <Image
                  src={imageUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                  onError={(e) =>
                    ((e.target as HTMLImageElement).style.display = "none")
                  }
                />
              </div>
            )}

            {/* Tags */}
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="tags">Tags</Label>
                  <FormControl>
                    <Input
                      placeholder="e.g. React, Prisma, Tailwind"
                      {...field}
                      className="h-11"
                    />
                  </FormControl>
                  <p className="text-xs text-gray-500">
                    Separate tags with commas.
                  </p>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Content */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="content">Content</Label>
                  <FormControl>
                    <Textarea
                      placeholder="Write your blog content here..."
                      className="min-h-[250px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="px-6"
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading} className="px-6">
                {loading ? "Updating..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
