export function LinkBadge({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className=" text-black/90 hover:text-black/90 hover:bg-black/5 font-medium transition-colors rounded-full border gap-1.5 text-sm border-black/20 p-2 sm:px-3 flex items-center justify-center [&>svg]:size-4"
      target="_blank"
    >
      {children}
    </a>
  );
}
