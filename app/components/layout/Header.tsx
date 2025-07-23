import ButtonIcon from "../ui/ButtonIcon";

import { FaRegUser } from "react-icons/fa6";

interface HeaderProps {
    userName: string;
}

export default function Header({userName}: HeaderProps) {
    return (
        <header className="w-full h-[96px] bg-primary flex justify-center">
            <div className="w-full max-w-[1200px] flex justify-end items-center gap-[40px] p-[21px]">
                <span className="text-sm font-semibold text-white">{userName}</span>
                <ButtonIcon className="border-accent" icon={<FaRegUser className="text-[20px] text-accent" />} />
            </div>
        </header>
    );
}