import React from 'react';
import { Search, Bell, UserCircle } from 'lucide-react';

interface HeaderProps {
  title: string;
  breadcrumbs?: string[];
}

export function Header({ title, breadcrumbs }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-64 z-40 h-16 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm flex justify-between items-center px-8">
      <div className="flex items-center gap-4">
        {breadcrumbs ? (
          <div className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb}>
                <span className={index === breadcrumbs.length - 1 ? "text-primary font-bold" : "text-slate-400"}>
                  {crumb}
                </span>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-slate-300">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          <h1 className="text-xl font-bold text-slate-900 tracking-tighter">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-6">
        <div className="relative group hidden md:block">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
            <Search size={18} />
          </span>
          <input
            className="bg-slate-100 border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
            placeholder="Buscar membros ou bens..."
            type="text"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          
          <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-none">Rev. Anderson Silva</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">Pastor Titular</p>
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-primary/10 overflow-hidden bg-slate-100">
              <img 
                src="https://picsum.photos/seed/pastor/100/100" 
                alt="User" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
