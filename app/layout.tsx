import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "American Share by Sakkarin Beer DTI SAU",
  description: "เว็บคำนวณเงินที่ต้องแชร์กัน",
  keywords: ["แชร์เงิน", "คำนวณเงิน", "แชร์กัน", "คำนวณแชร์"],
  authors: [{ name: "Sakkarin Beer DTI SAU", url: "https://github.com/Sakka11" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${prompt.className}`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
