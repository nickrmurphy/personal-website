import { SuitcaseSimpleIcon } from "@phosphor-icons/react";

export type WorkItem = {
  title: string;
  company: string;
  location: string;
  period: string;
};

export function WorkHistory({ items }: { items: WorkItem[] }) {
  return (
    <section className="space-y-3 p-4 borderx border-white/10 rounded-xl max-w-xl">
      <h2 className="sm:text-lg font-medium font-rubik flex items-center gap-2">
        <SuitcaseSimpleIcon className="size-4" weight="bold" />
        Work
      </h2>
      {/* Items */}
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="text-sm sm:text-base font-semibold">{item.title}</div>
              <div className="text-xs sm:text-sm text-black/50 dark:text-white/50">
                {item.period}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-black/50 dark:text-white/50">
              <span className="font-medium">{item.company}</span> - {item.location}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
