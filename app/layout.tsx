import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Bitcoin ve Kripto Satın Alın | Kripto Borsası, Kripto Uygulaması, Kripto Cüzdanı | OKX",
  description:
    "Lider kripto borsası OKX’ten BTC, ETH, XRP ve daha fazlasını satın alın, Web3’ü keşfedin, DeFi ve NFT yatırımları yapın. Şimdi kaydolun, finansın geleceğini deneyimleyin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="relative overflow-hidden">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}