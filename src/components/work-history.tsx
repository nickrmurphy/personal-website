import { SectionHeading } from "@/components/section-heading";

export type WorkItem = {
  title: string;
  company: string;
  location: string;
  startYear: number;
  // "present" marks the current role and shows the Current tag.
  endYear: number | "present";
  previousTitle?: string;
};

export function WorkHistory({ items }: { items: WorkItem[] }) {
  return (
    <section>
      <SectionHeading>Work</SectionHeading>
      <ul>
        {items.map((item) => (
          <li
            key={`${item.company}-${item.startYear}`}
            className="py-4 border-b border-eb-muted grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:gap-x-6 items-baseline"
          >
            <div className="col-span-full sm:col-span-1 text-eb-text-muted tabular-nums whitespace-nowrap">
              {item.startYear} – {item.endYear === "present" ? "Present" : item.endYear}
            </div>
            <div className="space-y-0.5">
              <div className="font-semibold">{item.title}</div>
              <div className="text-eb-text-muted">
                {item.company} · {item.location}
              </div>
              {item.previousTitle && (
                <div className="text-eb-text-muted">Previously {item.previousTitle}</div>
              )}
            </div>
            <div>
              {item.endYear === "present" && (
                <span className="inline-flex items-center h-6 px-2.5 rounded-pill bg-eb-muted text-xs font-semibold leading-none">
                  Current
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
