// components/Footer.tsx
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Mail, Pointer, Twitter, VoicemailIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-24 bg-gradient-to-r from-red-900/20 to-green-800/30 text-neutral-300 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        
        {/* Brand Section */}
        <div className="space-y-10">
          <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-white font-bold">
              {/* Replace with Image if needed */}
              <Image src="/meFormal.jpg" width={63} height={63} alt="image not found" className="rounded-full w-14 h-14"/>
            </div>
            <h2 className="text-[45px] font-bold text-white">Arif.</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Welcome and open yourself to your truest love this year with us!
            With the Release Process
          </p>
          <div className="flex gap-4 mt-4 text-neutral-400">
            <Link href="#"><i className="fab fa-facebook-f"><Facebook/></i></Link>
            <Link href="#"><i className="fab fa-twitter"></i><Twitter/></Link>
            <Link href="#"><i className="fab fa-linkedin-in"></i><Linkedin/></Link>
            <Link href="#"><i className="fab fa-pinterest-p"></i><Pointer/></Link>
            <Link href="#"><i className="fab fa-vimeo-v"></i><VoicemailIcon/></Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="">
          <h3 className="text-[25px] font-bold text-white mb-10">Navigation</h3>
          <ul className="space-y-4 text-[16px]">
            <li><Link href="#">- About us</Link></li>
            <li><Link href="#">- Contact us</Link></li>
            <li><Link href="#">- Video Guide</Link></li>
            <li><Link href="#">- Recent Post</Link></li>
          </ul>
        </div>

        {/* All Services */}
        <div>
          <h3 className="text-[25px] font-bold text-white mb-10">All Services</h3>
          <ul className="space-y-4 text-[16px]">
            <li><Link href="#">- Web Design</Link></li>
            <li><Link href="#">- Web Development</Link></li>
            <li><Link href="#">- Brand Identity</Link></li>
            <li><Link href="#">- Digital Marketing</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-[25px] font-bold text-white mb-10">Newsletter</h3>
          <p className="text-sm mb-4">
            Must explain to you how all this mistaken idea pleasure born and 
            give you a complete account.
          </p>
          <form className="flex">
            <Input
              type="email"
              placeholder="Email Address *"
              className="rounded-r-none bg-neutral-800 border-neutral-700 text-neutral-200"
            />
            <Button type="submit" className="rounded-l-none bg-green-600 hover:bg-pink-700">
              <Mail className="w-4 h-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-700 mt-10 pt-6 text-center text-sm text-white">
        Copyright © 2025 Elito. All rights reserved.
      </div>
    </footer>
  )
}
