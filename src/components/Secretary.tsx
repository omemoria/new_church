import React from 'react';
import { Search, MapPin, Filter, UserPlus, MoreVertical, TrendingUp, Map } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const members = [
  { id: '1', name: 'Ricardo Mendonça', email: 'ricardo.m@email.com', baptismDate: '15 Mar 2018', ministry: 'Louvor', phone: '(11) 98765-4321', status: 'Ativo', avatar: 'https://picsum.photos/seed/m1/100/100' },
  { id: '2', name: 'Helena Souza', email: 'helena.s@email.com', baptismDate: '22 Ago 2020', ministry: 'Educação Infantil', phone: '(11) 91234-5678', status: 'Ativo', avatar: 'https://picsum.photos/seed/m2/100/100' },
  { id: '3', name: 'Marcos Oliveira', email: 'm.oliveira@email.com', baptismDate: '05 Jan 2015', ministry: 'Tesouraria Aux.', phone: '(11) 95544-3322', status: 'Afastado', avatar: 'https://picsum.photos/seed/m3/100/100' },
  { id: '4', name: 'Beatriz Amaral', email: 'b.amaral@email.com', baptismDate: '12 Nov 2022', ministry: 'Intercessão', phone: '(11) 98877-6655', status: 'Ativo', avatar: 'https://picsum.photos/seed/m4/100/100' },
];

export function Secretary() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-primary tracking-tight">Gestão de Membros</h1>
          <p className="text-on-surface-variant mt-1">Administre o corpo eclesiástico e registros de membresia.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary px-6 py-3 rounded-xl text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95">
          <UserPlus size={20} />
          Novo Membro
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-white p-4 rounded-xl shadow-sm flex items-center gap-3 border border-transparent focus-within:border-primary/20 transition-all">
          <Search className="text-on-surface-variant" size={20} />
          <input 
            className="flex-1 bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-on-surface-variant/50" 
            placeholder="Buscar por nome, CPF ou ministério..." 
            type="text"
          />
        </div>
        <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
          <MapPin className="text-on-surface-variant" size={20} />
          <select className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-on-surface font-medium">
            <option>Todas Congregações</option>
            <option>Sede Central</option>
            <option>Filial Alvorada</option>
          </select>
        </div>
        <div className="lg:col-span-3 bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
          <Filter className="text-on-surface-variant" size={20} />
          <select className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-on-surface font-medium">
            <option>Todos os Status</option>
            <option>Ativo</option>
            <option>Inativo</option>
            <option>Afastado</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant text-[11px] uppercase tracking-wider font-bold">
                <th className="px-6 py-4">Nome do Membro</th>
                <th className="px-6 py-4">Data de Batismo</th>
                <th className="px-6 py-4">Ministério</th>
                <th className="px-6 py-4">Telefone</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {members.map((member) => (
                <tr key={member.id} className="group hover:bg-surface-container-low/50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                        <img 
                          src={member.avatar} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{member.name}</p>
                        <p className="text-xs text-on-surface-variant">{member.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">{member.baptismDate}</td>
                  <td className="px-6 py-5">
                    <span className="bg-slate-100 text-slate-700 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tight">
                      {member.ministry}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">{member.phone}</td>
                  <td className="px-6 py-5">
                    <div className={cn(
                      "flex items-center gap-1.5 font-semibold text-xs",
                      member.status === 'Ativo' ? "text-emerald-600" : "text-amber-600"
                    )}>
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        member.status === 'Ativo' ? "bg-emerald-600" : "bg-amber-600"
                      )}></span>
                      {member.status}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="text-on-surface-variant hover:text-primary transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50/50 border-t border-surface-container flex items-center justify-between">
          <span className="text-xs text-on-surface-variant">Mostrando 1-4 de 248 membros</span>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-surface-container transition-colors disabled:opacity-30" disabled>
              Anterior
            </button>
            <div className="flex items-center gap-1">
              <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-xs font-semibold">2</button>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-xs font-semibold">3</button>
              <span className="mx-1 text-on-surface-variant">...</span>
              <button className="w-8 h-8 rounded-lg hover:bg-surface-container text-xs font-semibold">62</button>
            </div>
            <button className="p-2 rounded-lg hover:bg-surface-container transition-colors">
              Próximo
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-primary">
          <p className="text-on-surface-variant text-sm font-semibold mb-2">Novos Membros (Mês)</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-extrabold text-primary">14</span>
            <span className="text-emerald-600 text-xs font-bold mb-1 flex items-center gap-1">
              +12% <TrendingUp size={12} />
            </span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-red-800">
          <p className="text-on-surface-variant text-sm font-semibold mb-2">Batismos Pendentes</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-extrabold text-red-800">08</span>
            <span className="text-on-surface-variant text-[10px] mb-1 font-medium italic">Próximo: 15/05</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-2xl border-l-4 border-blue-400">
          <p className="text-on-surface-variant text-sm font-semibold mb-2">Total de Congregações</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-extrabold text-primary">12</span>
            <Map className="text-blue-400 mb-1" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
