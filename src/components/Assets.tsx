import React from 'react';
import { 
  TrendingUp, 
  PlusCircle, 
  Search, 
  Filter, 
  Download, 
  Speaker, 
  DoorOpen, 
  Video, 
  Box,
  MapPin,
  Edit2,
  MoreVertical,
  AlertCircle,
  Package
} from 'lucide-react';
import { cn } from '../lib/utils';

const assets = [
  { id: '2024-001', name: 'Sistema de Som Linear Array', location: 'Templo Central', date: '15/01/2024', value: 'R$ 45.000,00', status: 'Excelente', icon: Speaker, color: 'blue' },
  { id: '2023-014', name: 'Mesas de Reunião Carvalho', location: 'Administração', date: '10/11/2023', value: 'R$ 8.200,00', status: 'Bom', icon: DoorOpen, color: 'red' },
  { id: '2023-088', name: 'Câmeras de Segurança PTZ', location: 'Pátio Externo', date: '05/06/2023', value: 'R$ 12.450,00', status: 'Regular', icon: Video, color: 'blue' },
  { id: '2024-042', name: 'Kit Brinquedos Sala Kids', location: 'Sala Kids', date: '12/02/2024', value: 'R$ 3.800,00', status: 'Novo', icon: Box, color: 'slate' },
];

export function Assets() {
  return (
    <div className="space-y-10">
      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm text-on-surface-variant font-medium mb-1">Total em Bens</p>
          <h3 className="text-2xl font-extrabold text-primary">R$ 1.240.500</h3>
          <div className="mt-2 flex items-center text-xs text-emerald-600 font-bold">
            <TrendingUp size={14} />
            <span>+4.2% este ano</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm text-on-surface-variant font-medium mb-1">Itens Cadastrados</p>
          <h3 className="text-2xl font-extrabold text-primary">482</h3>
          <p className="text-xs text-on-surface-variant mt-2 font-medium">Distribuídos em 8 locais</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <p className="text-sm text-on-surface-variant font-medium mb-1">Próximas Manutenções</p>
          <h3 className="text-2xl font-extrabold text-red-800">12</h3>
          <p className="text-xs text-on-surface-variant mt-2 font-medium underline cursor-pointer">Ver cronograma</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border-dashed border-2 border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group flex items-center justify-center">
          <div className="text-center">
            <PlusCircle className="text-primary group-hover:scale-110 transition-transform mb-1 mx-auto" size={24} />
            <p className="text-sm font-bold text-primary">Adicionar Bem</p>
          </div>
        </div>
      </div>

      {/* Filters & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">Todos</button>
          {['Eletrônicos', 'Móveis', 'Imóveis', 'Outros'].map(cat => (
            <button key={cat} className="px-4 py-2 bg-slate-100 text-on-surface-variant hover:bg-slate-200 transition-colors rounded-full text-sm font-medium">
              {cat}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Filter size={18} />
            Filtros Avançados
          </button>
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-slate-50 transition-all shadow-sm">
            <Download size={18} />
            Exportar
          </button>
        </div>
      </div>

      {/* Asset Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant uppercase text-[11px] font-bold tracking-widest">
                <th className="px-6 py-4">Nome do Bem</th>
                <th className="px-6 py-4">Localização</th>
                <th className="px-6 py-4">Data Aquisição</th>
                <th className="px-6 py-4">Valor Estimado</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4 text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-10 h-10 rounded-lg flex items-center justify-center",
                        asset.color === 'blue' ? "bg-blue-50 text-blue-700" :
                        asset.color === 'red' ? "bg-red-50 text-red-700" :
                        "bg-slate-100 text-slate-700"
                      )}>
                        <asset.icon size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{asset.name}</p>
                        <p className="text-xs text-on-surface-variant">Pat: {asset.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                      <MapPin className="text-slate-400" size={16} />
                      {asset.location}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">{asset.date}</td>
                  <td className="px-6 py-5">
                    <span className="font-bold text-slate-900">{asset.value}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "px-2.5 py-1 text-[10px] font-bold rounded-full uppercase",
                      asset.status === 'Excelente' || asset.status === 'Novo' ? "bg-emerald-100 text-emerald-800" :
                      asset.status === 'Bom' ? "bg-blue-100 text-blue-800" :
                      "bg-orange-100 text-orange-800"
                    )}>
                      {asset.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <Edit2 size={18} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-slate-50/50 flex justify-between items-center text-xs text-on-surface-variant font-medium">
          <p>Exibindo 1 a 4 de 482 registros</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50">Anterior</button>
            <button className="px-3 py-1 bg-primary text-white rounded">1</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50">2</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50">3</button>
            <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-50">Próximo</button>
          </div>
        </div>
      </div>

      {/* Footer Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2 bg-primary/5 p-8 rounded-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-primary font-bold text-lg mb-2">Dica de Gestão</h4>
            <p className="text-sm text-primary/80 leading-relaxed max-w-lg">
              Mantenha o inventário atualizado mensalmente para garantir a cobertura adequada do seguro predial. Bens eletrônicos possuem depreciação acelerada; recomendamos revisão técnica a cada 12 meses.
            </p>
            <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-md active:scale-95 transition-all">
              Baixar Guia de Inventário
            </button>
          </div>
          <Package className="absolute -bottom-10 -right-10 text-primary/5" size={200} />
        </div>
        <div className="bg-red-900/5 p-8 rounded-2xl border border-red-900/10">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="text-red-900" size={24} />
            <h4 className="text-red-900 font-bold text-lg">Alertas</h4>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-red-900/80">
              <span className="w-1.5 h-1.5 rounded-full bg-red-900 mt-1.5 shrink-0"></span>
              3 Ar-condicionados requerem troca de filtro
            </li>
            <li className="flex items-start gap-3 text-sm text-red-900/80">
              <span className="w-1.5 h-1.5 rounded-full bg-red-900 mt-1.5 shrink-0"></span>
              Vencimento de IPVA: Van da Igreja (Placa ABC-123)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
