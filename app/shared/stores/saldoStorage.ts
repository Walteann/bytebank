import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SaldoState {
  saldo: number;
  atualizarSaldo: (valor: number) => void;
  resetarSaldo: () => void;
}

export const useSaldoStore = create<SaldoState>()(
  persist(
    (set) => ({
      saldo: 2500, // saldo inicial

      atualizarSaldo: (valor) =>
        set((state) => ({
          saldo: state.saldo + valor, // soma ou subtrai
        })),

      resetarSaldo: () => set({ saldo: 2500 }),
    }),
    {
      name: "saldo-storage", // chave do localStorage
    }
  )
);
