import Image from "next/image";
import imgmoney from "@/assets/images/money.png";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-6">

      {/* ส่วนชื่อเว็บ */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
        American Share แชร์เงินกันเถอะ
      </h1>

      {/* ส่วนแสดงรูป */}
      <Image
        src={imgmoney}
        alt="Money Image"
        className="mt-8 w-40 md:w-48 drop-shadow-xl transition-transform duration-300 hover:scale-105"
      />

      {/* ส่วนแสดงปุ่มเพื่อไปยังหน้า /moneyshareinput */}
      <Link
        href="/moneyshareinput"
        className="mt-8 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
      >
        Go to American Share Calculator 
      </Link>

      {/* ส่วนแสดง Footer */}
      <Footer />
    </div>
  );
}
