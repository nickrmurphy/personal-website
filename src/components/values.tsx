import { SectionHeading } from "@/components/section-heading";

export type ValueItem = {
  title: string;
  // Optional one-line note shown under the title.
  description?: string;
};

export function Values({ items }: { items: ValueItem[] }) {
  return (
    <section>
      <SectionHeading>Values</SectionHeading>
      <ul className="grid sm:grid-cols-2 gap-x-10">
        {items.map((value, index) => (
          <li key={value.title} className="py-5 border-b border-eb-muted flex gap-4">
            <div className="font-semibold text-eb-text-muted tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="space-y-1">
              <div className="text-title">{value.title}</div>
              {value.description && (
                <div className="text-eb-text-muted max-w-prose">{value.description}</div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
