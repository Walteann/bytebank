"use client";

import Button from "../ui/Button";
import InputNumber from "../ui/InputNumber";
import InputSelect from "../ui/InputSelect";

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

	function handlerChange(event: unknown) {
		console.log(event);
	}

	return (
		<section className="bg-neutral-grey2 rounded-default flex flex-col bg-custom-pixel2">
			<div className="p-[24px]">
				<form className="flex items-center flex-col sm:items-start">
					<h2 className="font-semibold text-xl text-primary mb-[32px]">
						Nova transação
					</h2>
					<InputSelect
						name="tipoTrasacao"
						id="tipoTrasacao"
						placeholder="Selecione o tipo de transação"
						className="sm:max-w-[355px] mb-[32px]"
						options={optionsTipoTransacao}
						onChange={handlerChange}
					/>

					<InputNumber
						id="valor"
						name="valor"
						label="Valor"
						placeholder="0,00"
						monetary={true}
						className="w-[144px] sm:w-[250px] md:w-[250px] lg:w-[250px]"
						onChange={(val) => console.log("Valor numérico:", val)}
					/>

					<Button className="mt-[32px]" value="Concluir transação" />

					<div className="h-[264px] sm:h-[109px]"></div>
				</form>
			</div>
		</section>
	);
}
