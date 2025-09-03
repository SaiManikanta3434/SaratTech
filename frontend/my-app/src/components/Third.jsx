import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function EnterpriseApps() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6 lg:px-12">
        
        {/* Left: Animation */}
        <div className="flex justify-center">
          <DotLottieReact
      src="https://lottie.host/d566f257-ace7-4161-a5be-a0579e33aa11/dYfTiyrAKl.lottie"
      loop
      autoplay
    />
        </div>

        {/* Right: Text */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6 text-gray-500">
            <span className="bg-gradient-to-r from-orange-700 to-gray-400 via-black  bg-clip-text text-transparent">Enterprise Application</span>{" "}
            Development and Maintenance
          </h2>
          <ul className="space-y-3 text-lg font-semibold">
            <li>JAVA / J2EE</li>
            <li>.NET</li>
            <li>SAP, ORACLE APPS</li>
            <li>SALESFORCE</li>
          </ul>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">
            Discover More →
          </button>
        </div>
      </div>
    </section>
  );
}
