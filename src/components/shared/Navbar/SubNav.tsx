"use client";

import { MessageSquare, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SubNav() {
  return (
    <div className="bg-[#2F3A40] h-12 flex items-center justify-between px-4">
      <div className="max-w-[1140px] flex items-center justify-between w-full mx-auto">
            {/* Left: Chat + Text */}
            <div className="flex items-center gap-2 text-white">
              <MessageSquare className="h-4 w-4 text-green-400" />
              <span className="text-sm font-medium">PORTFOLIO...</span>
            </div>

            {/* Middle: Arrows */}
            <div className="flex items-center gap-3 text-white">
              <ArrowLeft className="h-4 w-4 cursor-pointer hover:text-green-400" />
              <ArrowRight className="h-4 w-4 cursor-pointer hover:text-green-400" />
            </div>

            {/* Right: Socials + Contact */}
            <div className="flex items-center gap-4">
              <Facebook className="h-4 w-4 text-white hover:text-green-400 cursor-pointer" />
              <Twitter className="h-4 w-4 text-white hover:text-green-400 cursor-pointer" />
              <Linkedin className="h-4 w-4 text-white hover:text-green-400 cursor-pointer" />
              <Instagram className="h-4 w-4 text-white hover:text-green-400 cursor-pointer" />

              <Button className="bg-green-500 text-white hover:bg-green-600">
                Contact
              </Button>
            </div>
      </div>
    </div>
  );
}
