// app/checkout/page.tsx
type Props = {
  searchParams?: { pid?: string };
};

const PRODUCTS: Record<string, { name: string; price: number }> = {
  "fishit-a": { name: "Fish It - SECRET TUMBAL", price: 5000 },
  "fishit-b": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-c": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-d": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-e": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-f": { name: "Fish It - MEGALODON MUTASI GAMESTONE", price: 150000 },
  "fishit-g": { name: "Fish It - MEGALODON MUTASI HOLO", price: 150000 },
  "robux-100": { name: "COOMING SOON", price: 25000 },
  "robux-500": { name: "COOMING SOON", price: 110000 },
  "jasa-trade": { name: "Jasa Trade Aman", price: 15000 },
  "bundle-1": { name: "Bundle Fish It Starter", price: 135000 },
};

export default function CheckoutPage({ searchParams }: Props) {
  const pid = searchParams?.pid ?? "";
  const product = PRODUCTS[pid];

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Produk tidak ditemukan</h1>
          <p className="text-gray-400">Cek kembali link /checkout?pid=...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6">
        <h1 className="text-2xl font-bold mb-2">Checkout</h1>

        <div className="text-sm text-gray-300 mb-4">
          <div>Produk: <span className="text-white">{product.name}</span></div>
          <div>Harga: <span className="text-white">Rp {product.price.toLocaleString("id-ID")}</span></div>
        </div>

        <label className="block text-sm mb-2">Nickname Roblox *</label>
        <input
          className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 mb-4"
          placeholder="Contoh: Player123"
        />

        <button className="w-full rounded-lg bg-white text-black py-2 font-semibold">
          Lanjut Pembayaran
        </button>

        <p className="text-xs text-gray-400 mt-3">
          * Pastikan nickname benar. Pengiriman via trade sesuai nickname ini.
        </p>
      </div>
    </main>
  );
}
