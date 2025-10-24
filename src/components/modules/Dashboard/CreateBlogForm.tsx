/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

import { ImagePlus, X } from "lucide-react";

const blogSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(3, "Slug is required"),
  content: z.string().min(10, "Content must be at least 10 characters"),
  tags: z.string().optional(),
  image: z.any().optional(),
});

type BlogFormValues = z.infer<typeof blogSchema>;

interface CreateBlogFormProps {
  authorId: number;
}

export default function CreateBlogForm({ authorId }: CreateBlogFormProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: "",
      slug: "",
      content: "",
      tags: "",
      image: undefined,
    },
  });

  const handleImageChange = (file: File | null) => {
    if (!file) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const onSubmit = async (data: BlogFormValues) => {
    try {
      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("slug", data.slug);
      formData.append("content", data.content);
      formData.append("authorId", String(authorId)); // ✅ attach user ID

      if (data.tags) {
        formData.append(
          "tags",
          JSON.stringify(data.tags.split(",").map((t) => t.trim()))
        );
      }

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/create`, {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Failed to create blog");

      toast.success("✅ Blog created successfully!");
      form.reset();
      setPreview(null);
    } catch (err: any) {
      toast.error(err.message || "Something went wrong");
    }
  };

  return (
    <div className="container mx-auto px-6 py-10 max-w-3xl">
      <h1 className="text-3xl font-semibold mb-8">📝 Create Blog</h1>

      <Card className="p-6">
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter blog title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Slug */}
              <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Slug</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter unique slug" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tags */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags (comma-separated)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Next.js, React, Web Development"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Image Upload */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Image</FormLabel>
                    <FormControl>
                      <div
                        className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer hover:bg-muted/40 relative"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault();
                          const file = e.dataTransfer.files[0];
                          if (file) {
                            form.setValue("image", [file]);
                            handleImageChange(file);
                          }
                        }}
                      >
                        {preview ? (
                          <div className="relative inline-block">
                            <img
                              src={preview}
                              alt="Preview"
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <Button
                              type="button"
                              size="icon"
                              variant="destructive"
                              className="absolute top-2 right-2"
                              onClick={() => {
                                form.setValue("image", undefined);
                                handleImageChange(null);
                              }}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center justify-center space-y-2">
                            <ImagePlus className="w-8 h-8 text-gray-400" />
                            <span className="text-sm text-gray-500">
                              Drag & drop or click to upload
                            </span>
                            <Input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0] || null;
                                field.onChange(e.target.files);
                                handleImageChange(file);
                              }}
                            />
                          </label>
                        )}
                      </div>
                    </FormControl>
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
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={8}
                        placeholder="Write your blog content here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Create Blog
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
