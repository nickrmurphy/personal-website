import { Link } from "@tanstack/react-router";

import type { ProjectMeta } from "@/lib/projects";

// A horizontally scrolling row of project cards that snap into place.
export function Projects({ items }: { items: ProjectMeta[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-body font-semibold text-eb-accent">Projects</h2>
      <ul className="-mx-4 sm:-mx-10 px-4 sm:px-10 scroll-px-4 sm:scroll-px-10 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 sm:[mask-image:linear-gradient(to_right,transparent,black_2.5rem,black_calc(100%-2.5rem),transparent)] [scrollbar-width:thin] [scrollbar-color:var(--eb-muted)_transparent]">
        {items.map((project) => (
          <li key={project.slug} className="w-72 sm:w-80 shrink-0 snap-start">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group block space-y-3"
            >
              <div className="overflow-hidden rounded-surface border border-eb-muted">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-video w-full object-cover transition-transform duration-200 ease-(--eb-ease-standard) group-hover:scale-102"
                />
              </div>
              <div className="space-y-1">
                <div className="font-semibold group-hover:underline underline-offset-4">
                  {project.title}
                </div>
                <div className="text-eb-text-muted">{project.summary}</div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
