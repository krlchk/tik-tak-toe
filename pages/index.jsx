// import {
//   GameInfo,
//   GameTitle,
//   GameField,
//   useGameState,
//   GameSymbol,
// } from "../components/game";
import { Header } from "../components/header";
import { Game } from "../components/game-new";

export default function HomePage() {
  // const [playersCount] = useState(4);
  // const {
  //   cells,
  //   currentMove,
  //   handleCellClick,
  //   nextMove,
  //   winnerSequence,
  //   handlePlayerTimeOver,
  //   winnerSymbol,
  // } = useGameState(playersCount);

  return (
    <HomePageLayout header={<Header />}>
      <Game />
    </HomePageLayout>
  );
}

function HomePageLayout({ header, children }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {header}
      <main className="mx-auto w-max pt-6">{children}</main>
    </div>
  );
}
