'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral border-t-2 border-neutral font-nunito">
      
      {/* BAGIAN ATAS: Links & Newsletter */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* KOLOM 1: BRANDING (4 Kolom) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-4xl font-black tracking-tighter group-hover:text-white transition-colors">
                Bisimo
              </span>
            </Link>
            <p className="font-bold text-lg leading-relaxed max-w-sm">
              Aplikasi Bahasa Isyarat Deteksi Emosional untuk Anak Tunarungu
            </p>
            
            {/* Social Icons (Button Bulat Neo-Brutalism) */}
            <div className="flex gap-4 pt-2">
              {[
                { name: 'Instagram', path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22H7.75A5.75 5.75 0 0 1 2 16.25V7.75A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25V7.75A4.25 4.25 0 0 0 16.25 3.5H7.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" },
                { name: 'LinkedIn', path: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" },
                { name: 'Twitter', path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }
              ].map((icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-white border-2 border-neutral rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                  aria-label={icon.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI (2 Kolom) */}
          <div className="md:col-span-2">
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider">Menu</h4>
            <ul className="space-y-4 font-bold">
              {['Beranda', 'Masalah', 'Fitur', 'Testimoni'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:underline decoration-2 underline-offset-4 decoration-white transition-all hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: LEGAL (2 Kolom) */}
          <div className="md:col-span-2">
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 font-bold">
              <li><Link href="#" className="hover:underline decoration-2 underline-offset-4 decoration-white hover:text-white">Privasi</Link></li>
              <li><Link href="#" className="hover:underline decoration-2 underline-offset-4 decoration-white hover:text-white">Syarat & Ketentuan</Link></li>
              <li><Link href="#" className="hover:underline decoration-2 underline-offset-4 decoration-white hover:text-white">Panduan Komunitas</Link></li>
            </ul>
          </div>

          {/* KOLOM 4: NEWSLETTER (4 Kolom) */}
          <div className="md:col-span-4">
            <div className="bg-white border-2 border-neutral p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h4 className="font-black text-xl mb-2">Kabar Terbaru Cimo 📩</h4>
              <p className="font-medium text-gray-600 mb-4 text-sm">
                Dapatkan tips kesehatan mental dan update fitur terbaru langsung di inboxmu.
              </p>
              <div className="join w-full">
                <input 
                  type="email" 
                  placeholder="email@kamu.com" 
                  className="input input-bordered join-item w-full border-2 border-neutral focus:outline-none focus:border-neutral bg-gray-50 font-bold" 
                />
                <button className="btn btn-neutral join-item border-2 border-neutral text-white font-bold hover:bg-neutral/90">
                  Langganan
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* BAGIAN BAWAH: COPYRIGHT */}
      <div className="border-t-2 border-neutral bg-neutral text-white py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold tracking-wide">
          <p>&copy; 2026 Bisimo App. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-2">
            Dibuat oleh Tim<span className="text-primary text-lg"> Clear For All </span> 
          </p>
        </div>
      </div>

    </footer>
  );
}