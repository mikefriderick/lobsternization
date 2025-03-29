'use client'

import Header from "@/app/components/layout/Header"
import Footer from "@/app/components/layout/Footer"
import Newsletter from "@/app/components/shared/Newsletter"
import { ReactNode } from "react"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Newsletter />
      <Footer />
    </div>
  )
} 