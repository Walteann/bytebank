import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import ButtonIcon from "../ui/ButtonIcon";
//
const EXTRATO = [
	{
		id: 1,
		mesReferencia: "Julho",
		transacoes: [
			{
				id: 1,
				valor: 1200.0,
				tipoOperacao: "Depósito",
				data: "03/07/2025",
			},
			{
				id: 2,
				valor: -200.0,
				tipoOperacao: "Transferência",
				data: "10/07/2025",
			},
		],
	},
	{
		id: 2,
		mesReferencia: "Junho",
		transacoes: [
			{
				id: 3,
				valor: 800.0,
				tipoOperacao: "Depósito",
				data: "12/06/2025",
			},
			{
				id: 4,
				valor: -100.0,
				tipoOperacao: "Transferência",
				data: "20/06/2025",
			},
		],
	},
	{
		id: 3,
		mesReferencia: "Maio",
		transacoes: [
			{
				id: 5,
				valor: 950.0,
				tipoOperacao: "Depósito",
				data: "05/05/2025",
			},
			{
				id: 7,
				valor: 100.0,
				tipoOperacao: "Depósito",
				data: "05/05/2025",
			},
			{
				id: 6,
				valor: -300.0,
				tipoOperacao: "Transferência",
				data: "18/05/2025",
			},
		],
	},
];

export default function Extrato() {
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
				{EXTRATO.map((ext) => {
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
