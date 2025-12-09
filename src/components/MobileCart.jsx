import mobile from '../assets/mobile.webp'
import mobil1 from '../assets/mobil1.webp'
import mobil2 from '../assets/mobil2.webp'
import englify from '../assets/englify.webp'
function MobileCart() {
  return (
    <section className='py-20 bg-[#00A7FF]'>

      <div className='text-white mx-auto max-w-6xl flex items-center justify-between relative'>

        {/* 1-cantainer */}
        <div className='max-w-lg left-2'>

          <img src={englify} alt="englify" className='h-50 w mb-4'/>
          <p className='font-bold text-2xl mb-4'>Englify - bu lug'at, grammatika va talaffuzni rivojlantirishga yordam beruvchi maxsus ingliz tilini o'rganish ilovasi. Qo'shimcha interaktiv darslar, mini-o'yinlar, masshtablash darslari, sun'iy intellekt yordamida ishlaydigan yordamchi va moslashuvchan mashqlar o'rganishni samarali va qulay qiladi. Istalgan vaqtda va o'z tezligingizda o'rganing!</p>
          <div className='flex gap-6'>
            <div className='bg-white text-[#00A4FF] font-bold text-xl h-60 w-50 rounded-[30px] p-5 '>
              <i class="fa-brands fa-apple"></i> <span>App Store</span>
              <img src={mobil1} alt="mobil" className='h-40 ' />
            </div >
            <div className='bg-white text-[#00A4FF] font-bold text-xl h-60 w-50 rounded-[30px] p-5'>
              <i class="fa-brands fa-google-play"></i> <span>Google Play</span>
              <img src={mobil2} alt="mobil(2)" className='h-40' />
            </div>
          </div>

        </div>

        {/* 2-cantainer */}

     
          <img src={mobile} alt="mobil" className='h-[700px] rounded-b-2xl'/>
       


      </div>
      
    </section>
  )
}

export default MobileCart
