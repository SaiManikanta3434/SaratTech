import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AnalyticsSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-12">
        
        {/* Left: Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-600">
            Favorable Business Outcomes with{" "}
            <span className="bg-gradient-to-r from-orange-600 to-gray-400 bg-clip-text text-transparent">Data & Analytics</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Deploy powerful growth transformation strategies today to realize
            sustainable and substantial business value tomorrow.
          </p>
          <p className="text-gray-700 mb-6">
            Integrating and analyzing data to improve decisions, business
            processes, and outcomes — from discovering new business risks to
            identifying challenges and opportunities.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Discover More →
          </button>
        </div>

        {/* Right: Lottie Animation */}
        <div className="flex justify-center">
          <DotLottieReact
      src="https://lottie.host/60617f56-f8ea-4692-b5c4-3189b489a5da/1loVwH8yy5.lottie"
      loop
      autoplay
    />
        </div>
      </div>
    </section>
  );
}
