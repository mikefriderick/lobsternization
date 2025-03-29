'use client'

import { useState } from "react"
import { ArrowLeftRight, TrendingUp, Clock, ChevronDown } from "lucide-react"
import ShopNavigation from "@/app/components/shop/ShopNavigation"

const exchangeRates = [
  { id: 1, token: "LBT", name: "Lobster Token", price: "$32.00", change: "+2.4%" },
  { id: 2, token: "SFT", name: "Seafood Token", price: "$18.75", change: "+1.2%" },
  { id: 3, token: "AQT", name: "Aquaculture Token", price: "$24.50", change: "-0.8%" },
  { id: 4, token: "FSH", name: "Fish Token", price: "$15.25", change: "+3.5%" },
  { id: 5, token: "OCN", name: "Ocean Token", price: "$28.90", change: "+0.5%" }
]

export default function ExchangePage() {
  const [fromToken, setFromToken] = useState("USD")
  const [toToken, setToToken] = useState("LBT")
  const [amount, setAmount] = useState("100")

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <ShopNavigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Exchange</h1>
          <p className="text-gray-600">Convert between currencies and tokens</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Exchange Widget */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">Convert</h2>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  Updated 2 mins ago
                </div>
              </div>
              
              <div className="space-y-4">
                {/* From */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 px-4 py-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="relative">
                      <select
                        value={fromToken}
                        onChange={(e) => setFromToken(e.target.value)}
                        className="h-full px-4 py-3 border border-l-0 rounded-r-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="LBT">LBT</option>
                        <option value="SFT">SFT</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                {/* Swap Button */}
                <div className="flex justify-center">
                  <button className="p-2 rounded-full border hover:bg-gray-50">
                    <ArrowLeftRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* To */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    To
                  </label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={(parseFloat(amount) * 0.03125).toFixed(4)}
                      readOnly
                      className="flex-1 px-4 py-3 border rounded-l-lg bg-gray-50 focus:outline-none"
                    />
                    <div className="relative">
                      <select
                        value={toToken}
                        onChange={(e) => setToToken(e.target.value)}
                        className="h-full px-4 py-3 border border-l-0 rounded-r-lg appearance-none bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                      >
                        <option value="LBT">LBT</option>
                        <option value="SFT">SFT</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                    Exchange Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Market Rates */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold">Market Rates</h2>
                <TrendingUp className="w-5 h-5 text-gray-600" />
              </div>
              
              <div className="space-y-4">
                {exchangeRates.map(rate => (
                  <div key={rate.id} className="flex items-center justify-between py-2 border-b last:border-0">
                    <div>
                      <div className="font-medium">{rate.token}</div>
                      <div className="text-sm text-gray-600">{rate.name}</div>
                    </div>
                    <div className="text-right">
                      <div>{rate.price}</div>
                      <div className={`text-sm ${
                        rate.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {rate.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 