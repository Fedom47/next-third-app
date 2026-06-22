import Image from "next/image";
import imgmoney from "@/assets/images/imgmoney.png";
import Link from "next/link";
import Footer from "@/components/Footer";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ money?: string; people?: string; moneyShare?: string }>;
}) {
  const { money, people, moneyShare } = await searchParams;

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-6">
      {/* ส่วนชื่อเว็บ */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
        American Share แชร์เงินกันเถอะ
      </h1>

      {/* ส่วนชื่อหน้า Page */}
      <h2 className="text-lg md:text-xl font-semibold text-center mt-2 text-blue-600">
        ผลลัพธ์การคำนวณการแชร์เงิน
      </h2>

      {/* ส่วนแสดงรูป */}
      <Image
        src={imgmoney}
        alt="Money Image"
        className="mt-4 w-28 md:w-32 drop-shadow-xl transition-transform duration-300 hover:scale-105"
      />

      {/* ส่วนแสดงผลลัพธ์ */}
      <div className="mt-5 w-full max-w-md px-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 py-6">
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-lg text-gray-600">จำนวนเงินทั้งหมด</span>
          <span className="text-xl font-bold text-blue-600">{money} บาท</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-gray-100">
          <span className="text-lg text-gray-600">จำนวนคน</span>
          <span className="text-xl font-bold text-blue-600">{people} คน</span>
        </div>
        <div className="flex justify-between items-center py-4 mt-2 px-4 bg-blue-50 rounded-xl">
          <span className="text-lg font-medium text-gray-700">เงินที่ต้องแชร์ต่อคน</span>
          <span className="text-2xl font-extrabold text-green-600">{moneyShare} บาท</span>
        </div>
      </div>

      {/* ปุ่มกลับไปคำนวณใหม่ */}
      <Link
        href="/moneyshareinput"
        className="mt-6 px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-lg cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 active:translate-y-0 transition-all duration-300"
      >
         คำนวณใหม่อีกครั้ง
      </Link>

      {/* Footer */}
      <Footer />
    </div>
  );
}
