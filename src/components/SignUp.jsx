import React from 'react'

function SignUp() {
  return (
    <section className='py-25 bg-[#F5F6FA]'>
      <div className='mx-auto max-w-6xl flex gap-10'>

        {/* 1-canteiner */}
        <div className='w-150 text-[#28004D] mt-25'>
          <h2 className='text-4xl font-extrabold mb-4 '>Orzularingizga yaqinlashing - treningga murojaat qiling!</h2>
          <p className='text-2xl font-bold'>Ingliz tilini o'rganishni boshlash hech qachon oson bo'lmagan. Englify sizga eng yaxshi onlayn ingliz tilini o'rganish usullarini taklif etadi. Maqsadlaringizga tezroq erishish uchun bugundan o'rganishni boshlang!</p>
        </div>
       

       {/* 2-canteiner */}

        <div className="mt-10 bg-white text-[#28004D] px-5 py-7 rounded-3xl  w-[550px] h-[450px] border-[#C9CDE3] border-3 border-b-8">
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

            <button className="w-full mt-6 bg-green-400 py-6 text-[#28004D] text-xl font-bold rounded-xl">
              Ro'yxatdan o'tish
            </button>

            <p className='text-black font-bold text-[13px] pt-2 text-center'>
              Tugmani bosish orqali siz bizning  
              <a href="link" className='text-blue-700'> ommaviy taklifimizga rozilik bildirasiz!</a>
            </p>
          </div>


      </div>
      
    </section>
  )
}

export default SignUp
