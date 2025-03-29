'use client'

import { Search } from "lucide-react"
import Link from "next/link"
import UserMenu from "./UserMenu"

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-red">HarborToken 港链</Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/about" className="hover:text-gray-600 transition-colors">About</Link>
              <Link href="/collection" className="hover:text-gray-600 transition-colors">Whitepaper</Link>
              <Link href="/shop" className="hover:text-gray-600 transition-colors">Products</Link>
              <Link href="/services" className="hover:text-gray-600 transition-colors">Services</Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <UserMenu />
          </div>
        </div>
      </nav>
    </header>
  )
} 