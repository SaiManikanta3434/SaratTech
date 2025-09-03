import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function CloudSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-16">
      <div className="max-w-8xl h-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-12">
        
        {/* Left: Lottie Animation */}
        <div className="flex justify-center">
          <DotLottieReact
            src="https://lottie.host/10575772-871e-43ae-8753-b672ea9e6218/24hG9Cwta2.lottie"
            loop
            autoplay
            className=" w-auto h-64 bg-white rounded-xl"
    />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-700 to-gray-300 via-black bg-clip-text text-transparent">Cloud Technology and Trends</span>
          </h2>
          <ul className="space-y-4 text-lg font-medium">
            <li>☁️ Microsoft – <span className="font-bold">AZURE</span></li>
            <li>⚡ Amazon – <span className="font-bold">AWS</span></li>
            <li>🚀 Google – <span className="font-bold">GCP</span></li>
          </ul>
          <button className="mt-8 px-6 py-3 text-white bg-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 hover:text-black transition">
            Discover More →
          </button>
        </div>
      </div>
    </section>
  );
}

