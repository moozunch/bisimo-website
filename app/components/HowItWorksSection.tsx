'use client';

export default function HowItWorksSection() {
  
  // Data Langkah-langkah (Diambil dari Buku Panduan Poin 3)
  const steps = [
    {
      step: "01",
      title: "Daftar Akun",
      desc: "Wali kelas mendaftarkan akun menggunakan email sekolah untuk membuka akses fitur pemantauan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
        </svg>
      )
    },
    {
      step: "02",
      title: "Mulai Deteksi",
      desc: "Arahkan kamera ke wajah. AI akan membaca ekspresi mikro dan bahasa isyarat (BISINDO) secara real-time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12V7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h-5"/><path d="M7 13a4 4 0 1 0 8 0 4 4 0 0 0-8 0"/><line x1="12" y1="7" x2="12" y2="7.01"/><line x1="12" y1="19" x2="12" y2="19.01"/>
        </svg>
      )
    },
    {
      step: "03",
      title: "Curhat ke Cimo",
      desc: "Setelah emosi terdeteksi, Cimo akan muncul untuk menemani, mendengar, dan memberi saran penenangan.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 10h.01"/><path d="M12 10h.01"/><path d="M16 10h.01"/>
        </svg>
      )
    }
  ];

  // Komponen Icon Centang Kecil untuk List Tips
  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <section id="cara-kerja" className="py-24 bg-primary text-neutral relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-works" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="1" fill="#000000"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-works)" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-nunito">
            Gimana Cara <br/>
            <span className="bg-white px-2 border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl transform -rotate-1 inline-block mt-2">Pakainya?</span>
          </h2>
          <p className="text-lg font-bold opacity-80">3 Langkah mudah untuk mulai bercerita dengan Cimo.</p>
        </div>
        
        {/* GRID STEPS */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="card bg-white border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full"
            >
              <div className="card-body p-8 flex flex-col items-center text-center">
                
                {/* Step Number Badge */}
                <div className="w-12 h-12 bg-secondary text-white font-black text-xl flex items-center justify-center rounded-full border-2 border-neutral shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6 absolute -top-6">
                    {item.step}
                </div>

                {/* Icon Header */}
                <div className="w-20 h-20 bg-gray-50 rounded-2xl border-2 border-neutral flex items-center justify-center mb-6 mt-2 text-neutral">
                  {item.icon}
                </div>

                {/* Title */}
                <h4 className="font-black text-2xl mb-3 font-nunito">{item.title}</h4>

                {/* Description */}
                <p className="text-gray-700 font-medium leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* --- TIPS BOX (Updated: No Emoji, Full SVG) --- */}
        <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white border-2 border-neutral border-dashed rounded-2xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-neutral text-white px-4 py-1 rounded-full font-bold text-sm flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 16v.01"/><path d="M12 12v.01"/><path d="M12 17v.01"/><path d="M12 7v.01"/></svg>
                    Tips Deteksi Terbaik
                </div>
                <ul className="text-left font-bold text-gray-600 space-y-3 text-sm md:text-base mt-2">
                    <li className="flex items-start gap-3">
                        <CheckIcon />
                        <span>Pastikan ruangan cukup cahaya agar wajah terlihat jelas.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckIcon />
                        <span>Gerakan tangan isyarat sebaiknya agak berjarak dari wajah.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckIcon />
                        <span>Gunakan bahasa sopan saat chat dengan Cimo.</span>
                    </li>
                </ul>
            </div>
        </div>

      </div>
    </section>
  );
}