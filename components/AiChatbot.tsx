"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function AiChatbot() {
  const [isAiOpen, setIsAiOpen] = useState(false);
  
  // KENDİ KUSURSUZ SİSTEMİMİZ (Hazır paketleri çöpe attık)
  const [messages, setMessages] = useState<{role: string, content: string}[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // KENDİ GÖNDERME MOTORUMUZ
  const mesajGonder = async (mesajMetni: string) => {
    if (!mesajMetni || mesajMetni.trim() === "") return;

    setError("");
    setInput(""); // Kutuyu temizle
    setIsLoading(true);

    // 1. Senin mesajını ekrana ekle
    const yeniMesajlar = [...messages, { role: "user", content: mesajMetni }];
    setMessages(yeniMesajlar);

    try {
      // 2. Arka plana (API) mesajı yolla
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: yeniMesajlar }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Sistem cevap veremedi.");
      }

      // 3. Gelen cevabı ekrana ekle
      setMessages((oncekiMesajlar) => [...oncekiMesajlar, { role: "assistant", content: data.text }]);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        type="button"
        onClick={() => setIsAiOpen(!isAiOpen)} 
        className="fixed bottom-6 left-6 z-[70] bg-white border border-gray-200 text-gray-700 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
      </button>

      {isAiOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 left-6 z-[80] w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
        >
          <div className="bg-gray-50 text-gray-800 p-4 flex justify-between items-center border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-white border border-gray-200 p-2 rounded-full text-blue-600 shadow-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="font-semibold text-sm">Akıllı Asistan</h3>
                <p className="text-[11px] text-gray-500">CappaViva AI</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsAiOpen(false)} className="text-gray-400 hover:text-gray-700 cursor-pointer p-1">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="p-4 h-72 overflow-y-auto bg-white flex flex-col gap-4">
            
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg text-xs font-bold border border-red-300">
                Bağlantı Hatası: {error}
              </div>
            )}

            {messages.length === 0 && (
              <>
                <div className="bg-gray-50 p-3.5 rounded-2xl rounded-tl-none border border-gray-100 text-sm text-gray-700 w-11/12">
                  Merhaba! Kapadokya turları veya otelimiz hakkında ne öğrenmek istersiniz?
                </div>
                <div className="flex flex-col gap-2 mt-2 w-fit">
                  <button 
                    type="button" 
                    onClick={() => mesajGonder('Balon turları fiyatı nedir?')}
                    className="text-left text-xs bg-white text-gray-600 px-4 py-2 rounded-xl border border-gray-200 hover:text-blue-600 cursor-pointer"
                  >
                    Balon turları fiyatı nedir?
                  </button>
                </div>
              </>
            )}

            {messages.map((m, index) => (
              <div 
                key={index} 
                className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none ml-auto w-10/12' : 'bg-gray-50 border border-gray-100 text-gray-700 rounded-tl-none mr-auto w-11/12'
                }`}
              >
                <p className="whitespace-pre-wrap">{m.content}</p>
              </div>
            ))}
            
            {isLoading && <div className="text-xs text-gray-400 italic">Asistan cevaplıyor...</div>}
            <div ref={messagesEndRef} />
          </div>

          <form 
            onSubmit={(e) => { 
              e.preventDefault(); 
              mesajGonder(input); 
            }} 
            className="p-3 bg-white border-t border-gray-100 flex items-center gap-2"
          >
            <input 
              type="text" 
              value={input} 
              onChange={(e) => setInput(e.target.value)} 
              placeholder="Mesajınızı yazın..." 
              className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm outline-none text-black" 
            />
            <button type="submit" disabled={isLoading} className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 cursor-pointer disabled:opacity-50">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
            </button>
          </form>
        </motion.div>
      )}

      {/* WhatsApp Butonu */}
      <a href="https://wa.me/905354322782" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group cursor-pointer">
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        <svg className="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}