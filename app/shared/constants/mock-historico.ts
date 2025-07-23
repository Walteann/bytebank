import { HistoricoTransacao } from "../interfaces/historico";
import { v4 as uuidv4 } from "uuid";

export const MOCK_HISTORICO = [
  {
    id: "3a8b22ee-3fc2-4f78-8519-ju2025",
    mesReferencia: "Maio",
    transacoes: [
      {
        id: "tx-maio-1",
        valor: 1200.0,
        tipoOperacao: "Depósito",
        data: "03/05/2025",
        hora: "09:15",
      },
      {
        id: "tx-maio-2",
        valor: -300.0,
        tipoOperacao: "Saque",
        data: "10/05/2025",
        hora: "14:32",
      },
      {
        id: "tx-maio-3",
        valor: -150.0,
        tipoOperacao: "Transferência",
        data: "25/05/2025",
        hora: "18:48",
      },
    ],
  },
  {
    id: "ac1194be-7d0b-421f-a2a0-ju62025",
    mesReferencia: "Junho",
    transacoes: [
      {
        id: "tx-junho-1",
        valor: 800.0,
        tipoOperacao: "Depósito",
        data: "12/06/2025",
        hora: "10:22",
      },
      {
        id: "tx-junho-2",
        valor: -100.0,
        tipoOperacao: "Transferência",
        data: "20/06/2025",
        hora: "17:05",
      },
    ],
  },
];

export function gerarTransacaoAleatoria(): HistoricoTransacao {
  const nomes = [
    "Ana Costa",
    "Lucas Mendes",
    "Beatriz Souza",
    "Carlos Oliveira",
    "Juliana Silva",
    "Rafael Lima",
    "Fernanda Rocha",
  ];

  const valor = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // valor entre 100 e 500
  const nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];
  const tipoOperacao = `Pix ${nomeAleatorio}`;

   const agora = new Date();

  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora
    .toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
    .padStart(8, "0"); 

  const id = uuidv4();
  const origem = nomeAleatorio

  return {
    id,
    valor,
    tipoOperacao,
    data,
    hora,
    origem
  };
}