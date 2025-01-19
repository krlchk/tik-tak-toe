import clsx from "clsx";
import { RoundIcon } from "./icons/round-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit";

export function GameField({ className }) {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col rounded-2xl bg-white px-8 pb-7 pt-5 shadow-md",
      )}
    >
      <div className="flex justify-between font-Inter">
        <div>
          <div className="flex items-center gap-1 text-xl font-semibold leading-6">
            Ход:
            <RoundIcon className="h-5 w-5" />
          </div>
          <div className="flex items-center gap-1 text-xs font-normal leading-4 text-slate-400">
            Следующий:
            <CrossIcon />
          </div>
        </div>
        <div className="flex justify-between gap-3">
          <UiButton size="md" children="Ничья" variant="primary" />
          <UiButton size="md" children="Сдаться" variant="outline" />
        </div>
      </div>
    </div>
  );
}
