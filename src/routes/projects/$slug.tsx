import { ArrowLeftIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { getProject } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project.meta;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} · Nick Murphy` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.summary },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const { Content } = getProject(project.slug)!;

  return (
    <main className="px-4 py-10 sm:p-10 max-w-3xl mx-auto min-h-screen space-y-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-eb-text-muted hover:text-eb-text transition-colors"
      >
        <ArrowLeftIcon weight="bold" className="size-4" />
        Back
      </Link>
      <img
        src={project.image}
        alt={project.imageAlt}
        className="aspect-video w-full object-cover rounded-surface border border-eb-muted"
      />
      <header className="space-y-3">
        <h1 className="text-display-3 sm:text-display-2 font-extrabold uppercase tracking-(--eb-letter-spacing-display) text-balance">
          {project.title}
        </h1>
        <p className="text-title font-normal text-eb-text-muted max-w-prose">{project.summary}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-eb-accent hover:underline underline-offset-4"
          >
            View project
            <ArrowUpRightIcon weight="bold" className="size-4" />
          </a>
        )}
      </header>
      <article className="prose prose-eb max-w-prose">
        <Content />
      </article>
    </main>
  );
}
