"use client";

import { useState } from "react";
import Button from "../ui/Button";
import InputNumber from "../ui/InputNumber";
import InputSelect from "../ui/InputSelect";
import { v4 as uuidv4 } from "uuid";
import {
	HistoricoTransacao,
} from "@/app/shared/interfaces/historico";
import { useHistoricoStore } from "@/app/shared/stores/useHistoricoStore";

import { toast } from "sonner";

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

		useHistoricoStore.getState().adicionarTransacao(novaTransacao);

		toast("Transação salva com sucesso!", {
			unstyled: true,
			className: "bg-success text-neutral-500 font-bold px-4 py-2 rounded shadow",
		});

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
