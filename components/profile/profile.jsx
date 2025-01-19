import Image from "next/image";
import manLogo from "./icons/man.png";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div className={clsx("flex items-center gap-2 text-teal-600", className)}>
      <Image src={manLogo} alt="logo" unoptimized />
      <div className="flex flex-col">
        <div className="font-Inter text-lg font-normal leading-6">
          Paromovevg
        </div>
        <div className="font-Inter text-xs font-normal leading-4 text-[#94A3B8]">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}
