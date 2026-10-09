export type ValueItem = {
  title: string;
  description: string;
};

export function Values({ items }: { items: ValueItem[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-body font-semibold text-eb-accent">Values</h2>
      <ul className="grid sm:grid-cols-2 gap-x-10 border-t border-eb-muted">
        {items.map((value, index) => (
          <li key={value.title} className="py-5 border-b border-eb-muted flex gap-4">
            <div className="font-semibold text-eb-accent tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="space-y-1">
              <div className="text-title">{value.title}</div>
              <div className="text-eb-text-muted max-w-prose">{value.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
