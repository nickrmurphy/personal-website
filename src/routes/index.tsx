import { LinkBadge } from "@/components/badge";
import { ProfilePhoto } from "@/components/profile-photo";
import { WorkHistory, WorkItem } from "@/components/work-history";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

const workHistory: WorkItem[] = [
  {
    title: "Founding Senior Software Engineer",
    company: "STEAMe",
    location: "Chicago, IL",
    period: "2024 - Present",
  },
  {
    title: "Senior Software Engineer",
    company: "Unite Us",
    location: "Remote",
    period: "2021 - 2024",
  },
  {
    title: "Software Developer",
    company: "Applied Systems",
    location: "University Park, IL",
    period: "2019 - 2021",
  },
];

function App() {
  return (
    <main className="space-y-8 p-2 py-8 sm:p-6 max-w-5xl mx-auto h-screen border-x border-black/10 bg-gray-100 dark:bg-gray-950 shadow-sm">
      <header className="flex flex-col-reverse sm:flex-row p-2 lg:p-6 gap-6">
        <div className="w-full sm:w-2/3 flex flex-col items-start justify-start gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold font-rubik text-center sm:text-left">
              Hi! I'm Nick.
            </h1>
            <p className="text-base sm:text-lg max-w-prose font-medium text-center sm:text-left">
              I'm a Software Engineer based in Chicago, building mission-driven products from the
              ground up.
            </p>
          </div>
          <div className="flex gap-4 mt-auto flex-wrap justify-center sm:justify-start w-full">
            <LinkBadge href="https://github.com/nickrmurphy">
              <GithubLogoIcon />
              <span className="sm:block hidden">GitHub</span>
            </LinkBadge>
            <LinkBadge href="https://www.linkedin.com/in/nrmurphy">
              <LinkedinLogoIcon className="size-4" />
              <span className="sm:block hidden">LinkedIn</span>
            </LinkBadge>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
          <ProfilePhoto src="/profile.jpeg" alt="Nick Murphy" />
        </div>
      </header>
      <WorkHistory items={workHistory} />
    </main>
  );
}
