export function LinkBadge({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="hover:bg-black/5 dark:hover:bg-white/10 font-medium transition-colors rounded-full border gap-1.5 text-sm border-black/20 dark:border-white/20 p-2 sm:px-3 flex items-center justify-center [&>svg]:size-4"
      target="_blank"
    >
      {children}
    </a>
  );
}
