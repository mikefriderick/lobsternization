'use client'

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <Link 
          href="/settings" 
          className="inline-flex items-center text-sm text-gray-600 hover:text-black"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Settings
        </Link>
        <h1 className="text-2xl font-bold mt-4">Profile</h1>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Account Details</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="firstName" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label 
              htmlFor="lastName" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
} 