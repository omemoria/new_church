import React from 'react';
import { 
  Users, 
  TrendingUp, 
  MoreVertical, 
  Plus, 
  Search,
  Music,
  Heart,
  BookOpen,
  ShieldCheck,
  Coffee
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const ministries = [
  { id: '1', name: 'Louvor e Adoração', leader: 'Sarah Rebeca', members: 24, activity: 85, icon: Music, color: 'blue' },
  { id: '2', name: 'Educação Infantil', leader: 'Helena Souza', members: 18, activity: 92, icon: Heart, color: 'red' },
  { id: '3', name: 'Escola Bíblica', leader: 'Pr. Anderson', members: 12, activity: 70, icon: BookOpen, color: 'slate' },
  { id: '4', name: 'Segurança e Apoio', leader: 'Marcos Oliveira', members: 15, activity: 60, icon: ShieldCheck, color: 'primary' },
  { id: '5', name: 'Acolhimento', leader: 'Marta Silveira', members: 10, activity: 45, icon: Coffee, color: 'amber' },
];

export function Ministries() {
  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold text-primary tracking-tight">Ministérios</h1>
          <p className="text-on-surface-variant text-sm mt-1">Gerencie as frentes de trabalho e lideranças da igreja.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-xl shadow-primary/10 hover:opacity-90 transition-all active:scale-95">
          <Plus size={20} />
          Novo Ministério
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ministries.map((min, i) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            key={min.id}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/5 transition-all group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-8">
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                min.color === 'blue' ? "bg-blue-50 text-blue-600" :
                min.color === 'red' ? "bg-red-50 text-red-600" :
                min.color === 'amber' ? "bg-amber-50 text-amber-600" :
                min.color === 'slate' ? "bg-slate-50 text-slate-600" :
                "bg-primary/5 text-primary"
              )}>
                <min.icon size={28} />
              </div>
              <button className="p-2 text-slate-300 hover:text-primary transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>

            <h3 className="text-xl font-bold text-primary tracking-tight mb-2">{min.name}</h3>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
                <img src={`https://picsum.photos/seed/${min.leader}/100/100`} alt={min.leader} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-bold uppercase tracking-widest">Líder</p>
                <p className="text-sm font-bold text-slate-900">{min.leader}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Membros</p>
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-primary" />
                  <span className="text-lg font-bold text-primary">{min.members}</span>
                </div>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">Atividade</p>
                <div className="flex items-center gap-2">
                  <TrendingUp size={14} className="text-emerald-600" />
                  <span className="text-lg font-bold text-emerald-600">{min.activity}%</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-[10px] font-bold text-on-surface-variant uppercase mb-2">
                <span>Progresso Mensal</span>
                <span>{min.activity}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full transition-all duration-1000",
                    min.color === 'blue' ? "bg-blue-500" :
                    min.color === 'red' ? "bg-red-500" :
                    min.color === 'amber' ? "bg-amber-500" :
                    "bg-primary"
                  )} 
                  style={{ width: `${min.activity}%` }}
                ></div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="bg-slate-50 rounded-3xl p-8 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-slate-100 transition-all">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:scale-110 transition-all mb-4 shadow-sm">
            <Plus size={32} />
          </div>
          <h3 className="text-lg font-bold text-slate-400 group-hover:text-primary transition-colors">Criar Novo Ministério</h3>
          <p className="text-xs text-slate-400 mt-2 max-w-[200px]">Expanda o alcance da sua igreja criando novas frentes de trabalho.</p>
        </div>
      </div>
    </div>
  );
}
