'use client'; 

import { useState, useEffect } from 'react';
import Image from 'next/image';

// Import Shapes
import RibbonShape from './shapes/Ribbon';
import SquiggleShape from './shapes/Squiggle';
import TriangleShape from './shapes/Triangle';


export default function HeroSection() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
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
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-20 overflow-hidden bg-white">
      
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Bintang Pink Melayang (Kanan Atas) */}
        <div 
          className="absolute top-32 right-[10%] transition-transform duration-100 ease-out"
          style={getParallax(4)} 
        >
        </div>

        {/* Cacing Hijau Melayang (Kiri Bawah) */}
        <div 
          className="absolute bottom-40 left-[8%] transition-transform duration-100 ease-out"
          style={getParallax(6)}
        >
          <SquiggleShape className="w-36 h-16 text-bisimo-green -rotate-12" />
        </div>

         {/* Segitiga Biru Melayang (Kanan Bawah) */}
        <div 
          className="absolute bottom-20 right-[5%] opacity-60 transition-transform duration-100 ease-out"
          style={getParallax(-5)}
        >
           <TriangleShape className="w-24 h-24 text-secondary rotate-45" />
        </div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="container mx-auto px-4 relative z-10 text-center">


        {/* 2. HEADLINE AREA (Cimo Kanan, Ribbon Kiri) */}
        <div className="relative inline-block">
            
            {/* RIBBON ORNAMEN (Posisi KIRI Headline + Parallax) */}
            {/* Diturunkan dikit (-top-16 ke -top-10) biar gak kena nav */}
            <div 
                className="absolute -top-14 -left-16 md:-left-36 z-20 transform -rotate-12 transition-transform duration-100 ease-out"
                style={getParallax(3)} // Ikut gerak kursor (Parallax Factor 3)
            >
                <RibbonShape className="w-24 h-24 md:w-36 md:h-36 text-bisimo-pink drop-shadow-md" />
            </div>

            {/* CIMO MASCOT (Posisi KANAN Headline + Parallax) */}
            <div 
                className="absolute -top-28 -right-8 md:-right-28 z-20 w-32 md:w-40 transition-transform duration-100 ease-out"
                style={getParallax(4)} // Ikut gerak kursor (Parallax Factor 4)
            >
                <Image 
                    src="/cimo-mascot.svg" 
                    alt="Cimo Mascot"
                    width={160}
                    height={160}
                    className="object-contain drop-shadow-xl"
                    priority
                />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-neutral leading-[1.1] mb-8 font-nunito tracking-tight relative z-10">
              Mendengar yang <span className="text-primary underline decoration-wavy decoration-4 underline-offset-4">Tak Terucap.</span> <br />
              Memahami yang 
              <span className="relative inline-block mx-2">
                  <span className="absolute inset-0 bg-secondary transform -rotate-2 border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-10 rounded-sm"></span>
                  <span className="relative z-10 px-3 text-white">Tak Terdengar.</span>
              </span>
            </h1>
        </div>

        {/* 3. SUBTEXT */}
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium mt-4">
          Ruang aman untuk memahami dan mengekspresikan emosi, menjembatani komunikasi bagi 
          <span className="font-bold text-white bg-bisimo-green px-2 py-1 border-2 border-neutral rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block mx-1">
            teman Tuli
          </span> 
          dan kita semua.
        </p>

        {/* 4. CTA BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          <button className="btn btn-primary btn-xl h-16 rounded-2xl text-neutral font-black border-[3px] border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-xl px-10 flex items-center gap-3">
            Unduh Bisimo
          </button>
          
          <button className="btn btn-outline btn-neutral btn-xl h-16 rounded-2xl text-neutral font-black border-[3px] border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-xl px-10 flex items-center gap-3">
            <span>Pelajari Masalahnya</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* 5. APP SHOWCASE */}
        {/* <div 
          className="relative mx-auto max-w-5xl group perspective-1000"
          style={getParallax(1)} 
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-bisimo-pink to-primary rounded-[3rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>

          <div className="mockup-window border-2 border-neutral bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform transition-transform duration-500 hover:rotate-0 hover:scale-[1.01]">
            <div className="flex justify-center bg-white px-4 py-16 relative overflow-hidden">
               <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               
               <Image 
                 src="/app-showcase.png" 
                 alt="Preview Aplikasi Bisimo"
                 width={900} 
                 height={600}
                 className="relative z-10 transform transition-transform duration-700 group-hover:scale-105"
                 priority
               />
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}