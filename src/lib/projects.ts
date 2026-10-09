import type { MDXContent } from "mdx/types";

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  image: string;
  imageAlt: string;
  link?: string;
  order: number;
};

type ProjectModule = {
  default: MDXContent;
  frontmatter: Omit<ProjectMeta, "slug">;
};

// Every project is bundled at build time; Workers can't read files at runtime.
const modules = import.meta.glob<ProjectModule>("../content/projects/*.mdx", { eager: true });

const slugOf = (path: string) =>
  path
    .split("/")
    .pop()!
    .replace(/\.mdx$/, "");

const all = Object.entries(modules)
  .map(([path, mod]) => ({
    meta: { ...mod.frontmatter, slug: slugOf(path) },
    Content: mod.default,
  }))
  .sort((a, b) => a.meta.order - b.meta.order);

export const projects: ProjectMeta[] = all.map((project) => project.meta);

export function getProject(slug: string) {
  return all.find((project) => project.meta.slug === slug);
}
