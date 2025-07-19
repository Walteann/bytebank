import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import ButtonIcon from "../ui/ButtonIcon";

const EXTRATO = [
  {
    "id": 1,
    "mesReferencia": "Julho",
    "valor": 1000.00,
    "tipoOperacao": "Depósito",
    "data": "05/07/2025"
  },
  {
    "id": 2,
    "mesReferencia": "Julho",
    "valor": -500.00,
    "tipoOperacao": "Transferência",
    "data": "08/07/2025"
  },
  {
    "id": 3,
    "mesReferencia": "Junho",
    "valor": 250.00,
    "tipoOperacao": "Depósito",
    "data": "15/06/2025"
  },
  {
    "id": 4,
    "mesReferencia": "Maio",
    "valor": -1200.00,
    "tipoOperacao": "Transferência",
    "data": "20/05/2025"
  },
  {
    "id": 5,
    "mesReferencia": "Maio",
    "valor": 300.00,
    "tipoOperacao": "Depósito",
    "data": "25/05/2025"
  }
]

export default function Extrato() {
	return (
		<div className="w-full sm:max-w-[240px] md:max-w-[240px]">
			<div className="flex justify-between  align-center mt-[8px]">                
				<h2 className="font-bold text-xl">Histórico</h2>
                <div className="flex gap-[15px]">
                    <ButtonIcon className="bg-primary" icon={<PencilIcon className="p-[6px] text-white"/>}/>
                    <ButtonIcon className="bg-primary" icon={<TrashIcon className="p-[6px] text-white"/>}/>
                </div>
			</div>
			<ul className="space-y-2 text-sm">
                {EXTRATO.map(ext => {
                    return (
                    <li key={ext.id} className="mt-[16px]">
                        <div className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[75%] after:border-b after:border-success pb-[8px]">
                        <h4 className="font-semibold text-success text-sm">{ext.mesReferencia}</h4>
                        <div className="flex justify-between mt-[4px]">
                            <span className="font-regular text-md">{ext.tipoOperacao}</span>
                            <span className="font-regular text-sm text-neutral-grey">{ext.data}</span>
                        </div>
                        <span className="font-semibold text-md pt-[8px]">R$ {ext.valor}</span>
                        </div>
                    </li>
                    )
                })}



			</ul>
		</div>
	);
}
