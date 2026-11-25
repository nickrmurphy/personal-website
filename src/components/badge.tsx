const variantClasses = {
  // EB primary Button: a filled cream pill, for the one link that matters most.
  primary: "bg-eb-primary border-eb-primary text-eb-primary-text hover:bg-white hover:border-white",
  // EB secondary Button: an outlined pill.
  secondary: "border-eb-border text-eb-text hover:bg-eb-muted hover:border-eb-text-muted",
};

// A 40px pill link that collapses to an icon-only circle below `sm`.
export function LinkBadge({
  children,
  href,
  label,
  variant,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
  variant: keyof typeof variantClasses;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex h-10 w-10 sm:w-auto items-center justify-center gap-2 sm:px-5 rounded-pill border text-body leading-none font-semibold whitespace-nowrap select-none transition-[background-color,border-color,color,transform] duration-200 ease-(--eb-ease-standard) active:scale-98 [&>svg]:size-4 [&>svg]:flex-none ${variantClasses[variant]}`}
    >
      {children}
    </a>
  );
}
