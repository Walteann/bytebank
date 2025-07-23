export interface HistoricoTransacao {
    id: string;
    valor: number;
    tipoOperacao: string;
    data: string;
    hora?: string;
    origem?: string;
}

export interface Historico {
    id: string;
    mesReferencia: string;
    transacoes: HistoricoTransacao[];
}