export type WorkItem = {
  title: string;
  company: string;
  location: string;
  period: string;
};

export function WorkHistory({ items }: { items: WorkItem[] }) {
  return (
    <section className="space-y-4 max-w-xl">
      <h2 className="text-body font-semibold text-eb-accent">Work</h2>
      <ul className="border-t border-eb-muted">
        {items.map((item) => (
          <li
            key={`${item.company}-${item.period}`}
            className="py-4 border-b border-eb-muted space-y-1"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="font-semibold">{item.title}</div>
              <div className="text-eb-text-muted whitespace-nowrap">{item.period}</div>
            </div>
            <div className="text-eb-text-muted">
              {item.company} · {item.location}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
