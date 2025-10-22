
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { getUserSession } from "@/helpers/getUserSession"
import Image from "next/image"
import Link from "next/link"
import NavbarClient from "./NavbarClient"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "HOME", active: true },
  { href: "/about", label: "ABOUT" },
  { href: "/projects", label: "PROJECT" },
  { href: "/blogs", label: "BLOGS" }
]

export default async function Navbar() {

  const session = await getUserSession();
  const user = session?.data?.user;


  return (
    <header className="h-[77px] border-b border-b-neutral-800 px-4 md:px-6 sticky top-0 z-50 transition-all duration-300 bg-black">
      <div className="flex max-w-[1140px] mx-auto items-center justify-between gap-4 h-full">
        {/* Left side */}
        <div className="flex">
            <Image src="/1.png" width={139} height={49} alt="image not found"/>
        </div>
        {/* Middle side */}
        <div className="h-full flex">
          {/* Main nav */}
          <div className="flex items-center gap-6">
            {/* Navigation menu */}
            <NavigationMenu className="max-md:hidden">
              <NavigationMenuList className="gap-8">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className="">
                    <Link className="text-white/80 font-semibold text-[14px]" href={link.href}>{link.label}</Link>
                  </NavigationMenuItem>
                ))}
                {
                  user && (
                  <Link href="/dashboard" className="text-white/80 font-semibold text-[14px]">DASHBOARD</Link>
                  )
                }
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2">
          <NavbarClient user={user}/>
          
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden bg-white"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5"
                        active={link.active}
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  )
}
