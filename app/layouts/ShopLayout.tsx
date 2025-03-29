'use client'

import { ReactNode } from "react"
import MainLayout from "./MainLayout"

export default function ShopLayout({ children }: { children: ReactNode }) {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-64 shrink-0">
            {/* Filter components will go here */}
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    </MainLayout>
  )
} 