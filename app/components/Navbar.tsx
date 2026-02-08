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

       {/* 2. MENU TENGAH (Desktop) - REVISI ANTI GAGAL */}
<div className="hidden md:flex flex-none gap-8 mr-8">
  {['Masalah', 'Fitur', 'Cara Kerja'].map((item) => (
    <Link 
      key={item} 
      href={`#${item.toLowerCase().replace(' ', '-')}`} 
      className="
        font-bold text-sm uppercase tracking-wider text-neutral 
        transition-all duration-300
        
        /* JARAK & POSISI */
        pb-1               /* Jarak teks ke gelombang */
        border-b-2 border-transparent /* Border transparan biar teks gak lompat */
        
        /* SETTING GELOMBANG */
        bg-bottom bg-repeat-x bg-no-repeat
        
        /* URL SVG (Sudah diperbaiki tanpa spasi error) */
        hover:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2020%204%27%3E%3Cpath%20fill=%27none%27%20stroke=%27%23171717%27%20stroke-width=%271.5%27%20d=%27M0%203.5c5%200%205-3%2010-3s5%203%2010%203%205-3%2010-3%205%203%2010%203%27/%3E%3C/svg%3E')]
        
        /* UKURAN (Ubah 20px jadi 30px kalau mau lebih renggang lagi) */
        bg-[length:20px_4px] 
      "
    >
      {item}
    </Link>
  ))}
</div>

        {/* 3. CTA BUTTON*/}
        <div className="flex-none">
          <Link 
            href="#download"  
            className="btn btn-primary rounded-2xl text-neutral font-black border-[3px] border-neutral hover:border-[2px] hover:border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center gap-3"
          >
            Unduh Bisimo
          </Link>
        </div>
        
      </div>
    </div>
  );
}