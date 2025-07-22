import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { Historico, HistoricoTransacao } from "../interfaces/historico";
import { HISTORICO_LOCAL_STORAGE } from "../constants/variaveis-local-storage";
import { persist } from "zustand/middleware";
import { MOCK_HISTORICO } from "../constants/mock-historico";

interface HistoricoStore {
	historico: Historico[];
	adicionarTransacao: (transacao: HistoricoTransacao) => void;
	carregarHistorico: () => void;
    removerTodosOsHistorico: () => void;
}

function capitalizeFirstLetter(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const useHistoricoStore = create<HistoricoStore>()(
	persist(
		(set, get) => ({
			historico: MOCK_HISTORICO,
			adicionarTransacao: (transacao) => {
				const hoje = new Date();
				const mesReferencia = capitalizeFirstLetter(hoje.toLocaleString("default", {
					month: "long",
				}));

				const historicoAtual = [...get().historico];
				const mes = historicoAtual.find(
					(h) => h.mesReferencia === mesReferencia
				);

				if (mes) {
					mes.transacoes.push(transacao);
				} else {
					historicoAtual.push({
						id: uuidv4(),
						mesReferencia,
						transacoes: [transacao],
					});
				}

				set({ historico: historicoAtual });
			},
			carregarHistorico: () => {
				const local = localStorage.getItem(HISTORICO_LOCAL_STORAGE);
				if (local) {
					set({ historico: JSON.parse(local) });
				}
			},
            removerTodosOsHistorico: () => {
                set({ historico: []});
                localStorage.removeItem(HISTORICO_LOCAL_STORAGE);
            }
		}),
		{
			name: HISTORICO_LOCAL_STORAGE,
		}
	)
);
