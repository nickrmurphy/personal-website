import { Link } from "@tanstack/react-router";

import type { ProjectMeta } from "@/lib/projects";

export function Projects({ items }: { items: ProjectMeta[] }) {
  return (
    <section className="space-y-4">
      <h2 className="text-body font-semibold text-eb-accent">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((project) => (
          <li key={project.slug}>
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
