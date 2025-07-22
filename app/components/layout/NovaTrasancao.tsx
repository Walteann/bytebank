"use client";

import { useState } from "react";
import Button from "../ui/Button";
import InputNumber from "../ui/InputNumber";
import InputSelect from "../ui/InputSelect";
import { v4 as uuidv4 } from "uuid";
import {
	Historico,
	HistoricoTransacao,
} from "@/app/shared/interfaces/historico";
import { HISTORICO_LOCAL_STORAGE } from "@/app/shared/constants/variaveis-local-storage";

export default function NovaTrasancao() {
	const optionsTipoTransacao = [
		{
			value: "cambio",
			label: "Câmbio de Moeda",
		},
		{
			value: "doc_ted",
			label: "DOC/TED",
		},
		{
			value: "emprestimo",
			label: "Empréstimo e Financiamento",
		},
	];

	const [tipoTransacao, setTipoTransacao] = useState<string>("");
	const [valor, setValor] = useState<number>(0);
	const [error, setError] = useState("");

	function salvarTransacaoNoLocalStorage(nova: HistoricoTransacao) {
		const historicoLocal = localStorage.getItem(HISTORICO_LOCAL_STORAGE);
		const historico: Historico[] = historicoLocal
			? JSON.parse(historicoLocal)
			: [];

		const hoje = new Date();
		const mesReferencia = hoje.toLocaleString("default", { month: "long" });

		const mesAtual = historico.find(
			(h) => h.mesReferencia === mesReferencia
		);

		if (mesAtual) {
			mesAtual.transacoes.push(nova);
		} else {
			historico.push({
				id: uuidv4(),
				mesReferencia,
				transacoes: [nova],
			});
		}

		localStorage.setItem(
			HISTORICO_LOCAL_STORAGE,
			JSON.stringify(historico)
		);
	}

	function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		if (!tipoTransacao || valor === null || valor <= 0) {
			setError("Preencha todos os campos corretamente.");
			return;
		}

		setError("");

		const novaTransacao: HistoricoTransacao = {
			id: uuidv4(),
			valor,
			tipoOperacao: tipoTransacao,
			data: new Date().toLocaleDateString("pt-BR"),
		};

		console.log(novaTransacao);

		salvarTransacaoNoLocalStorage(novaTransacao);
		alert("Transação salva com sucesso!");

		// Limpa os campos
		setValor(0);
		setTipoTransacao("");
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
						options={optionsTipoTransacao}
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
