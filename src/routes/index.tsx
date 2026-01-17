import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="space-y-2 p-8">
      <header className="grid grid-cols-5 justify-center items-center">
        <div className="col-span-1 p-4">
          <div className="w-full max-w-52 aspect-square rounded-full overflow-hidden">
            <img src="/profile.jpeg" alt="Nick Murphy" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-4 p-8">
          <h1 className="text-4xl font-extrabold">Hi! I'm Nick.</h1>
          <p className="text-xl max-w-prose">
            I'm a software engineer and a person who likes to build things that are cool and
            sometimes lame.
          </p>
        </div>
      </header>
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3 p-4 space-y-6">
          <p className="leading-relaxed max-w-prose">
            As a software engineer, I'm passionate about building things that are cool. I'm a quick
            learner and I'm always looking to improve my skills. I'm also a big fan of the open
            source community and I'm always looking to contribute to open source projects. I'm also
            a big fan of the open source community and I'm always looking to contribute to open
            source projects.
          </p>
          <div className="flex gap-4">
            <div className="size-8 rounded-2xl bg-amber-100" />
            <div className="size-8 rounded-2xl bg-amber-100" />
            <div className="size-8 rounded-2xl bg-amber-100" />
          </div>
        </div>
        <div className="col-span-2 p-4 space-y-4">
          <div className="space-y-2">
            <p>💼 Founding Senior Software Engineer</p>
            <p className="text-sm text-gray-500">June 2021 - Present</p>
            <p>💼 Senior Software Engineer</p>
            <p className="text-sm text-gray-500">June 2019 - June 2021</p>
            <p>💼 Software Developer</p>
            <p className="text-sm text-gray-500">June 2018 - June 2019</p>
            <p>🎓 B.S. in Computer Science</p>
            <p className="text-sm text-gray-500">June 2014 - June 2018</p>
          </div>
          <span>Learn more</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 w-full">
        <div className="size-full bg-amber-100 rounded-xl min-h-60" />
        <div className="size-full bg-amber-100 rounded-xl min-h-60" />
        <div className="size-full bg-amber-100 rounded-xl min-h-60" />
        {/* <div className="size-full bg-amber-400 min-h-60" />
        <div className="size-full bg-amber-400 min-h-60" /> */}
      </div>
    </main>
  );
}
