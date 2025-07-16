import { ReactNode } from "react";

interface ButtonIconProps {
	icon: ReactNode;
	size?: number;
	className?: string;
	onClick?: () => void;
}

export default function ButtonIcon({
	icon,
	size = 40,
	className = '',
	onClick,
}: ButtonIconProps) {
	const baseClasses = `
    flex items-center justify-center
    rounded-full border border-solid
     ${className}
  `;

	return (
		<button className={baseClasses} style={{ width: size, height: size }}>
			{icon}
		</button>
	);
}
