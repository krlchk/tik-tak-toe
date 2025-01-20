import { Profile } from "../profile";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";
import { GAME_SYMBOLS } from "./constants";

import avatar1 from "./images/manOne.png";
import avatar2 from "./images/girlOne.png";
import avatar3 from "./images/girlTwo.png";
import avatar4 from "./images/manTwo.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatar1,
    symbol: GAME_SYMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: 850,
    avatar: avatar2,
    symbol: GAME_SYMBOLS.ROUND,
  },
  {
    id: 3,
    name: "Lara",
    rating: 1400,
    avatar: avatar3,
    symbol: GAME_SYMBOLS.TRIANGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: 760,
    avatar: avatar4,
    symbol: GAME_SYMBOLS.SQUARE,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "grid grid-cols-2 items-center justify-between gap-3 rounded-2xl bg-white px-8 py-4 font-Inter text-lg font-semibold leading-5 shadow-md",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          isRight={index && index % 2 === 1}
          playerInfo={player}
          key={player.id}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
          isTimerRuning={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimerRuning, onTimeOver }) {
  const [seconds, setSeconds] = useState(6);
  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");
  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRuning) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(6);
      };
    }
  }, [isTimerRuning]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

  const getTimerColor = () => {
    if (isTimerRuning) {
      return isDanger ? "text-orange-600" : "text-black";
    }
    return "text-slate-300";
  };

  return (
    <div className="flex items-center gap-3">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white">
          <GameSymbol symbol={playerInfo.symbol} />
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
