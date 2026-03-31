import React from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  AlertCircle, 
  MoreVertical,
  Plus,
  Filter,
  Search,
  UserCheck,
  UserX
} from 'lucide-react';
import { cn } from '../lib/utils';

const schedules = [
  { id: '1', date: 'Dom, 23 Jun', time: '19:00', event: 'Culto de Celebração', ministry: 'Louvor', volunteer: 'Ricardo Mendonça', role: 'Violão / Voz', status: 'Confirmado' },
  { id: '2', date: 'Dom, 23 Jun', time: '19:00', event: 'Culto de Celebração', ministry: 'Som', volunteer: 'João Paulo', role: 'Técnico de PA', status: 'Pendente' },
  { id: '3', date: 'Dom, 23 Jun', time: '19:00', event: 'Culto de Celebração', ministry: 'Recepção', volunteer: 'Marta Silveira', role: 'Portaria A', status: 'Confirmado' },
  { id: '4', date: 'Dom, 23 Jun', time: '19:00', event: 'Culto de Celebração', ministry: 'Kids', volunteer: 'Helena Souza', role: 'Berçário', status: 'Recusado' },
  { id: '5', date: 'Qua, 26 Jun', time: '19:30', event: 'Estudo Bíblico', ministry: 'Mídia', volunteer: 'Lucas Gabriel', role: 'Projeção', status: 'Confirmado' },
];

export function Schedules() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Escalas de Voluntários</h1>
          <p className="text-on-surface-variant text-sm mt-1">Organize as equipes para os próximos cultos e eventos.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white text-primary border border-slate-200 px-5 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-slate-50 transition-all">
            <Filter size={18} />
            Filtrar
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold shadow-xl shadow-primary/10 hover:opacity-90 transition-all active:scale-95">
            <Plus size={20} />
            Nova Escala
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
            <UserCheck size={24} />
          </div>
          <div>
            <p className="text-xs text-emerald-700 font-bold uppercase tracking-widest">Confirmados</p>
            <p className="text-2xl font-extrabold text-emerald-900">42</p>
          </div>
        </div>
        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-xs text-amber-700 font-bold uppercase tracking-widest">Aguardando</p>
            <p className="text-2xl font-extrabold text-amber-900">12</p>
          </div>
        </div>
        <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center">
            <UserX size={24} />
          </div>
          <div>
            <p className="text-xs text-red-700 font-bold uppercase tracking-widest">Recusados</p>
            <p className="text-2xl font-extrabold text-red-900">03</p>
          </div>
        </div>
      </div>

      {/* Schedule Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">Próximas Escalas</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
            <input 
              className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 w-64" 
              placeholder="Buscar voluntário ou evento..." 
              type="text" 
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold border-b border-slate-50">
                <th className="px-8 py-4">Data / Hora</th>
                <th className="px-4 py-4">Evento</th>
                <th className="px-4 py-4">Voluntário / Função</th>
                <th className="px-4 py-4">Ministério</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-8 py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {schedules.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-primary" size={16} />
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.date}</p>
                        <p className="text-[10px] text-on-surface-variant font-bold">{item.time}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <p className="text-sm font-bold text-primary">{item.event}</p>
                    <div className="flex items-center gap-1 text-[10px] text-on-surface-variant font-medium">
                      <MapPin size={10} />
                      Templo Central
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                        <img src={`https://picsum.photos/seed/${item.volunteer}/100/100`} alt={item.volunteer} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{item.volunteer}</p>
                        <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider">{item.role}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold uppercase rounded-full">
                      {item.ministry}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <div className={cn(
                      "flex items-center gap-1.5 text-[10px] font-bold uppercase",
                      item.status === 'Confirmado' ? "text-emerald-600" :
                      item.status === 'Pendente' ? "text-amber-500" :
                      "text-red-600"
                    )}>
                      {item.status === 'Confirmado' ? <CheckCircle2 size={14} /> : 
                       item.status === 'Pendente' ? <Clock size={14} /> : 
                       <AlertCircle size={14} />}
                      {item.status}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
