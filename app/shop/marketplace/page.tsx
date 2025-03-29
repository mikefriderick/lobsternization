'use client'

import Image from "next/image"
import { Filter, ArrowUpDown } from "lucide-react"
import ShopNavigation from "@/app/components/shop/ShopNavigation"

const products = [
  {
    id: 1,
    name: "Premium Lobster Token",
    price: "$32.00/lb",
    image: "https://picsum.photos/seed/lobster1/300/300",
    location: "Maine, USA",
    rating: 4.8
  },
  {
    id: 2,
    name: "Wild Caught Lobster",
    price: "$28.50/lb",
    image: "https://picsum.photos/seed/lobster2/300/300",
    location: "Nova Scotia, Canada",
    rating: 4.6
  },
  {
    id: 3,
    name: "Sustainable Lobster",
    price: "$30.75/lb",
    image: "https://picsum.photos/seed/lobster3/300/300",
    location: "Massachusetts, USA",
    rating: 4.7
  },
  {
    id: 4,
    name: "Fresh Atlantic Lobster",
    price: "$34.25/lb",
    image: "https://picsum.photos/seed/lobster4/300/300",
    location: "New Brunswick, Canada",
    rating: 4.9
  },
  {
    id: 5,
    name: "Gourmet Lobster",
    price: "$36.00/lb",
    image: "https://picsum.photos/seed/lobster5/300/300",
    location: "Prince Edward Island, Canada",
    rating: 4.8
  },
  {
    id: 6,
    name: "Organic Lobster",
    price: "$33.50/lb",
    image: "https://picsum.photos/seed/lobster6/300/300",
    location: "Rhode Island, USA",
    rating: 4.7
  }
]

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <ShopNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Marketplace</h1>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <ArrowUpDown className="w-4 h-4" />
              Sort
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{product.name}</h3>
                  <span className="font-bold text-black">{product.price}</span>
                </div>
                <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
                  <span>{product.location}</span>
                  <span>★ {product.rating}</span>
                </div>
                <button className="w-full mt-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                  Buy Token
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 