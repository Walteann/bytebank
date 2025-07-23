"use client";

import { IoTrash } from "react-icons/io5";
import { HiPencil } from "react-icons/hi";
import ButtonIcon from "../ui/ButtonIcon";
import { useHistoricoStore } from "@/app/shared/stores/useHistoricoStore";
import { ordenarHistoricoPorMes } from "@/app/shared/utils/ordenar-historico";

import { useSaldoStore } from "@/app/shared/stores/saldoStorage";
import { formatarParaBRL } from "@/app/shared/utils/formatar-currency";

export default function Extrato() {
	const historico = useHistoricoStore((state) => state.historico);
	const removerExtrato = useHistoricoStore(
		(state) => state.removerTodosOsHistorico
	);

	const resetarSaldo = useSaldoStore(state => state.resetarSaldo);

	const removerHistorico = () => {
		removerExtrato();
		resetarSaldo();
	};

	return (
		<div className="w-full sm:max-w-[240px] md:max-w-[240px]">
			<div className="flex justify-between  align-center mt-[8px]">
				<h2 className="font-bold text-xl">Histórico</h2>
				<div className="flex gap-[15px]">
					<ButtonIcon
						disabled={true}
						className="bg-primary"
						icon={<HiPencil className="text-[26px] text-white" />}
					/>
					<ButtonIcon
						className="bg-primary"
						icon={<IoTrash className="text-white text-[26px]" />}
						onClick={removerHistorico}
					/>
				</div>
			</div>
			<ul className="space-y-2 text-sm mt-[16px] max-h-[60vh] sm:max-h-[50vh] md:max-h-[50vh] overflow-y-auto pr-2 scroll-thin">
				{ordenarHistoricoPorMes(historico).map((ext) => {
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
											{formatarParaBRL(trasacao.valor)}
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
