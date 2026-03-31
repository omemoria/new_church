/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Secretary } from './components/Secretary';
import { Treasury } from './components/Treasury';
import { Assets } from './components/Assets';
import { Events } from './components/Events';
import { Ministries } from './components/Ministries';
import { Schedules } from './components/Schedules';
import { Screen } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<Screen>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard': return <Dashboard />;
      case 'secretaria': return <Secretary />;
      case 'tesouraria': return <Treasury />;
      case 'patrimonio': return <Assets />;
      case 'eventos': return <Events />;
      case 'ministerios': return <Ministries />;
      default: return <Dashboard />;
    }
  };

  const getBreadcrumbs = () => {
    const base = ['Início'];
    const labels: Record<Screen, string> = {
      dashboard: 'Dashboard',
      secretaria: 'Secretaria',
      tesouraria: 'Tesouraria',
      patrimonio: 'Patrimônio',
      eventos: 'Eventos',
      ministerios: 'Ministérios',
      configuracoes: 'Configurações'
    };
    return [...base, labels[activeScreen]];
  };

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      
      <div className="pl-64">
        <Header 
          title={activeScreen.charAt(0).toUpperCase() + activeScreen.slice(1)} 
          breadcrumbs={getBreadcrumbs()} 
        />
        
        <main className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

