import { RoundIcon } from "./icons/round-icon";
import { CrossIcon } from "./icons/cross-icon";
import { TriangleIcon } from "./icons/triangle-icon";
import { SquareIcon } from "./icons/square-icon";
import { GAME_SYMBOLS } from "../constants";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOLS.CROSS]: CrossIcon,
      [GAME_SYMBOLS.ROUND]: RoundIcon,
      [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
