"use client";

import { useState } from "react";

interface InputNumberProps {
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  monetary?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}

export default function InputNumber({
  id,
  name,
  label,
  placeholder,
  monetary = false,
  className = '',
  onChange,
}: InputNumberProps) {
  const [value, setValue] = useState("");

  const formatMonetary = (input: string) => {
    const digits = input.replace(/\D/g, ""); 
    const number = (parseInt(digits || "0", 10) / 100).toFixed(2);
    return number.replace(".", ",");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    if (monetary) {
      const formatted = formatMonetary(input);
      setValue(formatted);
      const numeric = parseFloat(formatted.replace(",", ".")) || 0;
      onChange?.(numeric);
    } else {
      const digits = input.replace(/\D/g, "");
      setValue(digits);
      const numeric = parseInt(digits, 10) || 0;
      onChange?.(numeric);
    }
  };

  return (
    <div className={'flex flex-col gap-[16px] ' + className}>
      {label && (
        <label htmlFor={id} className="text-md text-neutral-500 font-semibold">
          {label}
        </label>
      )}
      <input
        id={id}
        name={name}
        inputMode="numeric"
        pattern="\d*"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="border border-primary rounded-default px-4 py-2 text-center bg-white focus:outline-none focus:ring-0"
      />
    </div>
  );
}
