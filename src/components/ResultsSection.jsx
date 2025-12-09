import React from 'react'

function ResultsSection() {
  return (
    <section className='py-20 bg-[#F5F6FA]'>

      <div className='mx-auto max-w-6xl'>

        <h1 className='text-5xl font-extrabold text-[#2D0A57] text-center mb-4'>
          Imkoniyatlar shunchaki ajoyib!
        </h1>

        <p className='text-4xl text-[#2D0A57] font-bold text-center mb-16'>
          Qiziq, kursni tugatganingizdan keyin qanday natijalarga erishasiz?!
        </p>

       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start'>

          {/* 1-ustun */}
          <div className='flex flex-col gap-8 mt-10'>
            <h2 className='rounded-[36px] p-6  border-2 border-[#96E66E] border-b-4 text-[#96E66E] text-xl font-bold'>
              Endi turli veb-saytlarda sevimli qo‘shiqlaringiz tarjimasini qidirishingiz yoki filmlar davomida subtitrlarni o‘qishingiz shart emas. Qisqa vaqt ichida tinglash tajribangiz qanday yaxshilanganini sezasiz.
            </h2>

            <h2 className='rounded-[36px] p-6  border-2 border-[#FFA45E] border-b-4 text-[#FFA45E] text-xl font-bold'>
              Siz so'zlarni to'g'ri talaffuz qilishni o'rganasiz. Va'da beramiz, "Nimadir ko'zingda" so'zini Avazbek Olimovdan yaxshiroq talaffuz qila olasiz!
            </h2>
          </div>

          {/* 2-ustun */}
          <div className='flex flex-col gap-8 mb-10'>
            <h2 className='rounded-[36px] p-6  border-2 border-[#785F90] border-b-4 text-[#785F90] text-xl font-bold'>
              Ingliz tilini o'rganish orqali siz nufuzli xorijiy universitetlarda grant yutib olish imkoniyatiga ega bo'lasiz.
            </h2>

            <h2 className='rounded-[36px] p-6  border-2 border-[#FF8A3D] border-b-4 text-[#FF8A3D] text-xl font-bold'>
              Siz jahon adabiyotining eng buyuk asarlarini asl nusxada o‘qib chiqishingiz va jahon yangiliklarini mashhur saytlarda kuzatib borishingiz mumkin.
            </h2>

            <h2 className='rounded-[36px] p-6  border-2 border-[#FF6756] border-b-4 text-[#FF6756] text-xl font-bold'>
              Siz ingliz tilini o'rganishning mutlaqo yangi va zamonaviy usullarini sinab ko'rasiz va til o'rganishning butunlay yangi darajasini kashf qilasiz.
            </h2>
          </div>

          {/* 3-ustun */}
          <div className='flex flex-col gap-8 mt-10'>
            <h2 className='rounded-[36px] p-6  border-2 border-[#1F54C5] border-b-4 text-[#1F54C5] text-xl font-bold'>
              Siz odamlar eng yaxshi palov nima ekanligi yoki Gentra qancha turadiganidan ko'proq narsani xohlaydigan g'ayratli, kuchli va rag'batlantiruvchi muhitning bir qismi bo'lasiz.
            </h2>

            <h2 className='rounded-[36px] p-6  border-2 border-[#EFBC00] border-b-4 text-[#EFBC00] text-xl font-bold'>
              Siz martaba o'sishi uchun yuqori maoshli ish topishingiz, xorijiy kompaniyalar bilan hamkorlik qilishingiz va ular aytganidek, "katta pul ishlashingiz" mumkin bo'ladi.
            </h2>
          </div>

        </div>

       
        <div className="mt-20">
          <button className="w-full py-6 text-xl font-bold rounded-2xl text-[#2D0A57] bg-[#2CF88F]">
            Ishtirok eting!
          </button>
        </div>

      </div>

    </section>
  )
}

export default ResultsSection
