import Blogs from '@/components/modules/Blog/Blogs'
import Banner from '@/components/shared/Banner'
import React from 'react'

export default function BlogsPage() {
  return (
    <div>
      <Banner path='Blogs' text='Blogs Page' />
      <Blogs/>
    </div>
  )
}
