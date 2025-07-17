import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import SidebarMenu from "./components/layout/SidebarMenu";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Bytebank",
	description: "Projeto FIAP",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-br">
			<body className={`${inter.variable} antialiased`}>
				<Header userName="Joana da Silva Oliveira" />

				<main className="flex justify-center @container">
					<div className="flex flex-col  @min-[1024px]:flex-row w-full max-w-[1200px] gap-[24px] pt-[24px] items-start">
						{/* Sidebar horizontal em mobile/tablet, vertical em desktop */}
						<aside className="w-full  @min-[1024px]:w-[180px] @min-[1024px]:bg-white @min-[426px]:p-4 rounded-default">
							<SidebarMenu />
						</aside>

						<section className="flex-1 rounded-default w-full">
							{children}
						</section>

						{/* Histórico visível apenas em desktop */}
						<aside className="hidden lg:block w-[282px] bg-white p-4 rounded-default">
							<div className="flex justify-between">
								<h2 className="font-bold mb-2">Histórico</h2>
							</div>
							<ul className="space-y-2 text-sm">
								<li>+ R$ 100,00</li>
								<li>- R$ 50,00</li>
								<li>+ R$ 20,00</li>
							</ul>
						</aside>
					</div>
				</main>
			</body>
		</html>
	);
}
