import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Top Banner */}
      <div className="text-center text-xs p-2 bg-gray-100">
        Hello Nike App <br />
        Download the app to access everything Nike, **My Nike, My Great**
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center bg-gray-100">
        {/* Image Section */}
        <div className="relative w-full max-w-6xl">
          <Image
            src="/hero-image.png"
            alt="Nike Air Max Pulse"
            layout="responsive"
            width={1920}
            height={1080}
            priority
          />
        </div>

        {/* Text Section */}
        <div className="text-center p-8">
          <h3 className="text-sm font-semibold mb-2 uppercase">First Look</h3>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            NIKE AIR MAX PULSE
          </h1>
          <p className="text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse – designed to push you past your limits and help you go to the
            max.
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-4 py-2 border-2 border-black rounded-full text-black hover:bg-gray-200 transition">
              Notify Me
            </button>
            <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Shop Air Max
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
