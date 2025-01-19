import { GameInfo, GameTitle, GameField } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="mx-auto max-w-[616px] pt-6">
        <GameTitle />
        <GameInfo className="mt-5" />
        <GameField className="mt-6" />
      </main>
    </div>
  );
}
