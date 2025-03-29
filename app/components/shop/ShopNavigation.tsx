'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ShopNavigation() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    return pathname === path
  }
  
  return (
    <div className="border-b mb-8">
      <div className="max-w-7xl mx-auto">
        <nav className="flex space-x-8">
          <Link 
            href="/shop" 
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              isActive('/shop') 
                ? 'border-black text-black' 
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Overview
          </Link>
          <Link 
            href="/shop/marketplace" 
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              isActive('/shop/marketplace') 
                ? 'border-black text-black' 
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Marketplace
          </Link>
          <Link 
            href="/shop/exchange" 
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              isActive('/shop/exchange') 
                ? 'border-black text-black' 
                : 'border-transparent text-gray-500 hover:text-black'
            }`}
          >
            Exchange
          </Link>
        </nav>
      </div>
    </div>
  )
} 