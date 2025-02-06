import avatar1 from "./ui/images/manOne.png";
import avatar2 from "./ui/images/girlOne.png";
import avatar3 from "./ui/images/girlTwo.png";
import avatar4 from "./ui/images/manTwo.png";

export const GAME_SYMBOLS = {
  ROUND: "round",
  CROSS: "cross",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ROUND,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
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
