export default function FooterCTA() {
  return (
    <footer className="bg-base-100 pt-10">
      
      {/* SECTION CTA (Call to Action) */}
      <div id="download" className="container mx-auto px-4 mb-20">
        <div className="bg-neutral rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
          {/* Hiasan background abstrak */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Siap Bertemu Cimo?
            </h2>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Download versi Beta sekarang dan jadilah yang pertama merasakan teman curhat AI yang mengerti kamu.
            </p>
            
            <button className="btn btn-primary btn-lg rounded-full text-white px-8 shadow-xl hover:scale-105 border-none">
              Download Versi Beta (Android)
            </button>
            <p className="text-xs text-gray-500 mt-4">*Kuota terbatas untuk 1000 pengguna pertama</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 Bisimo</p>
      </div>

    </footer>
  );
}