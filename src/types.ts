export type Screen = 'dashboard' | 'secretaria' | 'tesouraria' | 'patrimonio' | 'eventos' | 'ministerios' | 'configuracoes';

export interface Member {
  id: string;
  name: string;
  email: string;
  baptismDate: string;
  ministry: string;
  phone: string;
  status: 'Ativo' | 'Inativo' | 'Afastado';
  avatar: string;
}

export interface Transaction {
  id: string;
  date: string;
  time: string;
  description: string;
  category: string;
  type: 'Crédito' | 'Débito';
  value: number;
}

export interface Asset {
  id: string;
  name: string;
  patrimonyId: string;
  location: string;
  acquisitionDate: string;
  estimatedValue: number;
  status: 'Excelente' | 'Bom' | 'Regular' | 'Novo';
  category: string;
}

export interface Ministry {
  id: string;
  name: string;
  leader: {
    name: string;
    avatar: string;
  };
  membersCount: number;
  monthlyActivity: number;
  icon: string;
}
