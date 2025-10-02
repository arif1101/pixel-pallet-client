/* eslint-disable @next/next/no-img-element */
import React from 'react'
import BlogCard from './BlogCard'
import { Blog } from '@/type/types'

export default async function Blogs() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`,{
        cache: "no-store"
    })
    const {data : blogs} = await res.json()
    console.log(blogs)
    
    return (
    <div className=''>
        <div className='max-w-[1140] mx-auto flex flex-col md:flex-row py-12 gap-8'>
        {/* left side blog card  */}
        <div>
            {
                blogs.map((blog : Blog) => <BlogCard key={blog.id} blog={blog}/>)
            }
        </div>
        {/* right side info  */}
        <div className="max-w-[372px] space-y-8">
        {/* Author Card */}
        <div className="bg-neutral-900 text-center p-6 rounded-lg">
            <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden">
            <img src="/author.jpg" alt="Jenny Watson" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-lg text-white">Jenny Watson</h3>
            <p className="text-gray-400 text-sm mt-2">
            Hi! beautiful people. I’m an author of this blog. Read our post – stay with us
            </p>
            <div className="flex justify-center gap-4 mt-4 text-gray-400">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-pinterest-p"></i></a>
            </div>
        </div>

        {/* Search */}
        <div className="flex">
            <input
            type="text"
            placeholder="Search Post..."
            className="flex-1 px-4 py-2 rounded-l bg-neutral-800 text-gray-300 focus:outline-none"
            />
            <button className="px-4 bg-green-600 rounded-r">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103.5 3.5a7.5 7.5 0 0013.15 13.15z" />
            </svg>
            </button>
        </div>

        {/* Categories */}
        <div className="bg-neutral-900 p-6 rounded-lg">
            <h4 className="font-bold text-white mb-4">Categories</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex justify-between">Web Development <span className="text-gray-400">5</span></li>
            <li className="flex justify-between">App Development <span className="text-gray-400">7</span></li>
            <li className="flex justify-between">Software Development <span className="text-gray-400">3</span></li>
            <li className="flex justify-between">Social Media Marketing <span className="text-gray-400">8</span></li>
            <li className="flex justify-between">Graphic Design <span className="text-gray-400">6</span></li>
            <li className="flex justify-between">Brand Identity <span className="text-gray-400">2</span></li>
            </ul>
        </div>

        {/* Related Posts */}
        <div className="bg-neutral-900 p-6 rounded-lg">
            <h4 className="font-bold text-white mb-4">Related Posts</h4>
            <div className="space-y-4">
            <div className="flex gap-4">
                <img src="/post1.jpg" alt="post1" className="w-20 h-16 rounded object-cover" />
                <div className="text-sm">
                <p className="text-white font-medium leading-snug">The Internet tend to repeat predefined chunks.</p>
                <span className="text-gray-400 text-xs">19 Jun 2025</span>
                </div>
            </div>
            <div className="flex gap-4">
                <img src="/post2.jpg" alt="post2" className="w-20 h-16 rounded object-cover" />
                <div className="text-sm">
                <p className="text-white font-medium leading-snug">Have evolved over the years sometimes accident.</p>
                <span className="text-gray-400 text-xs">22 May 2025</span>
                </div>
            </div>
            <div className="flex gap-4">
                <img src="/post3.jpg" alt="post3" className="w-20 h-16 rounded object-cover" />
                <div className="text-sm">
                <p className="text-white font-medium leading-snug">The standard chunk of used since the interested.</p>
                <span className="text-gray-400 text-xs">12 Apr 2025</span>
                </div>
            </div>
            </div>
        </div>
        </div>

        </div>
    </div>
    )
}
