import MainLayout from "@/app/layouts/MainLayout"
import Image from "next/image"
import { FileText, Download, Share2 } from "lucide-react"

export default function WhitepaperPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Whitepaper</h1>
            <p className="text-gray-600 mb-8">
              A comprehensive overview of our tokenization platform for the limited collections items
            </p>
            <div className="flex gap-4 justify-center">
              <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
              <button className="flex items-center gap-2 border border-gray-200 px-6 py-3 rounded-full hover:bg-gray-50 transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Navigation Sidebar */}
            <div className="lg:w-64 shrink-0">
              <div className="sticky top-24">
                <h3 className="font-bold mb-4">Contents</h3>
                <nav className="space-y-2">
                  <a href="#abstract" className="block text-sm text-gray-600 hover:text-black">Abstract</a>
                  <a href="#introduction" className="block text-sm text-gray-600 hover:text-black">Introduction</a>
                  <a href="#technology" className="block text-sm text-gray-600 hover:text-black">Technology</a>
                  <a href="#tokenomics" className="block text-sm text-gray-600 hover:text-black">Tokenomics</a>
                  <a href="#roadmap" className="block text-sm text-gray-600 hover:text-black">Roadmap</a>
                  <a href="#team" className="block text-sm text-gray-600 hover:text-black">Team</a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              <div id="abstract" className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Abstract</h2>
                <p className="text-gray-600 mb-4">
                  Lobsternization is pioneering the transformation of traditional agriculture through blockchain technology. 
                  Our platform enables the tokenization of agricultural assets, creating a transparent and efficient marketplace 
                  that connects producers directly with consumers.
                </p>
              </div>

              <div id="introduction" className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Introduction</h2>
                <div className="prose prose-gray">
                  <p className="mb-4">
                    The agricultural industry faces numerous challenges in terms of transparency, efficiency, and fair value 
                    distribution. Lobsternization addresses these challenges through a innovative blockchain-based platform 
                    that tokenizes agricultural assets, particularly focusing on the seafood industry.
                  </p>
                  <div className="relative h-[300px] my-8 rounded-lg overflow-hidden">
                    <Image
                      src="https://picsum.photos/seed/chart/1200/800"
                      alt="Agricultural market analysis"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div id="technology" className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Technology</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="font-bold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 mt-1 text-gray-600" />
                      <div>
                        <h4 className="font-bold">Smart Contracts</h4>
                        <p className="text-sm text-gray-600">Automated compliance and transaction execution</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 mt-1 text-gray-600" />
                      <div>
                        <h4 className="font-bold">Asset Tracking</h4>
                        <p className="text-sm text-gray-600">Real-time monitoring and verification</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="w-5 h-5 mt-1 text-gray-600" />
                      <div>
                        <h4 className="font-bold">Market Integration</h4>
                        <p className="text-sm text-gray-600">Seamless connection to global markets</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="tokenomics" className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Tokenomics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-2">Token Distribution</h3>
                    <p className="text-sm text-gray-600">
                      Detailed breakdown of token allocation and vesting schedules
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold mb-2">Token Utility</h3>
                    <p className="text-sm text-gray-600">
                      Platform access, governance, and reward mechanisms
                    </p>
                  </div>
                </div>
              </div>

              <div id="roadmap" className="mb-16">
                <h2 className="text-2xl font-bold mb-6">Roadmap</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-24 shrink-0 font-bold">Q1 2024</div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      Platform Development and Testing
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 shrink-0 font-bold">Q2 2024</div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      Market Launch and Partner Onboarding
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-24 shrink-0 font-bold">Q3 2024</div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-lg">
                      Global Expansion and Feature Enhancement
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 