import Image from "next/image";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function PlayerInfo({
  isRight,
  name,
  rating,
  avatar,
  symbol,
  isTimerRuning,
  seconds,
}) {
    
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimerRuning) {
      return isDanger ? "text-orange-600" : "text-black";
    }
    return "text-slate-300";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <div className="flex items-center gap-2 text-teal-600 w-44">
          <Image src={avatar} className="h-12 w-12" alt="logo" unoptimized />
          <div className="flex flex-col overflow-hidden">
            <div className="truncate font-Inter text-lg font-normal leading-6">
              {name}
            </div>
            <div className="font-Inter text-xs font-normal leading-4 text-[#94A3B8]">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          isRight && "order-1",
          isDanger ? "text-orange-600" : "text-black",
          getTimerColor(),
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
