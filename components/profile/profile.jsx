import Image from "next/image";
import manLogo from "./icons/man.png";
import clsx from "clsx";

export function Profile({ className, name, rating, avatar = manLogo }) {
  return (
    <div className={clsx("flex items-center gap-2 text-teal-600", className)}>
      <Image src={avatar} className="h-12 w-12" alt="logo" unoptimized />
      <div className="flex flex-col overflow-hidden">
        <div className="font-Inter truncate text-lg font-normal leading-6">{name}</div>
        <div className="font-Inter text-xs font-normal leading-4 text-[#94A3B8]">
          Рейтинг: {rating}
        </div>
      </div>
    </div>
  );
}
