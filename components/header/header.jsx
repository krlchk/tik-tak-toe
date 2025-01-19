import { LogoIcon } from "./icons/logo-icon.jsx";
import { ArrowIcon } from "./icons/arrow-icon.jsx";
import { Profile } from "../profile/index.js";
import { UiButton } from "../uikit/index.js";

export function Header() {
  return (
    <header className="flex h-24 items-center bg-white px-8 shadow-lg">
      <LogoIcon />
      <div className="mx-6 h-8 w-px bg-slate-200"></div>
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex items-center gap-2 text-teal-600 transition-colors hover:text-teal-500">
        <Profile />
        <ArrowIcon />
      </button>
    </header>
  );
}
