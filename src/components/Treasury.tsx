import React from 'react';
import { 
  ArrowUp, 
  ArrowDown, 
  TrendingUp, 
  Clock, 
  Building, 
  Search, 
  Filter, 
  PlusCircle,
  BarChart2
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const transactions = [
  { id: 'TR-9402', date: '15 Out 2023', time: '14:30', desc: 'Dízimo Mensal - Família Silva', cat: 'Dízimo', type: 'Crédito', val: 'R$ 1.200,00' },
  { id: 'TR-9388', date: '14 Out 2023', time: '09:15', desc: 'Manutenção Ar Condicionado', cat: 'Manutenção', type: 'Débito', val: '- R$ 450,00' },
  { id: 'TR-9372', date: '12 Out 2023', time: '18:50', desc: 'Oferta Culto de Celebração', cat: 'Oferta', type: 'Crédito', val: 'R$ 3.845,50' },
  { id: 'TR-9310', date: '10 Out 2023', time: '11:00', desc: 'Pagamento de Energia Elétrica', cat: 'Despesas Fixas', type: 'Débito', val: '- R$ 1.120,30' },
];

export function Treasury() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Tesouraria</h1>
          <p className="text-on-surface-variant text-sm mt-1">Gestão de fluxos financeiros e relatórios eclesiásticos.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white text-primary border border-slate-200 px-5 py-2.5 rounded-xl font-semibold shadow-sm hover:bg-slate-50 transition-all active:scale-95">
            <ArrowDown className="text-red-700" size={18} />
            Nova Saída
          </button>
          <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-semibold shadow-xl shadow-primary/10 hover:opacity-90 transition-all active:scale-95">
            <ArrowUp className="text-green-400" size={18} />
            Nova Entrada
          </button>
        </div>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-700 flex items-center justify-center">
              <TrendingUp size={20} />
            </div>
            <span className="text-on-surface-variant font-medium text-sm">Entradas (Mês)</span>
          </div>
          <div className="text-3xl font-extrabold text-primary">R$ 42.580,00</div>
          <div className="mt-2 flex items-center gap-1 text-green-600 text-xs font-bold">
            <TrendingUp size={12} />
            +12.5% em relação ao mês anterior
          </div>
        </div>

        <div className="bg-white p-6 rounded-[1.5rem] shadow-sm border border-slate-100 relative overflow-hidden group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-700 flex items-center justify-center">
              <ArrowDown size={20} />
            </div>
            <span className="text-on-surface-variant font-medium text-sm">Saídas (Mês)</span>
          </div>
          <div className="text-3xl font-extrabold text-primary">R$ 18.920,45</div>
          <div className="mt-2 flex items-center gap-1 text-on-surface-variant text-xs font-medium">
            <Clock size={12} />
            3 pagamentos pendentes esta semana
          </div>
        </div>

        <div className="bg-primary p-6 rounded-[1.5rem] shadow-xl shadow-primary/20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center backdrop-blur-md">
                <Building size={20} />
              </div>
              <span className="text-blue-100 font-medium text-sm">Saldo Consolidado</span>
            </div>
            <div className="text-3xl font-extrabold text-white">R$ 156.432,12</div>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-1.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-blue-400 w-3/4 rounded-full"></div>
              </div>
              <span className="text-[10px] text-blue-200 font-bold uppercase tracking-wider">Meta 75%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-slate-100">
        <div className="px-8 py-6 flex justify-between items-center">
          <h2 className="text-xl font-bold text-primary">Transações Recentes</h2>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
              <input 
                className="pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 w-64" 
                placeholder="Buscar transação..." 
                type="text" 
              />
            </div>
            <button className="p-2 bg-slate-50 rounded-xl text-on-surface-variant hover:bg-slate-100 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-on-surface-variant text-xs uppercase tracking-widest font-bold border-b border-slate-100">
                <th className="px-8 py-4">Data</th>
                <th className="px-4 py-4">Descrição</th>
                <th className="px-4 py-4">Categoria</th>
                <th className="px-4 py-4">Tipo</th>
                <th className="px-8 py-4 text-right">Valor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {transactions.map((tr) => (
                <tr key={tr.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="text-sm font-semibold text-primary">{tr.date}</div>
                    <div className="text-[10px] text-on-surface-variant">{tr.time}</div>
                  </td>
                  <td className="px-4 py-5">
                    <div className="text-sm font-medium text-on-surface">{tr.desc}</div>
                    <div className="text-[10px] text-on-surface-variant uppercase">ID: #{tr.id}</div>
                  </td>
                  <td className="px-4 py-5">
                    <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-[11px] font-bold">
                      {tr.cat}
                    </span>
                  </td>
                  <td className="px-4 py-5">
                    <div className={cn(
                      "flex items-center gap-1.5 font-bold text-xs",
                      tr.type === 'Crédito' ? "text-green-600" : "text-red-600"
                    )}>
                      {tr.type === 'Crédito' ? <PlusCircle size={14} /> : <ArrowDown size={14} />}
                      {tr.type}
                    </div>
                  </td>
                  <td className={cn(
                    "px-8 py-5 text-right font-bold",
                    tr.type === 'Crédito' ? "text-primary" : "text-red-700"
                  )}>
                    {tr.val}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 border-t border-slate-100 flex justify-between items-center bg-slate-50/30">
          <div className="text-xs text-on-surface-variant">Mostrando 4 de 128 transações</div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-bold hover:bg-slate-50 transition-all">Anterior</button>
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:opacity-90 transition-all">Próximo</button>
          </div>
        </div>
      </div>

      {/* Insight Card */}
      <div className="bg-red-900/5 border border-red-900/10 rounded-2xl p-6 flex items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-red-900 text-white flex items-center justify-center flex-shrink-0">
          <BarChart2 size={30} />
        </div>
        <div>
          <h3 className="font-bold text-red-900 leading-tight">Insight da Tesouraria</h3>
          <p className="text-on-surface-variant text-sm mt-1">
            As ofertas deste mês superaram a meta em 15%. Recomendamos a alocação do excedente no Fundo de Missões ou Manutenção Preventiva.
          </p>
        </div>
        <button className="ml-auto text-red-900 font-bold text-sm hover:underline">Ver Relatório Detalhado</button>
      </div>
    </div>
  );
}
