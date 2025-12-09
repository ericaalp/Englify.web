import React from 'react'
import teachers from '../assets/teacher.webp'

function Hero() {
  return (
    <section className="py-20 bg-[#00A7FF] ">
      <div className='text-white mx-auto max-w-6xl flex items-center justify-between relative'>
        
        {/* Chap tomon */}
        <div className="max-w-lg left-2">
          <h1 className="text-6xl font-extrabold ">
            Umumiy ingliz
          </h1>

          <p className="text-3xl mt-4 font-bold ">
            Zamonaviy usullardan foydalanib ingliz tilini tez va samarali o'rganing.
          </p>

          {/* Forma */}
          <div className="mt-10 bg-white text-[#28004D] px-5 py-7 rounded-3xl  w-[450px] border-[#C9CDE3] border-3 border-b-7">
            <label className="font-semibold text-xl ml-3 ">Sizning ismingiz va familiyangiz</label>
            <input
              type="text"
              placeholder="Ismingiz va familiyangiz"
              className="mt-1 w-full px-4 py-6 border-[#C9CDE3] border-2 rounded-lg bg-gray-100 "
            />

            <label className="mt-4 font-semibold block text-xl  ml-3">Sizning telefon raqamingiz</label>
            <input
              type="text"
              placeholder="+998 ** *** ** **"
              className="mt-1 w-full px-4 py-6 border-[#C9CDE3] border-2 rounded-lg bg-gray-100 "
            />

            <button className="w-full mt-6 bg-green-400 py-6 text-[#28004D] font-bold rounded-xl">
              Ro'yxatdan o'tish
            </button>

            <p className='text-black text-center font-bold text-xs pt-2'>
              Tugmani bosish orqali siz bizning  
              <a href="link" className='text-blue-700'> ommaviy taklifimizga rozilik bildirasiz!</a>
            </p>
          </div>
        </div>

        {/* Rasm */}
        <img src={teachers} alt="teacher" className="h-[700px] rounded-b-2xl" />
      </div>
    </section>
  )
}

export default Hero
