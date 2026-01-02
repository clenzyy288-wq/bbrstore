import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"

      >
        <source src="/0102.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          BORN BERMAIN ROBLOX STORE
        </h1>

        <p className="text-gray-300 max-w-xl mb-8">
          Menyediakan semua kebutuhan robloxmu.
          <br />
          Order otomatis • Trade aman • Fast response
        </p>

        <Link
          href="/products"
          className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Lihat Produk
        </Link>
      </div>
    </main>
  );
}
