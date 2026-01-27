import Image from 'next/image';

export default function FeaturesSection() {
  
  // Data 6 Emosi Dasar
  const emotions = [
    { name: 'Senang', color: 'bg-[#FFDD95]', text: 'text-[#8A6D00]', img: '/cimo-senang.svg' },
    { name: 'Sedih',  color: 'bg-[#209CFF]', text: 'text-[#004A85]', img: '/cimo-sedih.svg' },
    { name: 'Marah',  color: 'bg-[#FF4B4B]', text: 'text-[#680000]', img: '/cimo-marah.svg' },
    { name: 'Takut',  color: 'bg-[#8F23E1]', text: 'text-[#5B109E]',      img: '/cimo-takut.svg' },
    { name: 'Jijik',  color: 'bg-[#07B765]', text: 'text-[#004D28]', img: '/cimo-jijik.svg' },
    { name: 'Terkejut', color: 'bg-[#FF66C4]', text: 'text-[#750046]', img: '/cimo-kaget.svg' },
  ];

  return (
    <section id="fitur" className="py-24 bg-white relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">

        {/* --- PART 1: INTRO CIMO --- */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-black text-neutral mb-6 font-nunito">
            Kenalan dengan <span className="text-primary underline decoration-wavy decoration-4">Cimo.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Cimo bukan sekadar robot. Dia mengerti apa yang kamu rasakan karena dia juga memiliki <span className="font-bold text-neutral">6 emosi dasar</span> sama sepertimu.
          </p>

          {/* GRID 6 EMOSI */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
            {emotions.map((emo, index) => (
              <div key={index} className="group flex flex-col items-center">
                <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${emo.color} border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                  <Image 
                    src={emo.img} alt={`Cimo ${emo.name}`} width={100} height={100} 
                    className="object-contain w-3/4 h-3/4 drop-shadow-sm"
                  />
                </div>
                <span className={`font-bold text-lg px-4 py-1 rounded-full border-2 border-neutral shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] bg-white ${emo.text}`}>
                  {emo.name}
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* --- PART 2: APP SHOWCASE --- */}
        <div className="space-y-32">
          
          {/* ================= FITUR 1 (Camera) ================= */}
          {/* Layout: Gambar Kiri, Teks Kanan */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-6xl mx-auto">
            <div className="w-full md:w-1/2 flex justify-center relative px-4">
                <div className="absolute top-8 w-64 h-full bg-primary rounded-[3rem] border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10 transform -rotate-6"></div>

                <div className="relative w-full max-w-[280px] border-8 border-neutral rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-neutral overflow-hidden">
                   <div className="relative w-full h-auto bg-white rounded-[2rem] overflow-hidden">
                      <Image src="/app-camera.png" alt="Fitur Deteksi Wajah" width={320} height={640} className="w-full h-auto object-cover" />
                   </div>
                </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
               <div className="max-w-lg"> 
                  <div className="inline-block bg-bisimo-pink text-neutral px-4 py-2 rounded-lg font-bold border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform -rotate-2">
                    Computer Vision + AI
                  </div>
                  <h3 className="text-4xl font-black mb-6 leading-tight">
                    Mata Cimo Melihat <br/>
                    <span className="text-bisimo-blue">Ekspresimu.</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Menggunakan teknologi deteksi ekspresi wajah dan gerak tangan (BISINDO), Cimo dapat mengenali apakah kamu sedang sedih, marah, atau senang secara <b>real-time</b>.
                  </p>
                  <ul className="space-y-3 font-bold text-neutral inline-block text-left mt-2">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400 border border-neutral flex items-center justify-center text-xs flex-shrink-0">✓</div>
                        Akurasi Tinggi Multimodal
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400 border border-neutral flex items-center justify-center text-xs flex-shrink-0">✓</div>
                        Mendukung Bahasa Isyarat
                      </li>
                  </ul>
               </div>
            </div>
          </div>


          {/* ================= FITUR 2 (Chat) ================= */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 md:gap-14 max-w-6xl mx-auto">
            
            {/* BAGIAN KANAN: PHONE */}
            <div className="w-full md:w-1/2 flex justify-center relative px-4">
                <div className="absolute top-8 w-64 h-full bg-bisimo-blue rounded-[3rem] border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -z-10 transform rotate-6"></div>
                <div className="relative w-full max-w-[280px] border-8 border-neutral rounded-[2.5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-neutral overflow-hidden">
                   <div className="relative w-full h-auto bg-white rounded-[2rem] overflow-hidden">
                      <Image src="/app-chat.png" alt="Fitur Chat Cimo" width={320} height={640} className="w-full h-auto object-cover" />
                   </div>
                </div>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4">
               <div className="max-w-lg">
                  <div className="inline-block bg-primary text-neutral px-4 py-2 rounded-lg font-bold border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-6 transform rotate-2">
                    LLM Integration
                  </div>
                  <h3 className="text-4xl font-black mb-6 leading-tight">
                    Ruang Aman <br/>
                    <span className="text-bisimo-pink">Bercerita.</span>
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Cimo bukan sekadar menjawab, tapi <b>memahami konteks</b>. Dengan integrasi LLM, Cimo memberikan respons yang validatif dan menenangkan, layaknya sahabat sejati.
                  </p>
                  <ul className="space-y-3 font-bold text-neutral inline-block text-left mt-2">
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400 border border-neutral flex items-center justify-center text-xs flex-shrink-0">✓</div>
                        Respon Empatik & Validatif
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-green-400 border border-neutral flex items-center justify-center text-xs flex-shrink-0">✓</div>
                        Privasi Terjamin 100%
                      </li>
                  </ul>
               </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}