import logos from '../assets/logo.webp'

function Header() {
  return (
    <header className='sticky top-4 left-4 right-4 z-50 ' >
      <div className='mx-auto max-w-6xl'>
          <div className='bg-[#FFFFFF] 
          flex items-center 
          justify-between
          px-6 py-3 rounded-full border-white/60
          shadow-[0_20px_30px_rgba(0,0,0,0.12)]
          backdrop-blur-sm
          '>

            {/* Logo */}
            <div className='flex items-center'>
              <img src={logos} alt="logo" className='w-26 sm:w-30 md:w-35 
              object-contain'/>
            </div> 

            {/* Navigatsiya menyusi */}
                <nav className='hidden md:flex flex-1 justify-center '>
                  <ul className='flex gap-10 text-xl text-purple-900 font-semibold'>
                    <li><a href="home">Maktab Haqida</a></li>
                    <li><a href="pricing">Tarflar</a></li>
                    <li><a href="contacts">Kontaklar</a></li>
                    <li><a href="results">Natijalar</a></li>
                  </ul>
                </nav>

              {/* Button  */}
                
                  <a href="button" className='bg-[#00A4FF] px-6 py-3 text-amber-50 text--2xl rounded-full mr-8 font-semibold'>Talaba ilovasi</a>
                 

          </div>
      </div>
    </header>
  )
}

export default Header
