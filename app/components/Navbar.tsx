'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    // NAVBAR KUNING (PRIMARY)
    <div className="navbar fixed top-0 z-50 bg-primary text-neutral border-b-2 border-neutral py-3 shadow-md">
      <div className="container mx-auto px-4">
        
        {/* 1. LOGO (Kiri) */}
        <div className="flex-1">
          <Link href="/" className="group flex items-center gap-1">
            <span className="text-3xl font-black font-nunito tracking-tighter text-neutral transition-colors duration-300">
              Bisimo
            </span>
            {/* Dot Putih Statis (Pemanis) */}
            <span className="w-3 h-3 bg-white rounded-full border border-neutral group-hover:scale-125 transition-transform"></span>
          </Link>
        </div>

        {/* 2. MENU TENGAH (Desktop) */}
        <div className="hidden md:flex flex-none gap-8 mr-8">
          {['Masalah', 'Fitur', 'Tentang Kami'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              // PERUBAHAN DISINI:
              // Hover tidak ganti warna aneh-aneh, cuma opacity turun dikit & muncul garis bawah
              className="font-bold text-sm uppercase tracking-wider text-neutral transition-all hover:opacity-70 hover:underline decoration-2 underline-offset-8 decoration-neutral"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* 3. CTA BUTTON (Hitam -> Abu Tua Gelap) */}
        <div className="flex-none">
          <a 
            href="#download" 
            className="
              btn btn-neutral
              rounded-full px-8 
              text-white font-black text-base
              
              /* STYLE AWAL: Border Hitam, Shadow Putih */
              border-2 border-neutral
              shadow-[4px_4px_0px_0px_#ffffff] 
              
              /* HOVER EFFECT BARU (LEBIH HALUS): */
              /* 1. Tetap Gelap (Jadi Abu Tua #333), JANGAN Putih */
              hover:bg-[#333333] hover:border-neutral
              
              /* 2. Efek Tekan: Tombol gerak ke arah bayangan */
              hover:translate-x-[2px] hover:translate-y-[2px]
              
              /* 3. Bayangan mengecil (biar kerasa ditekan) */
              hover:shadow-[2px_2px_0px_0px_#ffffff] 
              
              transition-all duration-200
            "
          >
            Unduh Bisimo
          </a>
        </div>
        
      </div>
    </div>
  );
}