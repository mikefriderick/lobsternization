import MainLayout from "@/app/layouts/MainLayout"
import Image from "next/image"

export default function AboutPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://picsum.photos/seed/lobster/1920/1080"
          alt="Lobster facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Revolutionizing the Lobster Industry
            </h1>
            <p className="text-lg sm:text-xl">
              Through innovative technology and sustainable practices
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We're on a mission to transform the lobster industry through cutting-edge technology
              and sustainable practices. Our innovative solutions help improve efficiency,
              reduce waste, and ensure the highest quality products for our customers.
            </p>
            <p className="text-gray-600">
              By combining traditional knowledge with modern technology, we're creating
              a more sustainable and profitable future for the lobster industry.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://picsum.photos/seed/mission/800/800"
              alt="Our mission"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards would go here */}
          </div>
        </div>
      </section>
    </MainLayout>
  )
} 