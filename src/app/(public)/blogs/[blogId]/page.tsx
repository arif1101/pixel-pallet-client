import BlogDetails from '@/components/modules/Blog/BlogDetails'
import { Blog } from '@/type/types';
import React from 'react'


interface Data {
  data: Blog
}



export default async function BlogDetailsPage({params}:{params: Promise<{blogId: string}>}) {


  const {blogId} = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`)
  const {data:blog}:Data = await res.json();
  // console.log(blog)
  

  return (
    <div>
      <BlogDetails blog={blog}/>
    </div>
  )
}
