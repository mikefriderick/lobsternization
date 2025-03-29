import Image from "next/image";
import { Play } from "lucide-react";
import Header from "./components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-16">
        {/* Left Content Column */}
        <div className="flex flex-col justify-center p-8 lg:p-16">
          <h1 className="text-5xl font-bold mb-6">
          An agriculture tokenization platform connecting farm to table, from land to sea.
          </h1>
          <p className="text-gray-600 mb-8">
            Experience the future of agriculture tokenization.
          </p>
          
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold">$32.00/lb</span>
              <span className="text-gray-500 line-through">$45.00/lb</span>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
              Buy Token
            </button>
          </div>

          <div className="relative w-full max-w-[250px] aspect-video mb-8">
            <Image
              src="https://picsum.photos/seed/ebike/250/150"
              alt="Product video thumbnail"
              fill
              className="rounded-lg object-cover"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
              <Play className="w-12 h-12 text-white" />
            </button>
          </div>

          <div className="text-sm text-gray-600">
            120+ Satisfied Clients
          </div>
        </div>

        {/* Right Image Column */}
        <div className="relative h-[500px] lg:h-auto">
          <Image
            src="https://picsum.photos/id/124/800/1000"
            alt="E-Bike Product"
            fill
            className="object-cover"
            priority
          />
        </div>
      </main>

      {/* Specs Bar */}
      <div className="grid grid-cols-3 gap-8 p-8 bg-gray-50">
        <div className="text-center">
          <h3 className="font-bold mb-2">Contact Us</h3>
          <p className="text-gray-600">Tel: +1234567890</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">Legal</h3>
          <p className="text-gray-600">HK, CANADA</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold mb-2">Join Our Community</h3>
          <p className="text-gray-600">Telegram</p>
        </div>
      </div>
    </>
  );
}
