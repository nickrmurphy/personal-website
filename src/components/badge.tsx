export function LinkBadge({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="hover:bg-black/5 dark:hover:bg-white/10 font-medium transition-all active:scale-95 rounded-full border gap-1.5 text-sm border-black/20 dark:border-white/20 p-3 sm:px-3 sm:py-2 flex items-center justify-center [&>svg]:size-5 sm:[&>svg]:size-4"
      target="_blank"
    >
      {children}
    </a>
  );
}
