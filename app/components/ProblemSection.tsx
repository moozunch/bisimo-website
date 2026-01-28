'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const problems = [
  {
    id: 1,
    title: "Minim Ruang Aman",
    desc: "Siswa kesulitan mengekspresikan emosi kompleks. Banyak yang tidak bersedia berbagi ke orang tua atau guru karena keterbatasan komunikasi.",
    color: "bg-[#FFEDED]", 
    tabColor: "bg-[#FFC0C0]", 
    textColor: "text-bisimo-pink",
    img: "/cimo-sedih.svg",
    rotate: -1
  },
  {
    id: 2,
    title: "Guru Kewalahan",
    desc: "Rasio guru dan siswa terlalu timpang. Guru tidak punya cukup waktu untuk memantau setiap siswa secara personal.",
    color: "bg-[#E0F2FE]", 
    tabColor: "bg-[#B0DFFF]", 
    textColor: "text-bisimo-blue",
    img: "/cimo-jijik.svg",
    rotate: 1
  },
  {
    id: 3,
    title: "Emosi Terpendam",
    desc: "Akibatnya, regulasi emosi menjadi buruk dan secara langsung memengaruhi pendidikan serta fokus belajar mereka.",
    color: "bg-[#DCFCE7]", 
    tabColor: "bg-[#A7F3D0]", 
    textColor: "text-bisimo-green",
    img: "/cimo-marah.svg",
    rotate: -2
  },
];

const Card = ({ i, title, desc, color, tabColor, textColor, img, rotate, progress, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-[80vh] flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
            scale, 
            rotate: rotate,
            top: `calc(20vh + ${i * 30}px)` 
        }} 
        className={`
            relative 
            flex flex-col md:flex-row 
            w-[90vw] md:w-[750px] 
            h-auto md:h-[350px] 
            
            rounded-2xl
            border-4 border-neutral 
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            ${color} 
            origin-top
            overflow-hidden
        `}
      >
        {/* --- TAB FOLDER  --- */}
        <div className={`absolute top-0 left-8 w-32 h-8 ${tabColor} border-b-4 border-x-4 border-neutral rounded-b-lg flex items-center justify-center z-20`}>
            <span className="font-bold text-neutral/60 text-[10px] tracking-widest uppercase">
                BERKAS 0{i + 1}
            </span>
        </div>
        
        {/* KOLOM KIRI: GAMBAR */}
        <div className="w-full md:w-1/3 flex items-center justify-center pt-12 md:pt-0 md:border-r-4 md:border-neutral/10">
            <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image src={img} alt={title} fill className="object-contain drop-shadow-sm" />
            </div>
        </div>

        {/* KOLOM KANAN: TEKS */}
        <div className="w-full md:w-2/3 flex flex-col justify-center p-6 md:p-10 text-center md:text-left">
            <h2 className={`text-2xl md:text-4xl font-black mb-3 uppercase leading-tight font-nunito tracking-tight ${textColor}`}>
                {title}
            </h2>

            <div className="w-10 h-1 bg-neutral/10 rounded-full mb-4 mx-auto md:mx-0"></div>

            <p className="text-sm md:text-lg font-bold text-neutral/80 leading-relaxed">
                {desc}
            </p>
        </div>

      </motion.div>
    </div>
  )
}

export default function StoryProblem() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} id="masalah" className="relative bg-primary text-neutral pb-40">
      
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 z-0">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
             <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="2" fill="#000000"/>
             </pattern>
             <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
      </div>

      {/* INTRO TEXT */}
      <div className="h-[40vh] flex items-center justify-center sticky top-0 z-0 px-4">
         <div className="text-center max-w-3xl mx-auto mt-8">
            <div className="inline-block bg-neutral text-white px-3 py-1 rounded-full font-bold text-xs tracking-widest uppercase mb-4 shadow-md">
               Realita di Lapangan
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black mb-2 leading-tight">
              Membuka Berkas <br className="hidden md:block"/>
              <span className="bg-white px-2 border-2 border-neutral rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block">Masalah Siswa.</span>
            </h2>
         </div>
      </div>

      {/* STACKING CARDS */}
      <div className="relative z-10 w-full mt-10">
        {problems.map((project, i) => {
          const targetScale = 1 - ((problems.length - i) * 0.05);
          return (
            <Card 
              key={i} 
              i={i} 
              {...project} 
              progress={scrollYProgress} 
              range={[i * 0.25, 1]} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
      
    </section>
  );
}