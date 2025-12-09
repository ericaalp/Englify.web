import React from "react";

function PricingSection() {
  return (
    <section className="py-20 bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto px-4">

     
        <h2 className="text-4xl font-extrabold text-[#2D0A57] text-center mb-16">
          Tariflar va narxlar hamma uchun qulay:
        </h2>

  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* JO'SHQIN */}
          <div className="rounded-[25px] border-2 border-[#1FE37A] border-b-4 p-6 bg-white ">

            <div className="rounded-xl text-white font-bold text-center text-2xl py-8 mb-6 bg-[#1FE37A]">
              JO'SHQIN
            </div>

            <div className="space-y-4 text-sm text-[#2D0A57] font-medium">
              <p><b>Ilova</b><br /> Englify ilovasiga to'liq kirish uchun shaxsiy hisob</p>
              <hr />
              <p><b>AI</b><br /> Grammatika va nutq bo'yicha sun'iy intellektdan yordam oling</p>
              <hr />
              <p><b>Sertifikat</b><br />Har bir bosqichni tugatgandan so'ng maxsus sertifikat beriladi.</p>
              <hr />
              <p><b>Kattalashtirish darslari</b><br /> Darajaga qarab, grammatika va suhbat nutqi bo'yicha haftada 2 dan 4 gacha darslar mavjud.</p>
              <hr />
              <p><b>Qo‘llab-quvvatlash menejeri</b><br />O'quv jarayonida yuzaga keladigan texnik savollarga javob beradi</p>
              <hr />
              <p><b>Cheksiz darslar</b><br /> To'lov ma'lum bir muddat uchun amal qiladi. To'lov muddati davomida siz cheksiz miqdordagi darslarni olishingiz va platformadan foydalanishingiz mumkin.</p>
              <hr />
              <p><b>Kattalashtirish darslari</b><br />Live Zoom darslari haftada 6 marta o'tkaziladi, grammatika va suhbat bir xil darajada (haftada 3 marta) o'tkaziladi.</p>
              <hr />
              <p><b>O'qituvchilar</b><br /> Ikkita alohida o'qituvchi - biri grammatika, ikkinchisi suhbat nutqi uchun - o'tilgan mavzular bo'yicha savollarga javob beradi va amaliy mashg'ulotlar olib boradi.</p>
              <hr />
              <p><b>Telegram guruhi</b><br /> Trening guruh formatida o‘tkaziladi: bir guruhda o‘rtacha 14-16 nafar talaba bor</p>
              <hr />
              <p><b>Chegirmalar</b><br /> Vaqti-vaqti bilan 3 oygacha oldindan to'lov uchun chegirmalar e'lon qilinishi mumkin.</p>
            </div>

            <div className="text-center my-8 text-[#2D0A57] font-bold">
              <div className="flex justify-center gap-10">
                <div>
                  <p className="text-sm">1 oy</p>
                  <p className="text-lg">650 000 so'm</p>
                </div>
                <div>
                  <p className="text-sm">3 oy</p>
                  <p className="text-lg">1 350 000 so'm</p>
                </div>
              </div>
            </div>

            <button className="w-full py-8 rounded-xl font-bold text-xl text-[#2D0A57] bg-[#1FE37A]">
              Kursga yoziling
            </button>
          </div>

          {/* BO'TALOG'IM */}
          <div className="rounded-[25px] border-2 border-[#8B7BFF] border-b-4 p-6 bg-white ">

            <div className="rounded-xl text-white font-bold text-center text-2xl py-8 mb-6 bg-[#8B7BFF]">
              BO'TALOG'IM
            </div>

            <div className="space-y-4 text-sm text-[#2D0A57] font-medium">
              <p><b>Ilova</b><br /> Englify ilovasiga to'liq kirish uchun shaxsiy hisob</p>
              <hr />
              <p><b>AI</b><br /> Grammatika va nutq bo'yicha sun'iy intellektdan yordam oling</p>
              <hr />
              <p><b>Sertifikat</b><br />Har bir bosqichni tugatgandan so'ng maxsus sertifikat beriladi.</p>
              <hr />
              <p><b>Kattalashtirish darslari</b><br /> Darajaga qarab, grammatika va suhbat nutqi bo'yicha haftada 2 dan 4 gacha darslar mavjud.</p>
              <hr />
              <p><b>Qo‘llab-quvvatlash menejeri</b><br />O'quv jarayonida yuzaga keladigan texnik savollarga javob beradi</p>
              <hr />
              <p><b>Cheksiz darslar</b><br /> To'lov ma'lum bir muddat uchun amal qiladi. To'lov muddati davomida siz cheksiz miqdordagi darslarni olishingiz va platformadan foydalanishingiz mumkin.</p>
              <hr />
              <p><b>Kattalashtirish darslari</b><br />Live Zoom darslari haftada 6 marta o'tkaziladi, grammatika va suhbat bir xil darajada (haftada 3 marta) o'tkaziladi.</p>
              <hr />
              <p><b>O'qituvchilar</b><br /> Ikkita alohida o'qituvchi - biri grammatika, ikkinchisi suhbat nutqi uchun - o'tilgan mavzular bo'yicha savollarga javob beradi va amaliy mashg'ulotlar olib boradi.</p>
              <hr />
              <p><b>Telegram guruhi</b><br /> Trening guruh formatida o‘tkaziladi: bir guruhda o‘rtacha 14-16 nafar talaba bor</p>
              <hr />
              <p><b>Chegirmalar</b><br /> Vaqti-vaqti bilan 3 oygacha oldindan to'lov uchun chegirmalar e'lon qilinishi mumkin.</p>
            </div>

            <div className="text-center my-8 text-[#2D0A57] font-bold">
              <div>
                <p className="text-sm">1 oy</p>
                <p className="text-lg">820 000 so'm</p>
              </div>
            </div>

            <button className="w-full py-8 rounded-xl font-bold text-xl text-[#2D0A57] bg-[#1FE37A]">
              Kursga yoziling
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PricingSection;
