import React from 'react'

function TargetAudience() {
  return (
    <section className='py-20 bg-[#F5F6FA]'>

      <div className='mx-auto max-w-6xl'>

        <h2 className='text-5xl font-extrabold text-[#2D0A57] text-center mb-16'>
          Bizning kurslarimiz quyidagilar uchun mo'ljallangan:
        </h2>
 
        <div className='flex  gap-8 '>
          <div className=''>
            <div className='rounded-[36px] border-2 border-[#E7B458] bg-[#FFD587] border-b-4 p-6 '>
              <h2 className='text-2xl text-[#2D0A57] font-extrabold mb-4'>Ariza beruvchilar</h2>
              <p className='text-2sm text-[#2D0A57] font-bold'>Davlat va xorijiy universitetlar, litseylar va boshqa ta’lim muassasalarida ingliz tili imtihonlariga tayyorlanayotganlar uchun</p>
            </div>
            <div className='rounded-[36px] border-2 border-[#B3B3D9] bg-[#D3D3F1] border-b-4 p-6 mt-5 '>
              <h2 className='text-2xl text-[#2D0A57] font-extrabold mb-4'>Maktab o'quvchilari</h2>
              <p className='text-2sm text-[#2D0A57] font-bold'>Ingliz tilini o'rganib bo'sh vaqtini unumli o'tkazmoqchi bo'lgan talabalar uchun</p>
            </div>
          </div>
          <div>
            <div className='rounded-[36px] border-2 border-[#96E66E] bg-[#B9FF97] border-b-4 p-6 '>
              <h2 className='text-2xl text-[#2D0A57] font-extrabold mb-4'>Havaskorlar</h2>
              <p className='text-2sm text-[#2D0A57] font-bold'>Yangi tillar va madaniyatlarni o'rganishga qiziqqan sayohatchilar va poliglotlar uchun</p>
            </div>
            <div className='rounded-[36px] border-2 border-[#BD90EC] bg-[#DBB7FF] border-b-4 p-6 mt-5'>
              <h2 className='text-2xl text-[#2D0A57] font-extrabold mb-4'>Talabalar</h2>
              <p className='text-2sm text-[#2D0A57] font-bold'>Zamonaviy kasb-hunarlarni o'rganish va moliyaviy mustaqillikka erishmoqchi bo'lgan yoshlar uchun</p>
            </div>
          </div>
          <div>
           <div className='rounded-[36px] border-2 border-[#72A3E4] bg-[#A2CAFF] border-b-4 p-6 '>
             <h2 className='text-2xl text-[#2D0A57] font-extrabold mb-4'>Muayyan kasblar vakillari</h2>
             <p className='text-2sm text-[#2D0A57] font-bold'>Qo'shimcha tilni o'rganish orqali o'z martabasini oshirishni rejalashtirgan xodimlar uchun</p>
           </div>
           <div className='rounded-[36px] border-2 border-[#E0CE46] bg-[#FFF18A] border-b-4 p-6 mt-5'>
             <h2 className='text-2xl text-[#2D0A57] font-extrabold mb-4'>Chet eldagi vatandoshlarimiz</h2>
             <p className='text-2sm text-[#2D0A57] font-bold'>Chet elga ishlash yoki o'qish uchun ketgan va kundalik muloqot uchun ingliz tiliga muhtoj bo'lganlar uchun ideal tanlov.</p>
           </div>
          </div>
        </div>

             {/* Tugma Button */}
       <div className="mt-20">
         <button className="w-full py-6 text-xl font-bold rounded-2xl text-[#2D0A57] bg-[#2CF88F]">
               Ishtirok eting!
         </button>
       </div>


      </div>
      
    </section>
  )
}

export default TargetAudience
