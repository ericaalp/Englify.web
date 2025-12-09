import footerlogo from '../assets/footerlogo.webp';
import osaar from '../assets/osaar.webp';
function Footer() {
  return (
    <footer className="bg-[#2D024D] text-white pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        {/* TOP QISM */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between gap-10">
       
          <div>
            <img src={footerlogo} alt="foterlogo" />
          </div>

          
          <div className="space-y-3 text-sm">
            <p>Ommaviy taklif</p>
            <p>Shaxsiy ma'lumotlarning maxfiylik siyosati</p>
            <p>Shaxsiy ma'lumotlarni qayta ishlashga rozilik</p>
          </div>

      
          <div>
            <p className="text-lg font-semibold">+998 (55) 515-69-69</p>
          </div>

         
          <div className="text-sm text-right space-y-2">
            <p>"ENGLIFY" MChJ</p>
            <p>INN: 309795570</p>
          </div>
        </div>

        {/* Chiziq  */}

        <hr className="mt-20 mb-4" />

        {/* PASTKI QISM */}
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-8">
        
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-lg text-black text-lg"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-lg text-black text-lg"
            >
              <i className="fab fa-telegram-plane"></i>
            </a>

            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-white rounded-lg text-black text-lg"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>

       
          <p className="text-sm text-center ">
            © "ENGLIFY", 2025 – Barcha huquqlar himoyalangan
          </p>

         
          <div className="flex items-center gap-3">
            <img
              src="https://englify.uz/_image?href=%2F_astro%2Fuzcard.oZMzroLl.png&w=440&h=579&f=webp"
              alt="uzcard"
              className="h-8"
            />
            <img
              src="https://englify.uz/_image?href=%2F_astro%2Fhumo.BPKV8rYE.png&w=440&h=264&f=webp"
              alt="humo"
              className="h-8"
            />
            <img
              src="https://englify.uz/_image?href=%2F_astro%2Fvisa.BQjG4RsH.png&w=440&h=142&f=webp"
              alt="visa"
              className="h-8"
            />
            <img
              src="https://englify.uz/_image?href=%2F_astro%2Fmaster-card.DUa45uNf.png&w=440&h=312&f=webp"
              alt="mastercard"
              className="h-8"
            />

            <span className="ml-4 text-sm flex gap-2">
              <span className='mt-4'>Dizayn tomonidan</span> <img src={osaar} alt="osar" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
