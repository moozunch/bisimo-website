'use client';

import { useState, useEffect } from 'react';
import NumberTicker from './magicui/number-ticker';
import SquiggleShape from './shapes/Squiggle'; // Pastikan diimport
import StarShape from './shapes/Ribbon'; // Pastikan diimport

export default function TrialSection() {
  
  // LOGIKA PARALLAX (Sama seperti Hero)
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
    <section className="py-32 bg-white relative overflow-hidden border-t-2 border-neutral">
      
      {/* --- BACKGROUND DECORATION (SVG Parallax) --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
         
         {/* Plus Sign Kuning (Statik / Spin pelan) */}
         <div className="absolute top-20 right-20 animate-spin-slow opacity-60">
            <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
              <rect x="35" width="30" height="100" fill="#FFBD30"/>
              <rect y="35" width="100" height="30" fill="#FFBD30"/>
            </svg>
         </div>

         {/* Cacing Hijau (Parallax Kiri) */}
         <div 
            className="absolute top-1/3 left-10 transition-transform duration-100 ease-out opacity-80"
            style={getParallax(4)}
         >
            <SquiggleShape className="w-24 h-12 text-bisimo-green rotate-12" />
         </div>

         {/* Bintang Pink (Parallax Kanan Bawah) */}
         <div 
            className="absolute bottom-20 right-10 transition-transform duration-100 ease-out opacity-80"
            style={getParallax(-3)}
         >
            <StarShape className="w-16 h-16 text-bisimo-pink -rotate-12" />
         </div>

         {/* Cacing Biru (Parallax Kiri Bawah) */}
         <div 
            className="absolute bottom-10 left-1/4 transition-transform duration-100 ease-out opacity-60"
            style={getParallax(2)}
         >
             <SquiggleShape className="w-20 h-10 text-secondary rotate-6" />
         </div>

      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        
        {/* 1. LABEL KECIL */}
        <p className="text-gray-400 font-extrabold text-sm tracking-[0.2em] uppercase mb-6">
          BERGABUNGLAH SEKARANG
        </p>

        {/* 2. JUMLAH DOWNLOAD (ANIMATED TICKER) */}
        <div className="mb-10 relative inline-block">
          {/* Hiasan Plus Kecil di pojok angka */}
          <div className="absolute -top-6 -right-8 text-primary animate-bounce">
             <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <rect x="40" width="20" height="100" fill="currentColor"/>
                <rect y="40" width="100" height="20" fill="currentColor"/>
             </svg>
          </div>

          <div className="flex flex-col items-center">
             <div className="inline-flex items-baseline justify-center gap-1">
                <span className="text-6xl md:text-8xl font-black text-neutral font-nunito tracking-tight leading-none">
                  <NumberTicker value={15420} className="text-neutral" />
                </span>
             </div>
             <p className="text-neutral font-bold text-lg md:text-xl mt-4">
                Orang Telah Mengunduh Bisimo
             </p>
          </div>
        </div>

        {/* 3. HEADLINE AJAKAN */}
        <h2 className="text-3xl md:text-6xl font-black text-neutral mb-12 leading-tight max-w-3xl mx-auto">
          Jangan Pendam Sendiri. <br/>
          <span className="relative inline-block mt-2">
             {/* Coretan Gelombang Kuning di belakang teks */}
             <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 10 10 20 5 T 40 5 T 60 5 T 80 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
             <span className="relative z-10">Cimo Siap Mendengar.</span>
          </span>
        </h2>

        {/* 4. TOMBOL DOWNLOAD & UJI COBA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          
          {/* TOMBOL UJI COBA (WEB) */}
          <button className="btn btn-primary btn-xl h-16 rounded-2xl text-neutral font-black border-[3px] border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-xl px-10 flex items-center gap-3">
            <span>Coba Versi Web</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </button>

          {/* DIVIDER TEKS */}
          <span className="text-gray-400 font-bold text-sm tracking-wider">ATAU UNDUH DI</span>

          {/* APP STORE & PLAY STORE BUTTONS (Black Badge) */}
          <div className="flex gap-4">
             {/* Google Play */}
             <button className="btn h-16 bg-neutral hover:bg-neutral/90 border-2 border-neutral text-white rounded-2xl px-6 flex items-center gap-3 shadow-[4px_4px_0px_0px_#FFBD30] hover:shadow-[2px_2px_0px_0px_#FFBD30] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                <svg viewBox="0 0 512 512" width="28" className="fill-current text-white">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold leading-none text-gray-300 mb-1">GET IT ON</div>
                  <div className="text-lg font-bold leading-none">Google Play</div>
                </div>
             </button>

             {/* App Store */}
             <button className="btn h-16 bg-neutral hover:bg-neutral/90 border-2 border-neutral text-white rounded-2xl px-6 flex items-center gap-3 shadow-[4px_4px_0px_0px_#FFBD30] hover:shadow-[2px_2px_0px_0px_#FFBD30] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                <svg viewBox="0 0 384 512" width="28" className="fill-current text-white">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 46.9 126.7 89.8 126.7 30.8 0 38.5-19.8 86.1-19.8 30.9 0 38.2 19.8 85.5 19.8 49.4 0 79.7-81.2 89.8-126.7-55.7-17.7-90.8-59.6-90.8-106zM224 50.8c22.5-27.2 41.6-67 37.6-106.3-33 2.7-72.3 20.9-95.6 48.6-21.6 25.8-38.6 63.8-37.5 102.3 36.6 2.3 75.1-19 95.5-44.6z"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-bold leading-none text-gray-300 mb-1">Download on the</div>
                  <div className="text-lg font-bold leading-none">App Store</div>
                </div>
             </button>
          </div>

        </div>

        {/* Note Kecil */}
        <p className="mt-16 text-xs text-gray-400 font-medium">
          *Versi Beta saat ini tersedia untuk Android. iOS segera menyusul.
        </p>

      </div>
    </section>
  );
}