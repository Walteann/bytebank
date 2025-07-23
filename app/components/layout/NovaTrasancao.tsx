"use client";

import { useEffect, useState } from "react";
import Button from "../ui/Button";
import InputNumber from "../ui/InputNumber";
import InputSelect from "../ui/InputSelect";
import { v4 as uuidv4 } from "uuid";
import { HistoricoTransacao } from "@/app/shared/interfaces/historico";
import { useHistoricoStore } from "@/app/shared/stores/useHistoricoStore";

import { toast } from "sonner";
import {
	TIPO_TRANSACAO_OPTIONS,
	TipoTransacao,
	TipoTransacaoKey,
} from "@/app/shared/constants/tipo-transacao";
import { gerarTransacaoAleatoria } from "@/app/shared/constants/mock-historico";
import { useSaldoStore } from "@/app/shared/stores/saldoStorage";

export default function NovaTrasancao() {
	const [tipoTransacao, setTipoTransacao] = useState<TipoTransacaoKey | "">(
		""
	);
	const [valor, setValor] = useState<number>(0);
	const [error, setError] = useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			recebePix();
		}, 120000); // a cada 2 minutos

		return () => clearInterval(interval); // limpa o intervalo ao desmontar
	}, []);

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		if (!tipoTransacao || valor === null || valor <= 0) {
			setError("Preencha todos os campos corretamente.");
			return;
		}

		setError("");

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
		const novaTransacao: HistoricoTransacao = {
			id: uuidv4(),
			valor: -Math.abs(valor),
			tipoOperacao: TipoTransacao[tipoTransacao],
			data,
			hora,
		};

		if (consultaSaldoDiponivelParaTransferencia(novaTransacao.valor)) {
			atualizaSaldo(novaTransacao.valor);
			useHistoricoStore.getState().adicionarTransacao(novaTransacao);

			toast("Transação salva com sucesso!", {
				unstyled: true,
				className:
					"bg-success text-neutral-500 font-bold px-4 py-2 rounded shadow",
			});

			// Limpa os campos
			setValor(0);
			setTipoTransacao("");
		} else {
			toastSaldoInsuficiente();
		}
	}

	return (
		<section className="bg-neutral-grey2 rounded-default flex flex-col bg-custom-pixel2">
			<div className="p-[24px]">
				<form
					onSubmit={handleSubmit}
					className="flex items-center flex-col sm:items-start"
				>
					<h2 className="font-semibold text-xl text-primary mb-[32px]">
						Nova transação
					</h2>
					<InputSelect
						name="tipoTrasacao"
						id="tipoTrasacao"
						placeholder="Selecione o tipo de transação"
						className="sm:max-w-[355px] mb-[32px]"
						options={TIPO_TRANSACAO_OPTIONS}
						value={tipoTransacao}
						onChange={(value: any) => {
							setError("");
							setTipoTransacao(value || "");
						}}
					/>

					<InputNumber
						id="valor"
						name="valor"
						label="Valor"
						placeholder="0,00"
						monetary={true}
						value={valor}
						className="w-[144px] sm:w-[250px] md:w-[250px] lg:w-[250px]"
						onChange={(val) => {
							setError("");
							setValor(val);
						}}
					/>

					{error && (
						<p className="text-red-500 text-sm mb-4">{error}</p>
					)}

					<Button
						className="mt-[32px]"
						value="Concluir transação"
						type="submit"
					/>

					<div className="h-[264px] sm:h-[109px]"></div>
				</form>
			</div>
		</section>
	);
}

function recebePix(): void {
	const transacao = gerarTransacaoAleatoria();
	useHistoricoStore.getState().adicionarTransacao(transacao);

	atualizaSaldo(transacao.valor);

	toast.custom(() => (
		<div
			className={`bg-success text-white px-4 py-3 rounded shadow w-full max-w-sm`}
		>
			<strong className="block text-md font-bold">
				Você recebeu um Pix!
			</strong>
			<span className="text-sm opacity-80">
				{transacao.valor} de {transacao.origem} agora está na sua conta.
			</span>
		</div>
	));
}

function atualizaSaldo(saldo: number): void {
	useSaldoStore.getState().atualizarSaldo(saldo);
}

function consultaSaldoDiponivelParaTransferencia(
	saldoParaTransferir: number
): boolean {
	const saldoDisponivel = useSaldoStore.getState().saldo;

	const novoSaldo = saldoDisponivel - saldoParaTransferir * -1;
	return novoSaldo >= 0;
}

function toastSaldoInsuficiente() {
	toast.custom(() => (
		<div
			className={`bg-red-500 text-white px-4 py-3 rounded-lg shadow-md border-l-4 border-red-600`}
		>
			<strong className="block text-md font-bold">
				Saldo insuficiente para concluir a operação.
			</strong>
			<span className="text-sm opacity-80 text-white">
				Confira seu extrato para mais detalhes.
			</span>
		</div>
	));
}
