import Image from 'next/image';

export default function TestimonialsSection() {
  
  const testimonials = [
    {
      name: "Dinda",
      role: "Mahasiswa Psikologi",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dinda&backgroundColor=ffdfbf",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Budi",
      role: "Teman Tuli",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Budi&backgroundColor=b6e3f4",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Sarah",
      role: "Freelancer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=c0aede",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-primary text-neutral relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern id="dots-testi" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
               <circle cx="2" cy="2" r="1" fill="#000000"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots-testi)" />
         </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 font-nunito">
            Kata Mereka tentang <br/>
            <span className="bg-white px-2 border-2 border-neutral shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-1 inline-block mt-2">Bisimo</span>
          </h2>
          <p className="text-lg font-bold opacity-80">Cerita asli dari teman-teman yang sudah mencoba versi Beta.</p>
        </div>
        
        {/* GRID TESTIMONI */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <div 
              key={index} 
              className="card bg-white border-2 border-neutral shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200"
            >
              <div className="card-body p-8">
                
                {/* Profile Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="avatar">
                    <div className="w-14 rounded-full border-2 border-neutral">
                      <img src={testi.avatar} alt={testi.name} />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-black text-lg leading-none">{testi.name}</h4>
                    <span className="text-sm font-bold text-gray-500">{testi.role}</span>
                  </div>
                </div>

                {/* Rating Star (Statis 5 Bintang) */}
                <div className="rating rating-sm mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <input key={star} type="radio" name={`rating-${index}`} className="mask mask-star-2 bg-orange-400" disabled checked />
                  ))}
                </div>

                {/* Isi Testimoni */}
                <p className="text-gray-700 font-medium leading-relaxed">
                  "{testi.text}"
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}