import clsx from "clsx";
import { UiButton } from "../uikit";
import { useState } from "react";
import { GAME_SYMBOLS } from "./constants";
import { GameSymbol } from "./game-symbol";

const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ROUND,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

function getNextMove(currentMove) {
  const getMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[getMoveIndex] ?? MOVE_ORDER[0];
}

export function GameField({ className }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOLS.CROSS);
  const nextMove = getNextMove(currentMove);

  const actions = (
    <div className="flex gap-3">
      <UiButton size="md" children="Ничья" variant="primary" />
      <UiButton size="md" children="Сдаться" variant="outline" />
    </div>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((_, index) => (
          <GameCell key={index}></GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "flex flex-col rounded-2xl bg-white px-8 pb-7 pt-5 shadow-md",
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex items-center justify-between font-Inter">
      <div>
        <div className="flex items-center gap-1 text-xl font-semibold leading-6">
          Ход:
          <GameSymbol symbol={currentMove} className="h-5 w-5" />
        </div>
        <div className="flex items-center gap-1 text-xs font-normal leading-4 text-slate-400">
          Следующий:
          <GameSymbol symbol={nextMove} className="h-3 w-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="mt-3 grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)]">
      {children}
    </div>
  );
}

function GameCell({ children }) {
  return (
    <button className="-ml-px -mt-px flex items-center justify-center border border-slate-400">
      {children}
    </button>
  );
}
// 24.14