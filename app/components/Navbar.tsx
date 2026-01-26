'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    // NAVBAR HITAM PEKAT (GUMROAD STYLE)
    <div className="navbar fixed top-0 z-50 bg-neutral text-white border-b-2 border-white/10 py-3 shadow-xl">
      <div className="container mx-auto px-4">
        
        {/* 1. LOGO (Kiri) - Lebih Tebal & Besar */}
        <div className="flex-1">
          <Link href="/" className="group flex items-center gap-1">
            {/* Dot Kuning yang membesar pas di-hover */}
            <span className="text-3xl font-black font-nunito tracking-tighter text-white group-hover:text-primary transition-colors duration-300">
              Bisimo
            </span>
            <span className="w-3 h-3 bg-primary rounded-full group-hover:animate-bounce"></span>
          </Link>
        </div>

        {/* 2. MENU TENGAH (Desktop) */}
        <div className="hidden md:flex flex-none gap-8 mr-8">
          {/* Menu Item dengan Hover Effect Kuning */}
          {['Masalah', 'Fitur', 'Tentang Kami'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="font-bold text-sm uppercase tracking-wider text-gray-300 hover:text-primary hover:underline decoration-wavy decoration-2 underline-offset-8 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* 3. CTA BUTTON (Neo-Brutalism Bisimo Style) */}
        <div className="flex-none">
          <a 
            href="#download" 
            className="
              btn btn-primary 
              rounded-full px-8 
              text-neutral font-black text-base
              
              /* NEO-BRUTALISM STYLING */
              border-2 border-white 
              shadow-[4px_4px_0px_0px_#ffffff] 
              
              /* HOVER EFFECT (Pencet Tombol) */
              hover:bg-white hover:text-neutral hover:border-primary
              hover:shadow-[2px_2px_0px_0px_#ffffff] 
              hover:translate-x-[2px] hover:translate-y-[2px]
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