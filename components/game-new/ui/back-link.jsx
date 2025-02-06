import { ArrowLeft } from "./icons/arrow-left-icon";
import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="#"
      className="flex items-center gap-2 font-Inter text-xs font-normal leading-4 text-teal-600 transition-colors hover:text-teal-500"
    >
      <ArrowLeft />
      На главную
    </Link>
  );
}
