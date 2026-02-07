'use client'; 

import { useState, useEffect } from 'react';
import Image from 'next/image';
import RibbonShape from './shapes/Ribbon';
import SquiggleShape from './shapes/Squiggle';
import TriangleShape from './shapes/Triangle';
import Link from 'next/link';

export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) { 
        setMousePos({
          x: (e.clientX - window.innerWidth / 2) / 50,
          y: (e.clientY - window.innerHeight / 2) / 50,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getParallax = (factor: number) => {
    return {
      transform: `translate(${mousePos.x * factor}px, ${mousePos.y * factor}px)`,
    };
  };

  return (
    // UBAH: pt-32 jadi pt-44 biar konten turun ke bawah (tidak kosong melompong tapi lebih centered secara visual)
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-44 pb-20 overflow-hidden bg-white">
      
      {/* BACKGROUND DOTS */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" fill="#000000"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-hero)" />
         </svg>
      </div>

      {/* --- BACKGROUND DECORATION (Parallax Shapes) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute bottom-20 -left-10 md:bottom-40 md:left-[8%] transition-transform duration-100 ease-out"
          style={getParallax(6)}
        >
          <SquiggleShape className="w-24 h-12 md:w-36 md:h-16 text-bisimo-green -rotate-12" />
        </div>

        <div 
          className="absolute -bottom-1 -right-16 md:bottom-20 md:right-[5%] opacity-60 transition-transform duration-100 ease-out z-0"
          style={getParallax(-5)}
        >
           <TriangleShape className="w-40 h-40 md:w-40 md:h-60 text-secondary rotate-12 md:rotate-45" />
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 relative z-10 text-center">

        <div className="relative inline-block">
            {/* RIBBON SHAPE */}
            <div 
                className="absolute -top-12 -left-3 md:-top-16 md:-left-24 z-0 md:z-20 transform -rotate-12 transition-transform duration-100 ease-out"
                style={getParallax(3)} 
            >
                <RibbonShape className="w-24 h-24 md:w-40 md:h-40 text-bisimo-pink drop-shadow-md opacity-80 md:opacity-100" />
            </div>

            {/* CIMO MASCOT (Floating) */}
            <div 
                className="absolute hidden md:block -top-5 -right-8 w-24 md:-top-32 md:-right-44 md:z-20 md:w-44 transition-transform duration-100 ease-out"
                style={getParallax(4)} 
            >
                <Image 
                    src="/cimo-mascot.svg" 
                    alt="Cimo Mascot"
                    width={180}
                    height={180}
                    className="object-contain drop-shadow-xl"
                    priority
                />
            </div>

            {/* HEADLINE */}
            <h1 className="text-4xl md:text-7xl font-extrabold text-neutral leading-[1.1] mb-8 font-nunito tracking-tight relative z-10">
              Mendengar yang <span className="text-primary underline decoration-wavy decoration-4 underline-offset-4 whitespace-nowrap">Tak Terucap.</span> <br />
              Memahami yang 
              <span className="relative inline-block mx-2">
                  <span className="absolute inset-0 bg-secondary transform -rotate-2 border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-10 rounded-xl"></span>
                  <span className="relative z-10 px-3 text-white ">Tak Terdengar.</span>
              </span>
            </h1>
        </div>

        {/* 3. SUBTEXT */}
        <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium mt-4 px-2">
          Ruang aman untuk memahami dan mengekspresikan emosi, menjembatani komunikasi bagi 
          <span className="whitespace-nowrap font-bold text-white bg-bisimo-green px-2 py-1 border-2 border-neutral rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block mx-1">
            teman Tuli
          </span> 
          dan kita semua.
        </p>

        {/* 4. CTA BUTTONS */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
            {/* Tombol Utama (Kuning) */}
            <Link 
              href="#download" 
              className="w-full sm:w-auto btn btn-primary btn-xl h-14 md:h-16 rounded-2xl text-neutral font-black border-[3px] border-neutral hover:border-[2px] hover:border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-lg md:text-xl px-8 md:px-10 flex items-center justify-center gap-3"
            >
              Unduh Bisimo
            </Link>
            
            {/* Tombol Secondary (Putih + Icon Kelinci) */}
            <button 
              onClick={() => window.dispatchEvent(new Event('open-chat'))}
              className="
                w-full sm:w-auto btn bg-white btn-xl h-14 md:h-16 rounded-2xl 
                text-neutral font-black border-[3px] border-neutral 
                hover:border-[2px] hover:border-neutral hover:bg-gray-50
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                hover:translate-x-[2px] hover:translate-y-[2px] 
                transition-all text-lg md:text-xl px-8 md:px-10 
                flex items-center justify-center gap-3
              "
            >
              Curhat dengan Cimo
              {/* Icon Kelinci Cimo */}
              <div className="relative w-8 h-8">
                <Image 
                    src="/cimo-senang.svg" 
                    alt="Cimo Icon"
                    fill
                    className="object-contain"
                />
              </div>
            </button>
        </div>

      </div>
    </section>
  );
}