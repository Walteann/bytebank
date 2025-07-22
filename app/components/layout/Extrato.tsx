'use client'

import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import ButtonIcon from "../ui/ButtonIcon";
import { HISTORICO_LOCAL_STORAGE } from "@/app/shared/constants/variaveis-local-storage";
import { MOCK_HISTORICO } from "@/app/shared/constants/mock-historico";
import { useEffect, useState } from "react";
import { Historico } from "@/app/shared/interfaces/historico";

export default function Extrato() {

	const [historico, setHistorico] = useState<Historico[]>([]);

	useEffect(() => {
		const existe = localStorage.getItem(HISTORICO_LOCAL_STORAGE);
	
		if (!existe) {
			localStorage.setItem(HISTORICO_LOCAL_STORAGE, JSON.stringify(MOCK_HISTORICO));
		}
	
		const extrato = localStorage.getItem(HISTORICO_LOCAL_STORAGE);
		if (extrato) {
			console.log(JSON.parse(extrato));
			setHistorico(JSON.parse(extrato));
		}
	}, [])

	return (
		<div className="w-full sm:max-w-[240px] md:max-w-[240px]">
			<div className="flex justify-between  align-center mt-[8px]">
				<h2 className="font-bold text-xl">Histórico</h2>
				<div className="flex gap-[15px]">
					<ButtonIcon
						className="bg-primary"
						icon={<PencilIcon className="p-[6px] text-white" />}
					/>
					<ButtonIcon
						className="bg-primary"
						icon={<TrashIcon className="p-[6px] text-white" />}
					/>
				</div>
			</div>
			<ul className="space-y-2 text-sm mt-[16px]">
				{historico.map((ext) => {
					return (
						<li key={ext.id} className="mb-[16px]">
							<div className="relative">
								<h4 className="font-semibold text-primary text-sm">
									{ext.mesReferencia}
								</h4>

								{ext.transacoes.map((trasacao, index) => (
									<div
										key={trasacao.id}
										className={`relative  ${
											index
												? "py-[16px]"
												: "py-[16px] pt-[8px] "
										}`}
									>
										{index === ext.transacoes.length - 1 ? (
											<></>
										) : (
											<div className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[75%] after:border-b after:border-primary/50"></div>
										)}
										<div className="flex justify-between">
											<span
												className={`font-regular text-md ${
													trasacao.valor < 0
														? "text-accent"
														: "text-primary"
												} `}
											>
												{trasacao.tipoOperacao}
											</span>
											<span className="font-regular text-sm text-neutral-grey">
												{trasacao.data}
											</span>
										</div>
										<span
											className={`font-semibold text-md ${
												trasacao.valor < 0
													? "text-accent"
													: "text-primary"
											}`}
										>
											{new Intl.NumberFormat("pt-BR", {
												style: "currency",
												currency: "BRL",
											}).format(trasacao.valor)}
										</span>
									</div>
								))}
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
}


