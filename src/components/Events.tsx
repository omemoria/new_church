import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Mic2, 
  Video, 
  Music,
  MoreVertical,
  Plus,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { name: 'Cultos', color: 'bg-primary' },
  { name: 'Ensaios', color: 'bg-blue-400' },
  { name: 'Reuniões', color: 'bg-amber-500' },
  { name: 'Eventos Especiais', color: 'bg-red-600' },
];

const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

export function Events() {
  const [view, setView] = useState<'calendar' | 'details'>('calendar');

  if (view === 'details') {
    return (
      <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setView('calendar')}
          className="flex items-center gap-2 text-primary font-bold hover:underline"
        >
          <ChevronLeft size={20} />
          Voltar ao Calendário
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <header>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-bold uppercase rounded-full tracking-widest">
                  Evento Especial
                </span>
                <span className="text-on-surface-variant text-sm font-medium">ID: #EV-2024-082</span>
              </div>
              <h1 className="text-4xl font-extrabold text-primary tracking-tight mb-4">
                Conferência de Adoração 2024
              </h1>
              <div className="flex flex-wrap gap-6 text-on-surface-variant font-medium">
                <div className="flex items-center gap-2">
                  <CalendarIcon size={18} className="text-primary" />
                  22 de Junho, 2024
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  19:00 - 22:00
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  Templo Central
                </div>
              </div>
            </header>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-primary mb-6">Check-in em Tempo Real</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-primary">482</p>
                  <p className="text-xs text-on-surface-variant font-bold uppercase mt-1">Confirmados</p>
                </div>
                <div className="text-center border-x border-slate-100">
                  <p className="text-4xl font-extrabold text-emerald-600">312</p>
                  <p className="text-xs text-on-surface-variant font-bold uppercase mt-1">Presentes</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-extrabold text-slate-300">170</p>
                  <p className="text-xs text-on-surface-variant font-bold uppercase mt-1">Aguardando</p>
                </div>
              </div>
              <div className="mt-8 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[65%] transition-all duration-1000"></div>
              </div>
              <p className="text-center text-xs text-on-surface-variant mt-4 font-medium">
                65% da capacidade total atingida.
              </p>
            </section>

            <section className="space-y-6">
              <h3 className="text-xl font-bold text-primary">Equipamentos Alocados</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'Sistema de Som Linear', status: 'Operacional', icon: Music },
                  { name: 'Painel de LED 4x2m', status: 'Testado', icon: Video },
                  { name: 'Microfones Sem Fio (x6)', status: 'Bateria OK', icon: Mic2 },
                  { name: 'Transmissão ao Vivo', status: 'Link Estável', icon: Video },
                ].map((item) => (
                  <div key={item.name} className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                      <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase">
                        <CheckCircle2 size={12} />
                        {item.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-primary p-8 rounded-3xl text-white">
              <h3 className="text-lg font-bold mb-6">Equipe de Apoio</h3>
              <div className="space-y-6">
                {[
                  { role: 'Coordenador Geral', name: 'Pr. Carlos Mendes', avatar: 'https://picsum.photos/seed/p1/100/100' },
                  { role: 'Líder de Louvor', name: 'Sarah Rebeca', avatar: 'https://picsum.photos/seed/p2/100/100' },
                  { role: 'Técnico de Som', name: 'João Paulo', avatar: 'https://picsum.photos/seed/p3/100/100' },
                  { role: 'Recepção', name: 'Marta Silveira', avatar: 'https://picsum.photos/seed/p4/100/100' },
                ].map((person) => (
                  <div key={person.name} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-white/20 overflow-hidden">
                      <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{person.name}</p>
                      <p className="text-[10px] text-blue-200 uppercase font-bold tracking-wider">{person.role}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-10 py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors">
                Gerenciar Escala
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-lg font-bold text-primary mb-4">Notas do Evento</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed italic">
                "Lembrar de verificar o retorno dos músicos às 18:30. A recepção deve estar posicionada com 45 minutos de antecedência."
              </p>
              <div className="mt-6 pt-6 border-t border-slate-50 flex justify-between items-center">
                <span className="text-[10px] text-on-surface-variant font-bold uppercase">Última edição: Hoje, 10:20</span>
                <button className="text-primary font-bold text-xs">Editar</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-primary tracking-tight">Calendário de Eventos</h1>
          <p className="text-on-surface-variant mt-1">Acompanhe e planeje as atividades da igreja.</p>
        </div>
        <div className="flex gap-3">
          <button className="p-3 bg-white border border-slate-200 rounded-xl text-on-surface-variant hover:bg-slate-50 transition-all shadow-sm">
            <Search size={20} />
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-xl shadow-primary/10 hover:opacity-90 transition-all active:scale-95">
            <Plus size={20} />
            Novo Evento
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-3 space-y-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-extrabold text-primary tracking-tight">Junho, 2024</h2>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ChevronLeft size={20} /></button>
                <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>
            <div className="flex gap-4">
              {categories.map(cat => (
                <div key={cat.name} className="flex items-center gap-2">
                  <span className={cn("w-3 h-3 rounded-full", cat.color)}></span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-7 border-b border-slate-100">
              {days.map(day => (
                <div key={day} className="py-4 text-center text-[10px] font-bold text-on-surface-variant tracking-widest">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {Array.from({ length: 35 }).map((_, i) => {
                const dayNum = i - 4; // Mock starting on Friday
                const isCurrentMonth = dayNum > 0 && dayNum <= 30;
                const hasEvent = dayNum === 22;
                const hasCulto = dayNum === 2 || dayNum === 9 || dayNum === 16 || dayNum === 23 || dayNum === 30;

                return (
                  <div 
                    key={i} 
                    className={cn(
                      "h-32 p-3 border-r border-b border-slate-50 flex flex-col gap-2 transition-colors",
                      !isCurrentMonth ? "bg-slate-50/50" : "hover:bg-slate-50/30 cursor-pointer"
                    )}
                  >
                    <span className={cn(
                      "text-sm font-bold",
                      !isCurrentMonth ? "text-slate-300" : "text-slate-900",
                      dayNum === 12 ? "bg-primary text-white w-7 h-7 flex items-center justify-center rounded-full" : ""
                    )}>
                      {isCurrentMonth ? dayNum : ''}
                    </span>
                    
                    {isCurrentMonth && hasCulto && (
                      <div className="bg-primary text-white text-[9px] font-bold py-1 px-2 rounded-lg truncate">
                        Culto de Celebração
                      </div>
                    )}
                    {isCurrentMonth && hasEvent && (
                      <div 
                        onClick={(e) => { e.stopPropagation(); setView('details'); }}
                        className="bg-red-600 text-white text-[9px] font-bold py-1 px-2 rounded-lg truncate"
                      >
                        Conf. Adoração
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Agenda Sidebar */}
        <aside className="space-y-8">
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <h3 className="text-lg font-bold text-primary mb-6">Agenda de Hoje</h3>
            <div className="space-y-6">
              {[
                { time: '09:00', title: 'Reunião de Oração', cat: 'Reuniões', color: 'bg-amber-500' },
                { time: '14:30', title: 'Ensaio do Louvor', cat: 'Ensaios', color: 'bg-blue-400' },
                { time: '19:30', title: 'Estudo Bíblico', cat: 'Cultos', color: 'bg-primary' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className="text-xs font-bold text-on-surface-variant pt-1">{item.time}</div>
                  <div className="flex-1 space-y-1">
                    <div className={cn("h-1 w-8 rounded-full mb-2", item.color)}></div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{item.cat}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-10 py-3 text-xs font-bold text-primary border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">
              Ver Agenda Completa
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-lg font-bold text-primary mb-4">Lembretes</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-600 mt-1.5"></div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Enviar convites para a Conferência de Adoração até amanhã.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5"></div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  Confirmar reserva do auditório para o ensaio de sábado.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
