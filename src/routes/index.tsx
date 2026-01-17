import { LinkBadge } from "@/components/badge";
import { ProfilePhoto } from "@/components/profile-photo";
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="space-y-2 p-2 sm:p-6 max-w-5xl mx-auto h-screen border-x border-black/10 bg-gray-100 shadow-sm">
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
              <GithubLogoIcon weight="bold" />
              <span className="sm:block hidden">GitHub</span>
            </LinkBadge>
            <LinkBadge href="www.linkedin.com/in/nrmurphy">
              <LinkedinLogoIcon weight="bold" className="size-4" />
              <span className="sm:block hidden">LinkedIn</span>
            </LinkBadge>
          </div>
        </div>
        <div className="w-full sm:w-1/3 flex justify-center sm:justify-end">
          <ProfilePhoto src="/profile.jpeg" alt="Nick Murphy" />
        </div>
      </header>
    </main>
  );
}
