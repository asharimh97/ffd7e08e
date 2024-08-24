import { Tier } from "./types";

export const tiers: Array<Tier> = [
  {
    name: "Basic",
    pricing: 59,
    description: "Perfect for using in a personal website or a client project.",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
    ],
  },
  {
    name: "Business",
    pricing: 199,
    description: "Perfect for using in a personal website or a client project.",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
      "Analisis hasil penjualan dengan chart",
      "Support 24/7",
    ],
  },
  {
    name: "Entrepreneur",
    pricing: 256,
    description: "Perfect for using in a personal website or a client project.",
    features: [
      "Mencatat barang masuk",
      "Mencatat barang keluar",
      "Mencatat hasil keuntungan",
      "Analisis hasil penjualan dengan chart",
      "Support 24/7",
      "Export data ke excel",
      "AI prediksi penghasilan",
    ],
  },
];
