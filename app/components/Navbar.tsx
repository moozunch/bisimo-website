'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="navbar fixed top-0 z-50 bg-primary text-neutral border-b-2 border-neutral py-3 shadow-md">
      <div className="container mx-auto px-4">
        
        {/* 1. LOGO + TEKS (Kiri) */}
        <div className="flex-1">
          <Link href="/" className="group flex items-center gap-3">
            <div 
              className="
                relative w-11 h-11 md:w-14 md:h-14 p-1 
                bg-white rounded-xl                        
                border-2 border-neutral                  
                shadow-[3px_3px_0px_0px_#00000]       
                transition-transform duration-300 
                group-hover:rotate-12 group-hover:scale-110 
                overflow-hidden
              "
            >
              <Image 
                src="/logo.png"
                alt="Bisimo Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* LOGO TEXT */}
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-black font-nunito tracking-tighter text-neutral transition-colors duration-300">
                Bisimo
              </span>
            </div>

          </Link>
        </div>

        {/* 2. MENU TENGAH (Desktop) */}
        <div className="hidden md:flex flex-none gap-8 mr-8">
          {['Masalah', 'Fitur', 'Tentang Kami'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="font-bold text-sm uppercase tracking-wider text-neutral transition-all hover:underline decoration-wavy decoration-2 underline-offset-4 decoration-neutral transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* 3. CTA BUTTON*/}
        <div className="flex-none">
          <button className="btn btn-primary rounded-2xl text-neutral font-black border-[3px] border-neutral hover:border-[2px] hover:border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3">
            Unduh Bisimo
          </button>
        </div>
        
      </div>
    </div>
  );
}