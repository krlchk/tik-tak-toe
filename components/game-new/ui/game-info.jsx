import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { TimerIcon } from "./icons/timer-icon";

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className="flex items-center gap-3 font-Inter text-xs font-normal leading-4 text-[#94A3B8]">
      {isRatingGame ?? <StarIcon />}
      <div className="flex items-center">
        <UserIcon />
        <p className="ml-1">{playersCount}</p>
      </div>
      <div className="flex items-center">
        <TimerIcon />
        <p className="ml-1">{timeMode}</p>
      </div>
    </div>
  );
}
