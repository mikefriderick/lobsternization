'use client'

import { User, Wallet, BarChart, Clock, FileText, Settings } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: User, label: "Profile", href: "/settings/profile" },
  { icon: Wallet, label: "Wallet", href: "/settings/wallet" },
  { icon: BarChart, label: "Distributions", href: "/settings/distributions" },
  { icon: Clock, label: "Order History", href: "/settings/order-history" },
  { icon: FileText, label: "Tax Documents", href: "/settings/tax-documents" },
]

export default function SettingsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-60 bg-white border-r border-gray-200 p-4">
      <nav className="space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? "bg-gray-100 text-black" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-black"
              }`}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
} 