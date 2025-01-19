import clsx from "clsx";

/**
 * Description placeholder
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 * @param {'md' | 'lg'} props.size
 * @param {'primary' | 'outline'} props.variant
 * @returns {JSX.Element}
 */

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors font-normal rounded-lg font-Inter leading-7 py-2 ",
    className,
    {
      md: "px-6 text-md",
      lg: "text-2xl px-5",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClassName}>{children}</button>;
}
