'use client';

import Image from 'next/image';
import Link from 'next/link';

// Icon Panah Sederhana
const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

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
              Aplikasi Bahasa Isyarat Deteksi Emosional untuk Anak Tunarungu.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[
                { 
                  name: 'Instagram', 
                  href: 'https://www.instagram.com/bisimo.usu/',
                  path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22H7.75A5.75 5.75 0 0 1 2 16.25V7.75A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25V7.75A4.25 4.25 0 0 0 16.25 3.5H7.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" 
                },
                { 
                  name: 'Email',
                  href: 'mailto:bisimousu@gmail.com', 
                  path: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" 
                }
              ].map((icon, i) => (
                <a 
                  key={i} 
                  href={icon.href} 
                  target="_blank"
                  rel="noopener noreferrer"
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
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="group relative flex items-center transition-all duration-300 hover:text-neutral/70"
                  >
                    <span className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neutral">
                        <ArrowIcon />
                    </span>
                    <span className="transform group-hover:translate-x-6 transition-transform duration-300">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: LEGAL (2 Kolom) */}
          <div className="md:col-span-2">
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 font-bold">
              {['Privasi', 'Syarat & Ketentuan', 'Panduan Komunitas'].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="group relative flex items-center transition-all duration-300 hover:text-neutral/70"
                  >
                    {/* Panah (Absolute) */}
                    <span className="absolute left-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neutral">
                        <ArrowIcon />
                    </span>
                    {/* Teks */}
                    <span className="transform group-hover:translate-x-6 transition-transform duration-300">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
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

        {/* Sponsor Images */}
        <div className="flex justify-center pt-14">
            <div 
              className="
                relative h-14 md:h-18
                w-[300px] md:w-[600px] 
              "
            >
              <Image 
                src="/sponsor.png"
                alt="Sponsor Logo"
                fill
                className="object-contain object-center" 
              />
            </div>
        </div>

      </div>
      

      {/* BAGIAN BAWAH: COPYRIGHT */}
      <div className="border-t-2 border-neutral bg-primary text-neutral py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold tracking-wide">
          <p>&copy; 2026 Bisimo App. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-2">
              oleh Tim Clear For All
          </p>
        </div>
      </div>

    </footer>
  );
}