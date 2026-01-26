export default function ProblemSection() {
  return (
    <section id="masalah" className="py-24 bg-primary text-neutral overflow-hidden relative">
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" fill="#000000"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-block bg-neutral text-white px-4 py-1 rounded-full font-bold text-sm tracking-widest uppercase mb-4 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)]">
            Realita di Lapangan
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight font-nunito">
            Suara Hati yang <br className="hidden md:block"/>
            <span className="bg-white px-2 border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 inline-block">Sering Terabaikan.</span>
          </h2>
          
          <p className="text-lg font-bold max-w-2xl mx-auto opacity-80">
            Berdasarkan observasi di sekolah mitra, siswa Tunarungu menghadapi tantangan emosional yang nyata.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Masalah 1: Minim Ruang Aman */}
          <div className="card bg-white border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="card-body items-center text-center p-8">
             <div className="w-20 h-20 rounded-full border-2 border-neutral flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src="/cimo-sedih.svg" 
                  alt="Icon Sedih Tidak Didengar"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              
              <h3 className="card-title text-2xl font-black mb-2">Minim Ruang Aman</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Siswa kesulitan mengekspresikan emosi kompleks. Banyak yang <span className="bg-yellow-200 px-1 font-bold">tidak bersedia berbagi</span> ke orang tua atau guru karena keterbatasan komunikasi.
              </p>
            </div>
          </div>

          {/* Masalah 2: Rasio Guru Timpang */}
          <div className="card bg-white border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="card-body items-center text-center p-8">
              <div className="w-20 h-20 rounded-full border-2 border-neutral flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src="/cimo-jijik.svg" 
                  alt="Icon Guru Kewalahan"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              

              <h3 className="card-title text-2xl font-black mb-2">Guru Kewalahan</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Rasio guru dan siswa terlalu timpang. Guru <span className="bg-yellow-200 px-1 font-bold">tidak punya cukup waktu</span> untuk memantau kondisi emosional setiap siswa secara personal.
              </p>
            </div>
          </div>

            {/* Masalah 3: Emosi Terpendam */}
          <div className="card bg-white border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
            <div className="card-body items-center text-center p-8">
             <div className="w-20 h-20 rounded-full border-2 border-neutral flex items-center justify-center mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <img
                  src="/cimo-marah.svg" 
                  alt="Icon Sedih Tidak Didengar"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              
              <h3 className="card-title text-2xl font-black mb-2">Emosi Terpendam</h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Akibatnya, regulasi emosi menjadi buruk dan secara langsung <span className="text-bisimo-green font-bold underline decoration-wavy">memengaruhi pendidikan</span> serta fokus belajar mereka.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}