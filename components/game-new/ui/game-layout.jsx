export function GameLayout({ backLink, title, gameInfo, playersList }) {
  return (
    <div>
      <div className="flex flex-col gap-1 pl-4">
        {backLink}
        {title}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 grid grid-cols-2 items-center justify-between gap-3 rounded-2xl bg-white px-8 py-4 font-Inter text-lg font-semibold leading-5 shadow-md"
        }
      >
        {playersList}
      </div>
    </div>
  );
}
