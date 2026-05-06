import React, { useState, useRef, useEffect } from 'react';
import { Send, Database, BrainCircuit, User, Bot, FileText, TrendingUp, AlertCircle } from 'lucide-react';

export default function App() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Halo! Saya Asisten Kognitif PMB. Saya terhubung dengan Data Pendaftar 2024, Anggaran Keuangan, dan Dokumen Kebijakan Rektor. Apa yang ingin Anda analisis hari ini?",
      type: 'text'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), sender: 'user', text: input, type: 'text' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponse = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Berdasarkan analisis pada Knowledge Graph lintas domain (Akademik, Keuangan, dan Kebijakan), berikut adalah hasil penalaran sistem:",
        type: 'analysis',
        data: {
            insight: "Skenario realokasi anggaran promosi dari media cetak ke iklan digital terarah (Digital Ads) diprediksi akan meningkatkan jumlah pendaftar spesifik untuk Program Studi Teknologi Informasi sebesar 120 orang pada gelombang berikutnya.",
            financial: {
                cpsa_current: "Rp 1.520.000",
                cpsa_projected: "Rp 1.350.000",
                efficiency: "+11.18% (Lebih Efisien)"
            },
            reasoning: [
                "Data Historis: Konversi klik-ke-daftar dari jalur iklan digital mencapai angka 4.5%, jauh lebih tinggi dari rata-rata saluran lain.",
                "Kebijakan Institusi: SK Rektor No. 45/2024 mengizinkan fleksibilitas realokasi dana taktis untuk optimalisasi pendaftaran.",
                "Kapasitas Akademik: Kuota Program Studi Teknologi Informasi saat ini masih tersedia 200 kursi (belum terpenuhi)."
            ]
        }
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 2500); 
  };

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      <div className="w-80 bg-slate-900 text-white p-6 hidden md:flex flex-col shadow-2xl z-10">
        <div className="flex items-center gap-3 mb-10 text-blue-400">
          <BrainCircuit size={32} />
          <h1 className="text-xl font-bold tracking-tight">Cognitive PMB</h1>
        </div>
        
        <div className="space-y-6">
          <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
            <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 flex items-center gap-2 tracking-wider">
              <Database size={14} className="text-emerald-400"/> Status Knowledge Graph
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                  <span className="text-slate-300">Nodes (Entitas):</span> 
                  <span className="font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">12,450</span>
              </div>
              <div className="flex justify-between items-center">
                  <span className="text-slate-300">Relations (Edges):</span> 
                  <span className="font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">45,200</span>
              </div>
              <div className="flex justify-between items-center">
                  <span className="text-slate-300">Dokumen NLP:</span> 
                  <span className="font-mono text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">158 PDFs</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 shadow-inner">
             <h3 className="text-xs font-bold uppercase text-slate-400 mb-3 flex items-center gap-2 tracking-wider">
              <TrendingUp size={14} className="text-blue-400"/> Indikator Ekonomi PMB
            </h3>
            <div className="space-y-4">
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                    <p className="text-slate-400 text-xs mb-1">CPSA Saat Ini</p>
                    <p className="font-mono text-xl font-bold text-white">Rp 1.520.000</p>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50">
                    <p className="text-slate-400 text-xs mb-1">Total Pendaftar</p>
                    <p className="font-mono text-xl font-bold text-white">3.420 <span className="text-xs text-slate-500 font-sans font-normal">Kandidat</span></p>
                </div>
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-6 border-t border-slate-800">
            <div className="text-xs text-slate-500 text-center space-y-1">
                <p className="font-semibold text-slate-400">Artefak Instansiasi DSR v1.0</p>
                <p>Arsitektur: Low-Compute Neuro-Symbolic</p>
            </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full bg-white relative">
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm z-10">
            <div>
                <h2 className="text-lg font-bold text-slate-800">Decision Support Assistant</h2>
                <p className="text-xs text-slate-500 mt-0.5">Mendukung keputusan strategis berbasis ontologi & penalaran dokumen kebijakan</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                Sistem Siap
            </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scroll-smooth">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''} max-w-4xl mx-auto w-full`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-md ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'}`}>
                {msg.sender === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              
              <div className={`max-w-[85%] space-y-2`}>
                <div className={`px-5 py-3.5 rounded-2xl shadow-sm text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-slate-200 text-slate-700 rounded-tl-none'}`}>
                  {msg.text}
                </div>

                {msg.type === 'analysis' && msg.data && (
                  <div className="bg-white border border-emerald-200 rounded-xl shadow-lg overflow-hidden mt-3 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="bg-emerald-50/80 px-5 py-3 border-b border-emerald-100 flex items-center gap-2">
                        <BrainCircuit size={18} className="text-emerald-700"/>
                        <span className="text-xs font-extrabold text-emerald-800 tracking-wide">LAPISAN PENALARAN KEPUTUSAN (COGNITIVE LAYER)</span>
                    </div>
                    
                    <div className="p-5 space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 shadow-sm">
                                <p className="text-xs font-semibold text-slate-500 mb-1 uppercase tracking-wider">Proyeksi Ekonomi (CPSA)</p>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <p className="text-2xl font-black text-emerald-600 tracking-tight">{msg.data.financial.cpsa_projected}</p>
                                </div>
                                <div className="flex items-center gap-1.5 mt-2 text-xs font-bold text-emerald-700 bg-emerald-100/50 w-fit px-2 py-1 rounded">
                                    <TrendingUp size={14}/> {msg.data.financial.efficiency}
                                </div>
                            </div>
                            
                            <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100 shadow-sm">
                                <p className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">Insight Strategis</p>
                                <p className="text-sm font-medium text-slate-700 leading-relaxed">{msg.data.insight}</p>
                            </div>
                        </div>
                        
                        <div className="pt-2">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <FileText size={14}/> Dasar Penarikan Kesimpulan (Trace)
                            </p>
                            <ul className="space-y-2.5">
                                {msg.data.reasoning.map((item, idx) => (
                                    <li key={idx} className="flex gap-3 text-sm text-slate-600 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                                        <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
                                            {idx + 1}
                                        </div>
                                        <span className="leading-snug">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
             <div className="flex gap-4 max-w-4xl mx-auto w-full animate-in fade-in duration-300">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md">
                    <Bot size={20} />
                </div>
                <div className="bg-white border border-slate-200 px-5 py-4 rounded-2xl rounded-tl-none flex items-center gap-3 shadow-sm">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-75"></div>
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                    <span className="text-xs font-medium text-slate-500">Mengekstraksi relasi lintas domain...</span>
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="max-w-4xl mx-auto">
                <div className="relative flex items-center">
                    <input 
                        type="text" 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ketikkan pertanyaan strategis... (Contoh: Bagaimana dampak realokasi anggaran promosi terhadap CPSA?)"
                        className="w-full pl-5 pr-14 py-4 bg-slate-50 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm shadow-inner transition-all"
                    />
                    <button 
                        onClick={handleSend}
                        disabled={!input.trim() || isTyping}
                        className="absolute right-2 p-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-xl transition-colors shadow-md"
                    >
                        <Send size={18} />
                    </button>
                </div>
                <div className="mt-3 flex justify-between items-center text-xs text-slate-400 px-2">
                    <span className="flex items-center gap-1.5"><AlertCircle size={12} className="text-amber-500"/> Model: Llama-3 (Low Compute Mode)</span>
                    <span className="flex items-center gap-1.5"><Database size={12} className="text-emerald-500"/> Graph DB: Neo4j (Active)</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}