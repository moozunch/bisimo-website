'use client';

import { useState, useEffect, useRef } from 'react';
import NumberTicker from './magicui/number-ticker';
import SquiggleShape from './shapes/Squiggle'; 
import TriangleShape from './shapes/Triangle';
import RibbonShape from './shapes/Ribbon';

export default function TrialSection() {

  // --- PARALLAX LOGIC (EXISTING) ---
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

  // --- CAMERA LOGIC (NEW) ---
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isLoadingCam, setIsLoadingCam] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = async () => {
    setIsLoadingCam(true);
    setIsCameraOpen(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Gagal akses kamera:", err);
      alert("Gagal mengakses kamera. Pastikan izin kamera diberikan di browser.");
      setIsCameraOpen(false); // Balik ke menu awal jika gagal
    } finally {
      setIsLoadingCam(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraOpen(false);
  };

  // Cleanup saat component unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);


  return (
    <section className="py-32 bg-white relative overflow-hidden border-t-2 border-neutral min-h-[800px] flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" fill="#000000"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-hero)" />
         </svg>
      </div>

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <div 
            className="absolute top-40 -left-12 md:top-1/3 md:left-10 transition-transform duration-100 ease-out opacity-80"
            style={getParallax(4)}
         >
            <SquiggleShape className="hidden md:block w-24 h-24 md:w-40 md:h-40 text-bisimo-green rotate-12" />
         </div>

         <div 
            className="absolute bottom-10 left-2 md:top-3/3 md:left-50 transition-transform duration-100 ease-out opacity-80"
            style={getParallax(4)}
         >
            <SquiggleShape className="w-24 h-24 md:w-40 md:h-40 text-primary rotate-12" />
         </div>

         <div 
            className="absolute -bottom-3 -right-5 md:bottom-20 md:right-10 transition-transform duration-100 ease-out opacity-80"
            style={getParallax(-3)}
         >
            <RibbonShape className="w-24 h-24 md:w-40 md:h-40 text-bisimo-blue -rotate-12" />
         </div>

         <div 
            className="absolute -top-1 -right-1 md:top-20 md:right-10 transition-transform duration-100 ease-out "
            style={getParallax(2)}
         >
             <TriangleShape className="hidden md:block w-24 h-24 md:w-40 md:h-40 text-bisimo-pink rotate-6" />
         </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 transition-all duration-500 ease-in-out">
        
        {/* === KONDISI 1: TAMPILAN NORMAL (NON-CAMERA) === */}
        {!isCameraOpen ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <p className="text-gray-400 font-extrabold text-sm tracking-[0.2em] uppercase mb-6">
              BERGABUNGLAH SEKARANG
            </p>
            
            <div className="mb-10 relative inline-block">
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

            <h2 className="text-3xl md:text-6xl font-black text-neutral mb-12 leading-tight max-w-3xl mx-auto">
              Jangan Pendam Sendiri. <br/>
              <span className="relative inline-block mt-2">
                  <svg className="absolute -bottom-2 left-0 w-full h-4 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 10 10 20 5 T 40 5 T 60 5 T 80 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                  <span className="relative z-10">Cimo Siap Mendengar.</span>
              </span>
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              
              {/* TOMBOL START CAMERA */}
              <button 
                onClick={startCamera}
                className="btn btn-primary btn-xl h-16 rounded-2xl text-neutral font-black border-[3px] border-neutral hover:border-[2px] hover:border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-xl px-10 flex items-center gap-3"
              >
                <span>Coba Versi Web</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>

              <span className="text-gray-400 font-bold text-sm tracking-wider">ATAU UNDUH DI</span>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
                  <button className="btn h-16 w-full sm:w-auto bg-neutral hover:bg-neutral/90 border-2 border-neutral text-white rounded-2xl px-6 flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#FFBD30] hover:shadow-[2px_2px_0px_0px_#FFBD30] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                    <svg role="img" viewBox="0 0 24 24" width="28" className="fill-current text-white" xmlns="http://www.w3.org/2000/svg"><title>Google Play</title><path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z"/></svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold leading-none text-gray-300 mb-1">GET IT ON</div>
                      <div className="text-lg font-bold leading-none">Google Play</div>
                    </div>
                  </button>

                  <button className="btn h-16 w-full sm:w-auto bg-neutral hover:bg-neutral/90 border-2 border-neutral text-white rounded-2xl px-6 flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#FFBD30] hover:shadow-[2px_2px_0px_0px_#FFBD30] hover:translate-x-[1px] hover:translate-y-[1px] transition-all">
                    <svg role="img" viewBox="0 0 24 24" width="28" className="fill-current text-white" xmlns="http://www.w3.org/2000/svg"><title>Apple</title><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold leading-none text-gray-300 mb-1">Download on the</div>
                      <div className="text-lg font-bold leading-none">App Store</div>
                    </div>
                  </button>
              </div>
            </div>
          </div>
        ) : (
          /* === KONDISI 2: TAMPILAN KAMERA (TRIAL) === */
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-500 max-w-4xl mx-auto w-full">
             
             {/* Header Kamera */}
             <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-black text-neutral flex items-center gap-2">
                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                   Uji Coba Deteksi
                </h3>
                <button onClick={stopCamera} className="btn btn-sm btn-circle btn-ghost text-neutral">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
             </div>

             {/* Frame Kamera */}
             <div className="relative w-full aspect-video bg-neutral rounded-3xl border-[6px] border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                
                {isLoadingCam && (
                   <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
                      <span className="loading loading-spinner loading-lg text-primary"></span>
                   </div>
                )}

                {/* Video Element */}
                <video 
                  ref={videoRef} 
                  autoPlay 
                  playsInline 
                  muted 
                  className="w-full h-full object-cover transform scale-x-[-1]" // Mirror effect
                />

                {/* UI Overlay*/}
                <div className="absolute inset-0 pointer-events-none z-10 border-[20px] border-transparent">
                   {/*Scanner */}
                   <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-primary rounded-tl-xl opacity-80"></div>
                   <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-primary rounded-tr-xl opacity-80"></div>
                   <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-primary rounded-bl-xl opacity-80"></div>
                   <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-primary rounded-br-xl opacity-80"></div>
                   
                   {/* Teks Status */}
                   <div className="absolute bottom-8 left-0 right-0 text-center">
                      <span className="bg-neutral/80 text-primary px-4 py-2 rounded-full font-mono text-sm font-bold backdrop-blur-sm border border-neutral/50">
                         Menunggu Input Client...
                      </span>
                   </div>
                </div>
             </div>

             {/* Footer Control */}
             <div className="mt-8 flex justify-center">
                <button onClick={stopCamera} className="btn btn-error text-white font-bold rounded-xl border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
                   Akhiri Sesi Uji Coba
                </button>
             </div>

          </div>
        )}

      </div>
    </section>
  );
}