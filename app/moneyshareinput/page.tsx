'use client'

import Image from "next/image";
import imgmoney from "@/assets/images/imgmoney.png";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  // สร้าง state สำหรับเก็บค่าของเงินและจำนวนคน
  const [money, setMoney] = useState("");
  const [People, setPeople] = useState("");

  // สร้างฟังก์ชั่นคำนวนเงินแชร์ และเปิดไปหน้า /moneyshareoutput และ ส่งค่าของเงินและจำนวนคน และเงินที่แชร์ต่อคนไปด้วย
  const handleCalculateClick = () => {

    // Validate input values
    if (!money || !People) {
      alert("กรุณาป้อนเงินและจำนวนคนให้ครบถ้วน");
      return;
    }

    // คำนวนเงินแชร์
    const moneyShare = parseFloat(money) / parseInt(People);

    //เปิดไปหน้า /moneyshareoutput และ ส่งค่าของเงินและจำนวนคน และเงินที่แชร์ต่อคนไปด้วย
    router.push(`/moneyshareoutput?money=${money}&people=${People}&moneyShare=${moneyShare.toFixed(2)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-6">
      {/* ส่วนชื่อเว็บ */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 drop-shadow-sm">
        American Share แชร์เงินกันเถอะ
      </h1>

      {/* ส่วนชื่อหน้า Page */}
      <h2 className="text-lg md:text-xl font-semibold text-center mt-2 text-blue-600">
        ป้อนข้อมูลเพื่อคำนวณการแชร์เงิน
      </h2>

      {/* ส่วนแสดงรูป */}
      <Image
        src={imgmoney}
        alt="Money Image"
        className="mt-4 w-28 md:w-32 drop-shadow-xl transition-transform duration-300 hover:scale-105"
      />

      {/* ส่วนของการป้อนข้อมูล เงินกับคน */}
      <div className="mt-5 w-full max-w-md px-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 py-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          ป้อนเงิน
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
          placeholder="ป้อนจำนวนเงิน"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />

        {/* ป้อนจำนวนคน */}
        <label className="block text-lg font-medium text-gray-700 mt-4 mb-2">
          จำนวนคน
        </label>
        <input
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-colors duration-200"
          placeholder="ป้อนจำนวนคน"
          value={People}
          onChange={(e) => setPeople(e.target.value)}
        />

        {/* คำนวน */}
        <button
          onClick={handleCalculateClick}
          className="mt-6 w-full px-4 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300">
          คำนวณ
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
