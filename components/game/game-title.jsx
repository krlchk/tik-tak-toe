import { ArrowLeft } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { TimerIcon } from "./icons/timer-icon";
import Link from "next/link";

export function GameTitle({ playersCount }) {
  return (
    <div className="flex flex-col gap-1 pl-4">
      <Link
        href="#"
        className="flex items-center gap-2 font-Inter text-xs font-normal leading-4 text-teal-600 transition-colors hover:text-teal-500"
      >
        <ArrowLeft />
        На главную
      </Link>
      <h1 className="font-Inter text-4xl font-normal leading-10">
        Крестики нолики
      </h1>
      <div className="flex items-center gap-3 font-Inter text-xs font-normal leading-4 text-[#94A3B8]">
        <StarIcon />
        <div className="flex items-center">
          <UserIcon />
          <p className="ml-1">{playersCount}</p>
        </div>
        <div className="flex items-center">
          <TimerIcon />
          <p className="ml-1">1 мин на ход</p>
        </div>
      </div>
    </div>
  );
}
