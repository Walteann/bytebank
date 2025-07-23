export enum TipoTransacaoLabelEnum {
    cambio = 'Câmbio de Moeda',
    doc_ted = 'DOC/TED',
    emprestimo = 'Empréstimo e Financiamento',
}

export const TipoTransacao = {
  cambio: TipoTransacaoLabelEnum.cambio,
  doc_ted: TipoTransacaoLabelEnum.doc_ted,
  emprestimo: TipoTransacaoLabelEnum.emprestimo,
} as const;

export type TipoTransacaoKey = keyof typeof TipoTransacao; 

export const TIPO_TRANSACAO_OPTIONS = Object.entries(TipoTransacao).map(
  ([value, label]) => ({
    value,
    label,
  })
);