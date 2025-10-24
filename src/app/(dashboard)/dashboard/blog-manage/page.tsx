

import BlogManagement from "@/components/modules/Dashboard/BlogManagement";

export default async function BlogManagementPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
    cache: "no-store",
  })

  const {data: blogs2} = await res.json()


  return (
    <BlogManagement blogs={blogs2}/>
  );
}
