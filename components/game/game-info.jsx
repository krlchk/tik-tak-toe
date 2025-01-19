import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { RoundIcon } from "./icons/round-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { SquareIcon } from "./icons/square-icon";
import clsx from "clsx";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-between rounded-2xl bg-white px-8 py-4 font-Inter text-lg font-semibold leading-5 shadow-md",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative">
          <Profile className="w-44" />
          <div className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <div>01:08</div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-orange-600">01:08</div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className="w-44" />
          <div className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white">
            <RoundIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
