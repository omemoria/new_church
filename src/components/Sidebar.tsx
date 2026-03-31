import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Wallet, 
  Package, 
  Calendar, 
  Church, 
  Settings, 
  PlusCircle, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Screen } from '../types';

interface SidebarProps {
  activeScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export function Sidebar({ activeScreen, onScreenChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'secretaria', label: 'Secretaria', icon: Users },
    { id: 'tesouraria', label: 'Tesouraria', icon: Wallet },
    { id: 'patrimonio', label: 'Patrimônio', icon: Package },
    { id: 'eventos', label: 'Eventos', icon: Calendar },
    { id: 'ministerios', label: 'Ministérios', icon: Church },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
  ] as const;

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-50 bg-white border-r border-slate-200 flex flex-col py-6 px-4">
      <div className="mb-10 px-2 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white">
          <Church size={24} />
        </div>
        <div>
          <h2 className="text-lg font-extrabold text-primary leading-tight tracking-tighter">
            Gestão Eclesiástica
          </h2>
          <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
            Administração Central
          </p>
        </div>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onScreenChange(item.id as Screen)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 rounded-xl text-sm font-medium",
              activeScreen === item.id
                ? "text-primary bg-blue-50 font-bold border-r-4 border-primary"
                : "text-slate-600 hover:text-primary hover:bg-slate-50"
            )}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-slate-100 space-y-1">
        <button className="w-full bg-primary text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-6 active:scale-95 transition-transform">
          <PlusCircle size={18} />
          <span>Novo Registro</span>
        </button>
        
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-primary hover:bg-slate-50 transition-all rounded-xl text-sm font-medium">
          <HelpCircle size={20} />
          <span>Suporte</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all rounded-xl text-sm font-medium">
          <LogOut size={20} />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
