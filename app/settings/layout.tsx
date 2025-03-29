'use client'

import { ReactNode } from "react"
import SettingsSidebar from "@/app/components/settings/SettingsSidebar"

export default function SettingsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen pt-16">
      <SettingsSidebar />
      <main className="flex-1 bg-gray-50">
        {children}
      </main>
    </div>
  )
} 