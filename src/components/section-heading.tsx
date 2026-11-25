// Home page section title, ruled underneath so each list starts flush below it.
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-title font-semibold pb-3 border-b border-eb-border">{children}</h2>;
}
