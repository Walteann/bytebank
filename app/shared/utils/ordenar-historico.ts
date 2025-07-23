import { Historico } from "../interfaces/historico";

const ORDEM_MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

function normalizar(mes: string): string {
  return mes
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function ordenarHistoricoPorMes(historico: Historico[]): Historico[] {
  return [...historico]
    .sort((a, b) => {
      const mesA = ORDEM_MESES.indexOf(normalizar(a.mesReferencia));
      const mesB = ORDEM_MESES.indexOf(normalizar(b.mesReferencia));
      return mesB - mesA; // do mais recente para o mais antigo
    })
    .map((mes) => ({
      ...mes,
      transacoes: [...mes.transacoes].sort((a, b) => {
        const dataHoraA = new Date(`${inverterData(a.data)}T${a.hora ?? "00:00"}`);
        const dataHoraB = new Date(`${inverterData(b.data)}T${b.hora ?? "00:00"}`);
        return dataHoraB.getTime() - dataHoraA.getTime(); // mais recente primeiro
      }),
    }));
}

function inverterData(data: string): string {
  const [dia, mes, ano] = data.split("/");
  return `${ano}-${mes}-${dia}`; // formato compatível com Date
}