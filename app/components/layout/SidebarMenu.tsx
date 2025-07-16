"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
	{ label: "Início", href: "/" },
	{ label: "Transferências", href: "/transferencias" },
	{ label: "Investimentos", href: "/investimentos" },
	{ label: "Outros serviços", href: "/outros" },
];

export default function SidebarMenu() {
	const pathname = usePathname();

	return (
		<nav className="space-y-6">
			<ul className="space-y-4">
				{menuItems.map((item, index) => {
					const isActive = pathname === item.href;
					const isLast = index === menuItems.length - 1;

					let classes =
						"text-md block pb-1 text-center transition-colors";

					if (isActive) {
						classes +=
							" text-success font-bold border-b-2 border-success";
					} else {
						classes +=
							" text-black font-regular hover:border-success hover:text-success";

						if (!isLast) {
							classes += " border-b border-black";
						}
					}

					return (
						<li key={item.href}>
							<Link href={item.href} className={classes}>
								{item.label}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
