'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, TrendingUp, ShoppingBag, BarChart2, Home } from "lucide-react"
import ShopNavigation from "@/app/components/shop/ShopNavigation"

// Featured products
const featuredProducts = [
  {
    id: 1,
    name: "Premium Lobster Token",
    price: "$32.00/lb",
    image: "https://picsum.photos/seed/lobster1/600/400",
    description: "Our flagship token representing premium Maine lobster."
  },
  {
    id: 2,
    name: "Wild Caught Lobster",
    price: "$28.50/lb",
    image: "https://picsum.photos/seed/lobster2/600/400",
    description: "Sustainably harvested wild lobster from the Atlantic."
  }
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <ShopNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Home Button */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
        
        {/* Hero Section */}
        <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">Tokenized Agriculture Products</h1>
              <p className="text-gray-600 mb-6">
                Invest in sustainable agriculture through our innovative tokenization platform. 
                Each token represents ownership in real agricultural products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/shop/marketplace" 
                  className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Browse Marketplace
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link 
                  href="/shop/exchange" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  Go to Exchange
                </Link>
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <Image
                src="https://picsum.photos/seed/shop/800/600"
                alt="Tokenized agriculture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Buy & Sell Tokens</h3>
            <p className="text-gray-600">
              Purchase tokens representing real agricultural products and trade them on our exchange.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Track Performance</h3>
            <p className="text-gray-600">
              Monitor the performance of your agricultural investments in real-time.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-2">Receive Distributions</h3>
            <p className="text-gray-600">
              Earn regular distributions based on the performance of your agricultural assets.
            </p>
          </div>
        </div>
        
        {/* Featured Products */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link 
              href="/shop/marketplace" 
              className="text-sm font-medium flex items-center hover:text-gray-600"
            >
              View all
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-48 md:h-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                    </div>
                    <div>
                      <div className="font-bold text-lg mb-3">{product.price}</div>
                      <Link 
                        href={`/shop/marketplace`} 
                        className="inline-block w-full py-2 bg-black text-white text-center rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to start investing in agriculture?</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Join thousands of investors who are already benefiting from our tokenized agricultural products.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/shop/marketplace" 
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-transparent border border-white text-white rounded-full hover:bg-white/10 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 