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
  return [...historico].sort((a, b) => {
    const mesA = ORDEM_MESES.indexOf(normalizar(a.mesReferencia));
    const mesB = ORDEM_MESES.indexOf(normalizar(b.mesReferencia));
    return mesB - mesA;
  });
}
