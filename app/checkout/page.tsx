"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const PRODUCTS: Record<string, { name: string; price: number }> = {
  "fishit-a": { name: "Fish It - SECRET TUMBAL", price: 5000 },
  "fishit-b": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-b": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-b": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-b": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-b": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "fishit-b": { name: "Fish It - MEGALODON MUTASI GALAXY", price: 150000 },
  "robux-100": { name: "COOMING SOON", price: 25000 },
  "robux-500": { name: "COOMING SOON", price: 110000 },
  "jasa-trade": { name: "Jasa Trade Aman", price: 15000 },
  "bundle-1": { name: "Bundle Fish It Starter", price: 135000 },
};

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(n);
}

export default function CheckoutPage() {
  const sp = useSearchParams();
  const pid = sp.get("pid") ?? "";

  const product = useMemo(() => PRODUCTS[pid], [pid]);
  const [nickname, setNickname] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md border border-zinc-700 bg-zinc-950 rounded p-6">
        <h1 className="text-2xl font-bold mb-2">Checkout</h1>

        <div className="text-sm text-gray-400 mb-4">
          Produk: <span className="text-white">{product?.name ?? "Tidak ditemukan"}</span>
          <br />
          Harga: <span className="text-white">{product ? rupiah(product.price) : "-"}</span>
        </div>

        <label className="text-sm block mb-2">
          Nickname Roblox <span className="text-red-500">*</span>
        </label>

        <input
          className="w-full p-2 rounded text-black"
          placeholder="Contoh: Player123"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />

        <button
          disabled={!nickname.trim() || !product}
          className="mt-4 w-full bg-white text-black py-2 rounded font-semibold disabled:bg-gray-700 disabled:text-gray-300"
        >
          Lanjut Pembayaran
        </button>

        <p className="text-xs text-gray-500 mt-3">
          * Pastikan nickname benar. Pengiriman dilakukan via trade sesuai nickname ini.
        </p>
      </div>
    </main>
  );
}
