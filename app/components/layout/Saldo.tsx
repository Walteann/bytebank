"use client";

import { useSaldoStore } from "@/app/shared/stores/saldoStorage";
import { formatarParaBRL } from "@/app/shared/utils/formatar-currency";
import { IoEye, IoEyeOff  } from "react-icons/io5";
import { useState } from "react";

export default function Saldo() {
	const saldoDaConta = useSaldoStore((state) => state.saldo);

	const [showSaldo, setShowSaldo] = useState(true);

	const toggleSaldo = () => setShowSaldo((prev) => !prev);

	const dataAtual = new Date().toLocaleDateString("pt-BR", {
		weekday: "long",
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
	});

	const dataFormatada =
		dataAtual.charAt(0).toUpperCase() + dataAtual.slice(1);

	return (
		<section className="bg-primary text-white rounded-default flex justify-center items-center flex-col pt-[40px]  bg-custom-pixel mb-[24px]">
			<div className="sm:w-full sm:w-[500px] sm:pl-[32px] sm:pr-[32px]">
				<h2 className="font-semibold text-xl">Olá, Joana! :)</h2>
				<div className="flex flex-col sm:flex-row sm:justify-between">
					<span className="font-regular text-sm">
						{dataFormatada}
					</span>
					<div className="min-w-[200px] max-w-max">
						<div className="flex items-center gap-[25px] p-[16px] pl-0">
							<span className="font-semibold text-lg">Saldo</span>
							<button
								className="w-[20px] h-[20px] hover:cursor-pointer"
								onClick={toggleSaldo}
							>
								{showSaldo ? (
									<IoEye className="text-[20px] text-accent" />
								) : (
									<IoEyeOff className="text-[20px] text-accent" />
								)}
							</button>
						</div>
						<hr className="border-t-2 border-accent" />
						<p className="font-regular text-md pt-[16px] pb-[8px]">
							Conta Corrente
						</p>
						<p className="font-regular text-[31px]">
							{showSaldo
								? formatarParaBRL(saldoDaConta)
								: "••••••••"}
						</p>
					</div>
				</div>

				<div className="h-[384px] sm:h-[152px]"></div>
			</div>
		</section>
	);
}
