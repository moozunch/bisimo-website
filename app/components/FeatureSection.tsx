'use client';

import Image from 'next/image';

export default function FeaturesSection() {
  
  // Data Lengkap dari Buku Panduan
  const emotions = [
    { 
      name: 'Senang', 
      color: 'bg-[#FFDD95]', 
      textColor: 'text-[#8A6D00]',
      borderColor: 'border-[#FFB800]',
      img: '/cimo-senang.svg',
      faceSigns: "Sudut bibir naik, pipi terangkat, mata menyipit.",
      cimoSays: "Aku melihat senyumanmu! Kamu terlihat ceria."
    },
    { 
      name: 'Sedih', 
      color: 'bg-[#B6E3F4]', 
      textColor: 'text-[#004A85]',
      borderColor: 'border-[#209CFF]',
      img: '/cimo-sedih.svg',
      faceSigns: "Sudut bibir turun, mata sayu, pandangan kosong.",
      cimoSays: "Wajahmu murung. Tak apa bersedih, aku di sini."
    },
    { 
      name: 'Marah', 
      color: 'bg-[#FFB7B7]', 
      textColor: 'text-[#680000]',
      borderColor: 'border-[#FF4B4B]',
      img: '/cimo-marah.svg',
      faceSigns: "Alis menyatu tajam, mata melotot, bibir menipis.",
      cimoSays: "Aku lihat ketegangan. Ada yang bikin kesal?"
    },
    { 
      name: 'Takut', 
      color: 'bg-[#E0C3FC]', 
      textColor: 'text-[#5B109E]',
      borderColor: 'border-[#8F23E1]',
      img: '/cimo-takut.svg',
      faceSigns: "Alis terangkat lurus, mata melebar, bibir tegang.",
      cimoSays: "Kamu terlihat cemas. Tenang, kamu aman di sini."
    },
    { 
      name: 'Jijik', 
      color: 'bg-[#C1E1C1]', 
      textColor: 'text-[#004D28]',
      borderColor: 'border-[#07B765]',
      img: '/cimo-jijik.svg',
      faceSigns: "Hidung berkerut (seperti bau), bibir atas naik.",
      cimoSays: "Hidungmu berkerut. Ada sesuatu yang tidak enak?"
    },
    { 
      name: 'Terkejut', 
      color: 'bg-[#FFC4E6]', 
      textColor: 'text-[#750046]',
      borderColor: 'border-[#FF66C4]',
      img: '/cimo-kaget.svg',
      faceSigns: "Alis naik tinggi, mata terbuka lebar, rahang turun.",
      cimoSays: "Wah! Kamu kaget. Baru ada kejutan ya?"
    },
  ];

  return (
    <section id="fitur" className="py-24 bg-white relative overflow-hidden">

      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-hero" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" fill="#000000"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-hero)" />
         </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">

        {/* --- PART 1: INTRO CIMO & INTERACTIVE GRID --- */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-neutral mb-6 font-nunito">
            Kenalan dengan <span className="text-primary underline decoration-wavy decoration-4">Cimo.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Cimo mengerti perasaanmu karena dia dilatih mengenali <b>6 emosi dasar manusia</b> (Teori Paul Ekman). 
            <br/><span className="text-sm font-bold text-bisimo-blue">(Sentuh kartu di bawah untuk melihat detail!)</span>
          </p>

          {/* GRID FLIP CARDS (3 Kolom x 2 Baris) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {emotions.map((emo, index) => (
              <div key={index} className="group h-[280px] [perspective:1000px] cursor-pointer">
                {/* PERBAIKAN UTAMA:
                    1. [transform-style:preserve-3d] -> Agar efek 3D jalan
                    2. group-hover:[transform:rotateY(180deg)] -> Trigger putaran saat hover
                */}
                <div className="relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* --- SISI DEPAN (Visual) --- */}
                  <div className={`
                    absolute inset-0 [backface-visibility:hidden]
                    bg-white border-[3px] border-neutral rounded-3xl 
                    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                    flex flex-col items-center justify-center p-6
                  `}>
                    <div className={`w-32 h-32 rounded-full ${emo.color} border-2 border-neutral flex items-center justify-center mb-4`}>
                      <Image 
                        src={emo.img} alt={`Cimo ${emo.name}`} width={100} height={100} 
                        className="object-contain w-3/4 h-3/4"
                      />
                    </div>
                    <h3 className={`text-2xl font-black ${emo.textColor}`}>{emo.name}</h3>
                  </div>

                  {/* --- SISI BELAKANG (Edukasi PDF) --- */}
                  {/* Tambahkan [transform:rotateY(180deg)] agar teks tidak terbalik saat kartu diputar */}
                  <div className={`
                    absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
                    ${emo.color} border-[3px] ${emo.borderColor} rounded-3xl 
                    shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                    flex flex-col justify-center p-6 text-left
                  `}>
                    <div className="bg-white/90 p-4 rounded-xl border-2 border-neutral h-full flex flex-col justify-center shadow-sm">
                        <p className="text-xs font-black uppercase text-gray-400 mb-1">Tanda di Wajah:</p>
                        <p className="text-neutral font-bold text-sm leading-snug mb-4">
                          "{emo.faceSigns}"
                        </p>

                        <p className="text-xs font-black uppercase text-gray-400 mb-1">Kata Cimo:</p>
                        <p className={`font-bold italic text-sm ${emo.textColor}`}>
                          "{emo.cimoSays}"
                        </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 2: DETAIL FITUR (ZIGZAG LAYOUT) --- */}
        <div className="space-y-32">
          
          {/* FITUR 1: DETEKSI */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center relative px-4">
                <div className="absolute top-8 w-64 h-full bg-primary rounded-[3rem] border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10 transform -rotate-6"></div>
                <div className="relative w-full max-w-[280px] border-8 border-neutral rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-neutral overflow-hidden">
                   <div className="relative w-full h-auto bg-white rounded-[2rem] overflow-hidden">
                      <Image src="/app-camera.png" alt="Fitur Deteksi" width={320} height={640} className="w-full h-auto object-cover" />
                   </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
               <div className="max-w-lg"> 
                  <div className="inline-block bg-bisimo-pink text-neutral px-4 py-2 rounded-lg font-bold border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-2">
                    Computer Vision + AI
                  </div>
                  <h3 className="text-4xl font-black mb-6 leading-tight">Mata Cimo Melihat <br/><span className="text-bisimo-blue">Ekspresimu.</span></h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">Bisimo mendeteksi ekspresi wajah dan menerjemahkan gerakan tangan (BISINDO) menjadi data emosional secara real-time.</p>
                  <ul className="space-y-3 font-bold text-neutral inline-block text-left mt-2">
                      <li className="flex items-center gap-3">✓ Deteksi Wajah (Face Expression)</li>
                      <li className="flex items-center gap-3">✓ Deteksi BISINDO (Isyarat Tangan)</li>
                  </ul>
               </div>
            </div>
          </div>

          {/* FITUR 2: CHATBOT */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-14 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center relative px-4">
                <div className="absolute top-8 w-64 h-full bg-bisimo-blue rounded-[3rem] border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10 transform rotate-6"></div>
                <div className="relative w-full max-w-[280px] border-8 border-neutral rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-neutral overflow-hidden">
                   <div className="relative w-full h-auto bg-white rounded-[2rem] overflow-hidden">
                      <Image src="/app-chat.png" alt="Fitur Chat" width={320} height={640} className="w-full h-auto object-cover" />
                   </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
               <div className="max-w-lg">
                  <div className="inline-block bg-primary text-neutral px-4 py-2 rounded-lg font-bold border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform rotate-2">
                    Regulasi Emosi
                  </div>
                  <h3 className="text-4xl font-black mb-6 leading-tight">Ruang Aman <br/><span className="text-bisimo-pink">Bercerita.</span></h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">Cimo memberikan validasi perasaan dan saran penenangan diri, mencegah anak merasa kesepian.</p>
               </div>
            </div>
          </div>

          {/* FITUR 3: MONITORING */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center relative px-4">
                <div className="absolute top-8 w-64 h-full bg-bisimo-green rounded-[3rem] border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10 transform -rotate-3"></div>
                <div className="relative w-full max-w-[280px] border-8 border-neutral rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-neutral overflow-hidden flex items-center justify-center bg-white aspect-[9/19]">
                   <div className="relative w-full h-full bg-gray-50 flex flex-col items-center justify-center text-center p-6">
                      <div className="text-6xl mb-4">📊</div>
                      <p className="font-bold text-gray-400 text-sm">Dashboard Monitoring<br/>(Guru & Wali Kelas)</p>
                   </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
               <div className="max-w-lg"> 
                  <div className="inline-block bg-white text-neutral px-4 py-2 rounded-lg font-bold border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform rotate-1">
                    Untuk Wali Kelas
                  </div>
                  <h3 className="text-4xl font-black mb-6 leading-tight">Pantau Kondisi <br/><span className="text-bisimo-green">Mental Siswa.</span></h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">Fitur khusus bagi wali kelas untuk memantau kondisi emosional murid dan mendeteksi tendensi awal kesehatan mental sejak dini.</p>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}