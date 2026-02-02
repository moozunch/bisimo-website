'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// --- TYPE DEFINITIONS ---
type Message = {
  role: 'user' | 'bot';
  content: string;
  emotion?: string;
  confidence?: number;
  method?: string;
};

// --- 1. MAPPING GAMBAR ---
const EmotionImages: Record<string, string> = {
  happiness: '/cimo-senang.svg',
  joy: '/cimo-senang.svg',
  love: '/cimo-senang.svg',
  sadness: '/cimo-sedih.svg',
  sad: '/cimo-sedih.svg',
  anger: '/cimo-marah.svg',
  angry: '/cimo-marah.svg',
  fear: '/cimo-takut.svg',
  anxiety: '/cimo-takut.svg',
  disgust: '/cimo-jijik.svg',
  surprise: '/cimo-kaget.svg',
  neutral: '/cimo-mascot.svg', 
  default: '/cimo-mascot.svg'
};

// --- 2. MAPPING TEKS INDONESIA (BARU) ---
const EmotionLabels: Record<string, string> = {
  happiness: 'Senang',
  joy: 'Senang',
  love: 'Berbunga-bunga',
  sadness: 'Sedih',
  sad: 'Sedih',
  anger: 'Marah',
  angry: 'Marah',
  fear: 'Takut',
  anxiety: 'Cemas',
  disgust: 'Jijik',
  surprise: 'Terkejut',
  neutral: 'Netral',
  default: 'Netral'
};

// --- ICONS (SVG) ---
const Icons = {
  Close: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>,
  Reset: () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/></svg>,
  Send: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Halo! Aku Cimo. Ada yang ingin kamu ceritakan atau tanyakan tentang emosi?', emotion: 'happiness' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isIndobertActive, setIsIndobertActive] = useState(false); 
  const [sessionId, setSessionId] = useState('');

  const scrollRef = useRef<HTMLDivElement>(null);

  // --- LOGIC: EMOSI TERAKHIR ---
  const currentEmotion = useMemo(() => {
    const lastBotMsg = messages.slice().reverse().find(m => m.role === 'bot');
    return lastBotMsg?.emotion || 'neutral';
  }, [messages]);

  const currentImageSrc = EmotionImages[currentEmotion] || EmotionImages['default'];
  
  // Ambil label bahasa Indonesia, kalau tidak ada pakai teks asli
  const currentLabelID = EmotionLabels[currentEmotion] || currentEmotion;

  useEffect(() => {
    setSessionId('sess_' + Math.random().toString(36).substr(2, 9));
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: textToSend }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            message: textToSend,
            session_id: sessionId 
        }),
      });

      const data = await res.json();
      
      setMessages(prev => [...prev, { 
        role: 'bot', 
        content: data.message,
        emotion: data.emotion,
        confidence: data.confidence,
        method: data.detection_method
      }]);

      setIsIndobertActive(data.indobert_active);

    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', content: "Maaf, Cimo lagi pusing (Gagal koneksi server) 😵‍💫", emotion: 'sadness' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = async () => {
    setMessages([{ role: 'bot', content: 'Obrolan di-reset. Mau cerita apa lagi? 😊', emotion: 'happiness' }]);
    try {
        await fetch('/api/reset', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ session_id: sessionId })
        });
    } catch (e) { console.error("Reset failed"); }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-nunito">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[360px] h-[500px] bg-white border-[3px] border-neutral rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
          >
            {/* --- HEADER --- */}
            <div className="bg-[#FFBD30] px-4 py-3 border-b-[3px] border-neutral flex justify-between items-center relative z-20 shadow-sm transition-colors duration-500">
              <div className="flex items-center gap-3">
                
                {/* DYNAMIC AVATAR */}
                <div className="w-12 h-12 bg-white rounded-full border-2 border-neutral overflow-hidden relative shadow-sm">
                   <AnimatePresence mode='wait'>
                     <motion.div
                        key={currentEmotion}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full h-full"
                     >
                        <Image 
                            src={currentImageSrc} 
                            alt={`Cimo ${currentEmotion}`} 
                            fill 
                            className="object-contain p-1" 
                        />
                     </motion.div>
                   </AnimatePresence>
                </div>

                <div>
                    <h3 className="font-black text-neutral text-lg leading-none">Cimo</h3>
                    <div className="flex items-center gap-1.5 mt-1">
                        <span className={`w-2 h-2 rounded-full ${isIndobertActive ? 'bg-green-600 animate-pulse' : 'bg-neutral/30'}`}></span>
                        {/* TEKS HEADER INDONESIA */}
                        <span className="text-[10px] font-bold text-neutral/70 uppercase tracking-wide">
                            {currentEmotion === 'neutral' ? 'Mendengarkan...' : `Merasa: ${currentLabelID}`}
                        </span>
                    </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                  <button onClick={handleReset} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/50 border-2 border-transparent hover:border-neutral hover:bg-white transition-all text-neutral" title="Reset Chat">
                    <Icons.Reset />
                  </button>
                  <button onClick={() => setIsOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-white border-2 border-neutral hover:bg-neutral hover:text-white transition-all text-neutral">
                    <Icons.Close />
                  </button>
              </div>
            </div>

            {/* --- MESSAGES AREA --- */}
            <div 
                ref={scrollRef} 
                className="flex-1 p-4 overflow-y-auto bg-white scroll-smooth overscroll-contain"
                style={{ scrollbarWidth: 'thin' }} 
            >
              <div className="space-y-6">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    
                    <div className={`
                        relative px-5 py-3 text-sm font-bold leading-relaxed shadow-sm max-w-[85%] break-words whitespace-pre-wrap
                        ${msg.role === 'user' 
                            ? 'bg-[#8CD4F5] text-neutral rounded-2xl rounded-br-none' 
                            : 'bg-[#FFB7B7] text-neutral rounded-2xl rounded-bl-none' 
                        }
                    `}>
                        {msg.content}
                    </div>
                    </div>
                ))}
                
                {isLoading && (
                    <div className="flex items-start">
                        <div className="bg-[#FFB7B7] px-4 py-3 rounded-2xl rounded-bl-none border-neutral/10">
                            <div className="flex gap-1">
                                <span className="w-2 h-2 bg-neutral/40 rounded-full animate-bounce"></span>
                                <span className="w-2 h-2 bg-neutral/40 rounded-full animate-bounce delay-75"></span>
                                <span className="w-2 h-2 bg-neutral/40 rounded-full animate-bounce delay-150"></span>
                            </div>
                        </div>
                    </div>
                )}
              </div>
            </div>

            {/* --- QUICK CHIPS --- */}
            <div className="px-4 py-2 bg-white border-t-2 border-neutral/10">
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide no-scrollbar touch-pan-x">
                    {[
                        { icon: '😢', text: 'Lagi sedih' },
                        { icon: '😤', text: 'Lagi kesel' },
                        { icon: '😊', text: 'Seneng banget' },
                        { icon: '💪', text: 'Minta tips' }
                    ].map((chip, i) => (
                        <button 
                            key={i}
                            onClick={() => handleSend(chip.text)}
                            className="btn btn-xs h-8 bg-white border-2 border-neutral text-neutral hover:bg-[#FFBD30] rounded-full flex-shrink-0 font-bold px-4 transition-colors whitespace-nowrap"
                        >
                            <span className="mr-1">{chip.icon}</span> {chip.text}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- INPUT AREA --- */}
            <div className="p-4 bg-white border-t-2 border-neutral/10">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2 items-center"
              >
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Cerita dong..." 
                  className="flex-1 py-3 px-5 border-2 border-neutral rounded-full focus:outline-none focus:border-primary font-bold bg-gray-50 placeholder:text-gray-400 text-sm"
                  disabled={isLoading}
                />
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-11 h-11 flex items-center justify-center bg-[#667eea] text-white border-2 border-neutral rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <Icons.Send />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- LAUNCHER BUTTON --- */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group w-16 h-16 bg-[#FFBD30] rounded-full border-[3px] border-neutral shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[3px] hover:translate-x-[3px] transition-all flex items-center justify-center overflow-hidden z-50"
      >
         {isOpen ? (
           <span className="text-neutral animate-in zoom-in duration-300">
             <Icons.Close />
           </span>
         ) : (
           <div className="relative w-9 h-9 transition-transform group-hover:scale-110 group-hover:rotate-12">
             <Image src={currentImageSrc} alt="Chat" fill className="object-contain" />
           </div>
         )}
      </button>
    </div>
  );
}