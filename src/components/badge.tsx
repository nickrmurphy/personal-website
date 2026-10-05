// EB secondary Button: a 40px outlined pill. Collapses to an icon-only circle below `sm`.
export function LinkBadge({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 w-10 sm:w-auto items-center justify-center gap-2 sm:px-5 rounded-pill border border-eb-border text-body leading-none font-semibold text-eb-text whitespace-nowrap select-none transition-[background-color,border-color,color,transform] duration-200 ease-(--eb-ease-standard) hover:bg-eb-muted hover:border-eb-text-muted active:scale-98 [&>svg]:size-4 [&>svg]:flex-none"
    >
      {children}
    </a>
  );
}
