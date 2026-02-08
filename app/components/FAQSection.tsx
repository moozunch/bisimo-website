'use client';

import { useState } from 'react';

export default function FAQSection() {
  
  // Data FAQ diambil dari Buku Panduan
  const faqs = [
    {
      question: "Kenapa wajah saya tidak terdeteksi?",
      answer: "Pastikan cahaya di ruangan cukup terang agar wajah terlihat jelas. Jangan lupa cek juga apakah izin akses kamera sudah diaktifkan di pengaturan HP kamu."
    },
    {
      question: "Kenapa aplikasi salah deteksi emosi?",
      answer: "Deteksi emosional sangat bergantung pada kejelasan mimik wajah anak. Pastikan ekspresi wajah terlihat natural dan tidak tertutup aksesoris berlebih."
    },
    {
      question: "Kenapa proses deteksi emosionalnya lama?",
      answer: "Proses ini membutuhkan koneksi internet untuk analisis AI. Silakan periksa kembali koneksi internet atau WiFi kamu ya."
    },
    {
      question: "Kenapa kamera saya tidak terbuka?",
      answer: "Kemungkinan besar izin kamera belum diberikan. Buka menu 'Pengaturan' di HP, cari aplikasi Bisimo, dan pastikan izin kamera sudah 'Diizinkan'."
    },
    {
      question: "Kepada siapa saya harus melapor jika ada masalah?",
      answer: "Kamu bisa memberi masukan atau lapor masalah melalui email ke bisimousu@gmail.com atau DM Instagram kami di @bisimo.usu."
    }
  ];

  // State untuk Accordion
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white text-neutral relative overflow-hidden">
      
      {/* Background Pattern (Dots Halus untuk BG Putih) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-faq" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="2" fill="#000000"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-faq)" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          {/* Badge Kontras: Gelap di atas Putih */}
          <div className="inline-block bg-neutral text-white px-4 py-1 rounded-full font-bold text-sm mb-4 border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            🤔 Masih Bingung?
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-nunito">
            Pertanyaan yang <br/> Sering Ditanyakan
          </h2>
          <p className="text-lg text-gray-600 font-bold opacity-80 max-w-3xl mx-auto">
            Kami kumpulkan beberapa pertanyaan umum biar kamu gak perlu pusing cari jawabannya.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`
                bg-white border-2 border-neutral rounded-2xl overflow-hidden transition-all duration-300
                ${openIndex === index ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-y-1' : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px]'}
              `}
            >
              {/* Question (Clickable) */}
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="font-black text-lg md:text-xl pr-4 text-neutral">{faq.question}</span>
                <span className={`transform transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                  {/* Icon Chevron */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-neutral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              {/* Answer (Collapsible) */}
              <div 
                className={`
                  overflow-hidden transition-all duration-300 ease-in-out
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="p-6 pt-0 text-gray-600 font-medium text-lg leading-relaxed border-t-2 border-neutral/10 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}