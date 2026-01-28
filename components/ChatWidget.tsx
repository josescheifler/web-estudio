"use client";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // Nuevo estado para el hover
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Mensaje sorpresa a los 4 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrompt(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'bot', text: data.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "¡Ups! Se me desconectó una neurona. ¿Me escribís al WhatsApp mejor?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPrompt(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* 1. VENTANA DEL CHAT (Se muestra cuando IAn está activo) */}
      {isOpen && (
        <div className="mb-4 w-80 h-[480px] bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200 origin-bottom-right">
          
          {/* Cabecera IAn */}
          <div className="bg-brand-blue p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center border border-blue-400">
                    <span className="text-2xl">🤖</span>
                </div>
                <div>
                    <h3 className="text-white font-bold text-sm">IAn</h3>
                    <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        <span className="text-xs text-blue-200">IA Activa</span>
                    </div>
                </div>
            </div>
            <button onClick={toggleChat} className="text-white/60 hover:text-white transition-colors">
              ✕
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
             {messages.length === 0 && (
                <div className="text-center mt-6 opacity-0 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-forwards">
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    ¡Hola! Soy el cerebro digital de <br/><strong>Estudio Scheifler</strong>. 🧠⚡
                  </p>
                  <div className="text-xs text-gray-500 bg-blue-50 p-3 rounded-xl inline-block text-left mx-4 border border-blue-100 shadow-sm">
                    Preguntame por: <br/>
                    🚀 Importación / Exportación <br/>
                    📉 Costos <br/>
                    🏛️ Sector Público <br/>
                  </div>
                </div>
             )}
             
             {messages.map((m, i) => (
               <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                 <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                   m.role === 'user' 
                     ? 'bg-brand-blue text-white rounded-br-none' 
                     : 'bg-white border border-gray-100 text-gray-700 rounded-bl-none'
                 }`}>
                   {m.role === 'user' ? (
                     m.text
                   ) : (
                     <ReactMarkdown 
                       components={{
                         strong: ({node, ...props}) => <span className="font-bold text-brand-gold" {...props} />,
                         a: ({node, ...props}) => (
                            <a className="text-blue-600 font-bold hover:underline bg-blue-50 px-1 rounded" target="_blank" rel="noopener noreferrer" {...props} />
                         ),
                         ul: ({node, ...props}) => <ul className="list-disc ml-4 mb-2" {...props} />,
                         li: ({node, ...props}) => <li className="mb-1" {...props} />,
                         p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
                       }}
                     >
                       {m.text}
                     </ReactMarkdown>
                   )}
                 </div>
               </div>
             ))}
             {isLoading && (
               <div className="flex justify-start animate-pulse">
                 <div className="bg-gray-200 px-3 py-1 rounded-full text-xs text-gray-500 italic">IAn está pensando...</div>
               </div>
             )}
             <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Preguntale a IAn..."
              className="flex-1 text-sm bg-gray-50 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-brand-blue"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-brand-gold text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-600 disabled:opacity-50"
            >
              ➤
            </button>
          </form>
        </div>
      )}

      {/* 2. MENÚ DESPLEGABLE (HOVER) */}
      <div 
        className="flex flex-col items-center gap-3 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        
        {/* CARTELITO FLOTANTE (Solo si está cerrado y no hay hover) */}
        {showPrompt && !isOpen && !isHovered && (
            <div className="absolute bottom-20 right-0 mb-2 w-48 bg-white p-3 rounded-lg shadow-xl animate-bounce cursor-pointer" onClick={() => setIsHovered(true)}>
                <p className="text-xs text-gray-600 font-bold text-center">
                    👋 ¿Necesitás ayuda? <br/> ¡Pasá el mouse por acá!
                </p>
                {/* Triangulito */}
                <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
            </div>
        )}

        {/* BOTÓN IAN (Se despliega) */}
        <button
            onClick={toggleChat}
            className={`flex items-center gap-3 px-4 py-2 bg-brand-blue text-white rounded-full shadow-lg transition-all duration-300 transform origin-bottom
            ${isHovered && !isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none absolute bottom-0'}`}
        >
            <span className="font-bold text-sm whitespace-nowrap">Hablar con IAn</span>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">🤖</div>
        </button>

        {/* BOTÓN WHATSAPP (Se despliega) */}
        <a
            href="https://wa.me/5493454948738?text=Hola,%20quisiera%20realizar%20una%20consulta."
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center gap-3 px-4 py-2 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 delay-75 transform origin-bottom
            ${isHovered && !isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-50 pointer-events-none absolute bottom-0'}`}
        >
            <span className="font-bold text-sm whitespace-nowrap">WhatsApp</span>
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                 <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>
        </a>

        {/* 3. BOTÓN MAESTRO (EL QUE DISPARA TODO) */}
        <button 
          className={`group relative flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 z-50
          ${isOpen ? 'bg-gray-200 text-gray-600 rotate-90' : 'bg-brand-blue text-white hover:bg-blue-900'}`}
          onClick={toggleChat} // Si haces clic sin hover, abre el chat por defecto
        >
          {!isOpen && !isHovered && (
             <span className="absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-20 animate-ping"></span>
          )}
          
          {isOpen ? (
             <span className="text-2xl font-bold">✕</span>
          ) : (
             <svg className={`w-8 h-8 transition-transform duration-300 ${isHovered ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Icono de "+" o "Ayuda" */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
             </svg>
          )}
        </button>

      </div>

    </div>
  );
}