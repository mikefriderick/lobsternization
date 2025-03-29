'use client'

import { useState } from "react"
import Image from "next/image"
import { Camera, MapPin, Mail, Phone, Globe, Shield } from "lucide-react"

export default function ProfilePage() {
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    location: "Hong Kong",
    website: "www.example.com"
  })

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header with Cover Photo */}
      <div className="relative h-48 bg-gray-200">
        <Image
          src="https://picsum.photos/seed/cover/1920/400"
          alt="Cover photo"
          fill
          className="object-cover"
        />
        <button className="absolute bottom-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
          <Camera className="w-5 h-5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="relative -mt-16 mb-8">
          <div className="flex items-end">
            <div className="relative">
              <Image
                src="https://picsum.photos/seed/profile/200/200"
                alt="Profile photo"
                width={128}
                height={128}
                className="rounded-full border-4 border-white"
              />
              <button className="absolute bottom-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="ml-4 pb-4">
              <h1 className="text-2xl font-bold">{`${profileData.firstName} ${profileData.lastName}`}</h1>
              <p className="text-gray-600">Premium Member</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Personal Information</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-400 mr-2" />
                    <input
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                      className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="px-6 py-2 border rounded-full hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Additional Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-400" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <span>{profileData.website}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Privacy Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gray-400" />
                    <span>Profile Visibility</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 