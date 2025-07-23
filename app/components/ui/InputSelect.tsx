"use client";

import { useEffect, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup  } from "react-icons/io";

interface Option {
	value: string;
	label: string;
}

interface InputSelectProps {
	id?: string;
	name?: string;
    label?: string;
	options: Option[];
    className?: string | undefined;
	value?: string | undefined;
	onChange: (value: string) => void;
	placeholder?: string;
}

export default function InputSelect({
	options,
	onChange,
    className,
	value,
	placeholder = "Selecione o tipo de transação",
}: InputSelectProps) {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<Option | null>(null);

	useEffect(() => {
		const found = options.find((option) => option.value === value) || null;
		setSelected(found);
	}, [value, options]);

	const handleSelect = (option: Option) => {
		setSelected(option);
		onChange(option.value);
		setOpen(false);
	};

	return (
		<div className={'relative inline-block w-full ' + className}>
			<button
                type="button"
				onClick={() => setOpen((prev) => !prev)}
				className="w-full border border-primary text-primary py-2 px-4 rounded-default flex justify-between items-center bg-white font-regular"
			>
				<span>{selected ? selected.label : placeholder}</span>
				{open ? (
					<IoMdArrowDropup className="w-4 h-4 text-primary" />
				) : (
					<IoMdArrowDropdown className="w-4 h-4 text-primary" />
				)}
			</button>

			{open && (
				<ul className="absolute w-full border border-primary mt-[-2px] rounded bg-white z-10 shadow-sm">
					{options.map((option) => (
						<li
							key={option.value}
							onClick={() => handleSelect(option)}
							className={`px-4 py-2 cursor-pointer text-primary ${
								selected?.value === option.value
									? "bg-neutral-500 font-bold text-primary"
									: "hover:bg-neutral-500"
							}`}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
