import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-tr from-blue-300 to-blue-300 via-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl font-semibold text-gray-600 leading-snug">
            <span className="bg-gradient-to-r from-orange-500 to-gray-500 bg-clip-text text-transparent font-semibold">SARAT TECH</span> Improves and
            Innovates Businesses with{" "}
            <span className="bg-gradient-to-r from-orange-600 to-gray-400 bg-clip-text text-transparent">AI & Technology</span> Trends
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            <strong>SARAT TECH</strong> is a leading global development company,
            offering a wide array of solutions and transforming businesses to
            thrive in the digital world by harnessing the power of{" "}
            <span className="font-semibold">cutting-edge AI technologies</span>.
          </p>
          <p className="mt-4 text-gray-600">
            We deliver end-to-end IT solutions with deep expertise, helping
            clients re-engineer and re-invent their businesses to compete
            successfully in a booming market.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition">
            Discover More →
          </button>
        </div>

        {/* Right Lottie Animation */}
        <div className="flex justify-center lg:justify-end">
          <DotLottieReact
      src="https://lottie.host/5c92bbdb-f965-4bde-a3ca-88494d4000b9/4qMbLENXJT.lottie"
      loop
      autoplay
      className="w-full max-h-max bg-gradient-to-br from-blue-500 to-pink-200 via-cyan-400 rounded-xl"
    />
        </div>
      </div>
    </section>
  );
}
