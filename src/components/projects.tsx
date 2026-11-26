import { Link } from "@tanstack/react-router";

import { SectionHeading } from "@/components/section-heading";
import type { ProjectMeta } from "@/lib/projects";

// A grid rather than a scroll row so every project is visible at once.
export function Projects({ items }: { items: ProjectMeta[] }) {
  return (
    <section className="space-y-6">
      <SectionHeading>Projects</SectionHeading>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <li key={project.slug}>
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="group flex flex-col gap-3"
            >
              <div className="overflow-hidden rounded-surface border border-eb-muted transition-colors duration-200 ease-(--eb-ease-standard) group-hover:border-eb-border">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="aspect-video w-full object-cover transition-transform duration-200 ease-(--eb-ease-standard) group-hover:scale-102"
                />
              </div>
              <div className="space-y-1">
                <div className="font-semibold">{project.title}</div>
                <div className="text-eb-text-muted">{project.summary}</div>
                <div className="pt-1 font-semibold text-eb-accent underline-offset-4 group-hover:underline">
                  Read the write-up →
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
