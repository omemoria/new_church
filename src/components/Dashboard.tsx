import React from 'react';
import { 
  Users, 
  Wallet, 
  Package, 
  Calendar, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  MoreVertical,
  AirVent,
  Speaker,
  Car
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'JAN', value: 80 },
  { name: 'FEV', value: 90 },
  { name: 'MAR', value: 70 },
  { name: 'ABR', value: 95 },
  { name: 'MAI', value: 85 },
  { name: 'JUN', value: 100 },
];

export function Dashboard() {
  return (
    <div className="space-y-10">
      <header>
        <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">Painel de Controle</h2>
        <p className="text-on-surface-variant max-w-2xl">
          Bem-vindo de volta ao sistema de gestão. Aqui está um resumo da saúde administrativa e espiritual da sua congregação hoje.
        </p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Membros Ativos', value: '1.248', icon: Users, color: 'blue', trend: '+12%' },
          { label: 'Dízimos do Mês', value: 'R$ 42.850', icon: Wallet, color: 'emerald', trend: 'Meta 85%' },
          { label: 'Bens Patrimoniais', value: 'R$ 2.4M', icon: Package, color: 'slate', trend: '248 itens' },
          { label: 'Próximos Eventos', value: '04', icon: Calendar, color: 'red', trend: 'Esta semana' },
        ].map((stat, i) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label}
            className="bg-white p-6 rounded-xl shadow-sm border border-transparent hover:border-primary/10 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl transition-colors ${
                stat.color === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-primary group-hover:text-white' :
                stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white' :
                stat.color === 'slate' ? 'bg-slate-50 text-slate-600 group-hover:bg-slate-600 group-hover:text-white' :
                'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white'
              }`}>
                <stat.icon size={24} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded ${
                stat.color === 'blue' || stat.color === 'emerald' ? 'text-emerald-600 bg-emerald-50' : 'text-slate-500 bg-slate-50'
              }`}>
                {stat.trend}
              </span>
            </div>
            <h3 className="text-sm font-medium text-on-surface-variant mb-1">{stat.label}</h3>
            <p className="text-3xl font-extrabold text-primary tracking-tight">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-surface-container-low rounded-xl p-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold text-primary tracking-tight">Crescimento de Membros</h3>
              <p className="text-sm text-on-surface-variant">Comparativo de novos registros por mês (2024)</p>
            </div>
            <select className="bg-white border-none text-xs font-bold rounded-lg px-3 py-2 shadow-sm focus:ring-0">
              <option>Ano Atual</option>
              <option>2023</option>
            </select>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }}
                  dy={10}
                />
                <Tooltip 
                  cursor={{ fill: '#f1f5f9' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === data.length - 1 ? '#002046' : '#00204620'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Maintenance & Progress */}
        <div className="space-y-6">
          <section className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-primary tracking-tight">Manutenção de Bens</h3>
              <AlertTriangle className="text-red-600" size={20} />
            </div>
            <div className="space-y-4">
              {[
                { title: 'Ar Condicionado Central', desc: 'Vencimento da limpeza preventiva em 3 dias.', icon: AirVent },
                { title: 'Sistema de Som', desc: 'Mesa de som apresentando ruído no canal 04.', icon: Speaker },
                { title: 'Veículo da Missão', desc: 'Troca de óleo agendada para sexta-feira.', icon: Car },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-3 hover:bg-surface-container-low rounded-lg transition-colors cursor-pointer">
                  <div className="w-10 h-10 bg-red-50 text-red-600 flex items-center justify-center rounded-lg flex-shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 text-xs font-bold text-primary hover:bg-primary/5 transition-colors rounded-lg border border-primary/10">
              Ver todo o patrimônio
            </button>
          </section>

          <section className="bg-primary p-6 rounded-xl text-white overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-4">Meta Construção</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-[10px] mb-1 opacity-80 uppercase tracking-widest font-bold">
                    <span>Fase 1: Alvenaria</span>
                    <span>72%</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white transition-all" style={{ width: '72%' }}></div>
                  </div>
                </div>
                <p className="text-xs text-blue-200 mt-4 leading-relaxed">
                  Faltam apenas R$ 12.000 para concluir a etapa de fundação do novo anexo social.
                </p>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          </section>
        </div>
      </div>

      {/* Recent Activity */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-extrabold text-primary tracking-tight">Atividades Recentes</h3>
          <button className="text-sm font-bold text-primary flex items-center gap-1 hover:underline">
            Ver histórico completo
            <ArrowRight size={16} />
          </button>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
              <tr>
                <th className="px-6 py-4">Data</th>
                <th className="px-6 py-4">Categoria</th>
                <th className="px-6 py-4">Descrição</th>
                <th className="px-6 py-4">Valor/Status</th>
                <th className="px-6 py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-slate-50">
              {[
                { date: '12 Jun 2024', cat: 'Tesouraria', desc: 'Dízimo Individual - Roberto C.', val: 'R$ 450,00', type: 'emerald' },
                { date: '11 Jun 2024', cat: 'Secretaria', desc: 'Novo Membro: Mariana Lima', val: 'Aguardando Batismo', type: 'blue' },
                { date: '10 Jun 2024', cat: 'Patrimônio', desc: 'Aquisição: Projetor Laser 4K', val: 'R$ 8.200,00', type: 'red' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-500">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                      row.type === 'emerald' ? 'bg-emerald-50 text-emerald-700' :
                      row.type === 'blue' ? 'bg-blue-50 text-blue-700' :
                      'bg-red-50 text-red-700'
                    }`}>
                      {row.cat}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-900 font-bold">{row.desc}</td>
                  <td className={`px-6 py-4 font-bold ${row.type === 'emerald' ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {row.val}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
