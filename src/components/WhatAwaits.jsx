import React from "react";

const features = [
  {
    id:1,
    title: "Onlayn format",
    desc: "Platformaga istalgan joydan 24/7 kiring. Siz istalgan qurilmadan akkauntingizga kirishingiz, darslarni oʻrganishingiz, mavzular boʻyicha sunʼiy intellekt asosidagi javoblarni olishingiz va uy vazifasi boʻyicha uzluksiz fikr-mulohaza olishingiz mumkin.",
    
  },
  {
    id:2,
    title: "Uy vazifasi haqida doimiy fikr bildirish",
    desc: "Qiziqarli va foydali Zoom darslari: siz ikkita repetitor bilan bog'lanasiz - biri grammatika, ikkinchisi nutq uchun. Ular mavzularni tushuntiradi, savollarga javob beradi va muntazam ravishda fikr-mulohazalarini bildiradi.",
    
  },
  {
    id:3,
    title: "Guruhlar",
    desc: "Darslar oʻrtacha 14–16 oʻquvchidan iborat guruhlarda oʻtkaziladi. Talabalar jonli onlayn darslarda qatnashadilar, raqobatlashadilar va bir-birlariga yordam berishadi.",
    
  },
  {
    id:4,
    title: "Sertifikatlar",
    desc: "Har bir bosqichni tugatgandan so'ng sizda sertifikat olish imkoniyati mavjud. Bu daraja sizning amaliy ingliz tilini bilish darajangizga mos keladi.",
   
  },
  {
    id:5,
    title: "Interaktiv onlayn platforma va shaxsiy hisob",
    desc: "Har bir talaba o'zining shaxsiy foydalanuvchi nomi va parolidan foydalangan holda o'z akkauntiga kiradi. Mobil ilova barcha video darslarni, lug‘at jadvallarini, uy vazifalarini, natijalarni va tegishli Zoom darslarini darajalari bo‘yicha qulay va aniq ko‘rsatadi.",
   
  },
  {
    id:6,
    title: "Haqiqiy Amerika darslari",
    desc: "Har bir video Amerika sinfida suratga olingan. Har bir darsda 2 dan 4 gacha qisqa video darslar (5–10 daqiqa) mavjud bo‘lib, bu materialni o‘rganishni oson va qiziqarli qiladi.",
   
  },
];


function WhatAwaits() {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-5xl font-extrabold text-[#2D0A57] text-center mb-16">
          Sizni nima kutmoqda?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[28px] p-6 border-2 border-[#D7DBFF] border-b-7"
            >
              <div className="flex gap-3">
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS7wz-9oEFNVPdYBbdvE5u58s_lI8Nv6MzQH2kLeWQvX94Dg2C4" alt="rasm"
              className="h-10 w-10" />
              <h3 className="text-2xl font-bold text-[#2D0A57]  mb-8">
                {item.title}
              </h3>

              </div>
              <p className="text-[#3B2D5B] text-[18px] font-bold mb-5 leading-relaxed">
                {item.desc}
              </p>

              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-[9px] text-xl font-bold text-white bg-[#1BE67D]">JO'SHQIN</button>
                <button className="px-5 py-3 rounded-[9px] text-xl font-bold text-white bg-[#8873FF]">BO'TALOG'IM</button>
              </div>
            </div>
          ))}
        </div>

        {/* Tugma Button */}
       <div className="mt-20">
         <button className="w-full py-6 text-xl font-bold rounded-2xl text-[#2D0A57] bg-[#2CF88F]">
               Ishtirok eting!
         </button>
</div>

      </div>
    </section>
  );
}

export default WhatAwaits;

