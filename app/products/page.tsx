"use client";

import { useMemo, useState } from "react";

type Category = "Semua" | "Fish It" | "Robux" | "Jasa" | "Bundle";

type Product = {
  id: string;
  name: string;
  category: Exclude<Category, "Semua">;
  price: number;
  stock: number;
  note?: string;
};

const STORE_NAME = "BBRSTORE";

const PRODUCTS: Product[] = [
  { id: "fishit-a", name: "Fish It - SECRET TUMBAL ", category: "Fish It", price: 5000, stock: 2000, note: "Fast Trade 24Hours" },
  { id: "fishit-b", name: "Fish It - MEGALODON MUTASI GALAXY", category: "Fish It", price: 200000, stock: 6, note: "Fast Trade 24Hours" },
  { id: "fishit-b", name: "Fish It - MEGALODON MUTASI GALAXY", category: "Fish It", price: 200000, stock: 6, note: "Fast Trade 24Hours" },
  { id: "fishit-b", name: "Fish It - MEGALODON MUTASI GALAXY", category: "Fish It", price: 200000, stock: 6, note: "Fast Trade 24Hours" },
  { id: "fishit-b", name: "Fish It - MEGALODON MUTASI GALAXY", category: "Fish It", price: 200000, stock: 6, note: "Fast Trade 24Hours" },
  { id: "fishit-b", name: "Fish It - MEGALODON MUTASI GALAXY", category: "Fish It", price: 200000, stock: 6, note: "Fast Trade 24Hours" },
  
  { id: "robux-100", name: "COOMING SOON", category: "Robux", price: 25000, stock: 30, note: "Kode / gift (sesuai stok)" },
  { id: "robux-500", name: "COOMING SOON", category: "Robux", price: 110000, stock: 10 },

  { id: "jasa-trade", name: "Jasa Trade Aman", category: "Jasa", price: 15000, stock: 999, note: "Bantu trade sesuai rules" },

  { id: "bundle-1", name: "Bundle Fish It Starter", category: "Bundle", price: 135000, stock: 4, note: "Item + bonus" },
];

function rupiah(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(n);
}

export default function ProductsPage() {
  const [cat, setCat] = useState<Category>("Semua");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchCat = cat === "Semua" ? true : p.category === cat;
      const matchQ =
        qq.length === 0
          ? true
          : (p.name + " " + p.category + " " + (p.note ?? "")).toLowerCase().includes(qq);
      return matchCat && matchQ;
    });
  }, [cat, q]);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-5xl mx-auto p-6">
        {/* Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold">{STORE_NAME} — Produk</h1>
            <p className="text-gray-400 text-sm">
              Pilih kategori, cari item, lalu checkout (nickname Roblox wajib).
            </p>
          </div>
        </div>

        {/* Controls: Dropdown + Search */}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <div>
            <label className="text-xs text-gray-400">Kategori</label>
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value as Category)}
              className="mt-1 w-full rounded bg-zinc-900 border border-zinc-700 px-3 py-2 outline-none focus:border-white"
            >
              <option value="Semua">Semua</option>
              <option value="Fish It">Fish It</option>
              <option value="Robux">Robux</option>
              <option value="Jasa">Jasa</option>
              <option value="Bundle">Bundle</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-400">Cari</label>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Cari produk… (contoh: fish, robux)"
              className="mt-1 w-full rounded bg-zinc-900 border border-zinc-700 px-3 py-2 outline-none focus:border-white"
            />
          </div>
        </div>

        {/* List */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <div key={p.id} className="rounded border border-zinc-700 bg-zinc-950 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs text-gray-400">{p.category}</div>
                  <h2 className="text-lg font-semibold leading-snug">{p.name}</h2>
                </div>

                <span
                  className={[
                    "text-xs px-2 py-1 rounded border",
                    p.stock > 0
                      ? "border-emerald-500/40 text-emerald-300"
                      : "border-red-500/40 text-red-300",
                  ].join(" ")}
                >
                  {p.stock > 0 ? `Stock ${p.stock}` : "Habis"}
                </span>
              </div>

              {p.note ? <p className="text-sm text-gray-400 mt-2">{p.note}</p> : null}

              <div className="mt-4 flex items-center justify-between">
                <div className="text-base font-bold">{rupiah(p.price)}</div>

                <a
                  href={`/checkout?pid=${encodeURIComponent(p.id)}`}
                  className={[
                    "px-3 py-2 rounded text-sm font-semibold",
                    p.stock > 0
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-gray-700 text-gray-300 pointer-events-none",
                  ].join(" ")}
                >
                  Beli
                </a>
              </div>
            </div>
          ))}

          {filtered.length === 0 ? (
            <div className="text-gray-400 text-sm col-span-full border border-zinc-700 rounded p-4">
              Tidak ada produk yang cocok dengan pencarian/kategori kamu.
            </div>
          ) : null}
        </div>

        <div className="mt-8 text-xs text-gray-500">
          * Setelah checkout, pembeli wajib isi nickname Roblox untuk proses trade/pengiriman.
        </div>
      </div>
    </main>
  );
}
