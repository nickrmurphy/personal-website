import { LinkBadge } from "@/components/badge";
import { ProfilePhoto } from "@/components/profile-photo";
import { ValueItem, Values } from "@/components/values";
import { WorkHistory, WorkItem } from "@/components/work-history";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

const workHistory: WorkItem[] = [
  {
    title: "Senior Software Engineer",
    company: "Higharc",
    location: "Remote",
    period: "2026 – Present",
  },
  {
    title: "Founding Senior Software Engineer",
    company: "STEAMe",
    location: "Chicago, IL",
    period: "2024 – 2026",
  },
  {
    title: "Senior Software Engineer",
    company: "Unite Us",
    location: "Remote",
    period: "2021 – 2023",
  },
  {
    title: "Development Team Manager",
    company: "Applied Systems",
    location: "University Park, IL",
    period: "2019 – 2021",
  },
];

const values: ValueItem[] = [
  { title: "Be kind to others, and to yourself." },
  { title: "Live in moments, not milestones." },
  { title: "Do what's right, even when it's hard." },
  { title: "Leave things better than you found them." },
];

function App() {
  return (
    <main className="space-y-16 px-4 py-10 sm:p-10 max-w-5xl mx-auto min-h-screen">
      <header className="flex flex-col-reverse sm:flex-row gap-8">
        <div className="w-full sm:w-2/3 flex flex-col items-start justify-start gap-6">
          <div className="space-y-4">
            <h1 className="text-display-3 sm:text-display-2 lg:text-display-1 font-extrabold uppercase tracking-(--eb-letter-spacing-display) text-balance text-center sm:text-left">
              Hi! I'm Nick.
            </h1>
            <p className="text-title font-normal max-w-prose text-center sm:text-left">
              I'm a software engineer based in Chicago. I care about helping people do their best
              work, through the products I build and the teams I'm part of.
            </p>
          </div>
          <div className="flex gap-3 mt-auto flex-wrap justify-center sm:justify-start w-full">
            <LinkBadge href="https://github.com/nickrmurphy" label="GitHub">
              <GithubLogoIcon weight="bold" />
              <span className="sm:block hidden">GitHub</span>
            </LinkBadge>
            <LinkBadge href="https://www.linkedin.com/in/nrmurphy" label="LinkedIn">
              <LinkedinLogoIcon weight="bold" />
              <span className="sm:block hidden">LinkedIn</span>
            </LinkBadge>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
          <ProfilePhoto src="/avatar-circle.svg" alt="Nick Murphy" />
        </div>
      </header>
      <WorkHistory items={workHistory} />
      <Values items={values} />
    </main>
  );
}
