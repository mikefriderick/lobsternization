'use client'

import { useState, useRef, useEffect } from 'react'
import { UserCircle2, Settings, User, Wallet, BarChart, Clock, FileText } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const menuItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Wallet, label: "Wallet", href: "/wallet" },
  { icon: BarChart, label: "Distributions", href: "/distributions" },
  { icon: Clock, label: "Order History", href: "/order-history" },
  { icon: FileText, label: "Tax Documents", href: "/tax-documents" },
]

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMenuClick = (href: string) => {
    setIsOpen(false)
    router.push(href)
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="p-2 hover:bg-gray-100 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <UserCircle2 className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-medium">Welcome</p>
            <p className="text-sm text-gray-600 truncate">user@example.com</p>
          </div>

          <div className="py-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.href}
                  onClick={() => handleMenuClick(item.href)}
                  className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Icon className="w-4 h-4 mr-3" />
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="border-t py-2">
            <button
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => {
                setIsOpen(false)
                // Add logout logic here
              }}
            >
              <span className="text-red-600">Sign out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 