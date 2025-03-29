'use client'

export default function Newsletter() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest updates and innovations.</p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 