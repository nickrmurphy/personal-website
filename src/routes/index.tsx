import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <div>
      <h2>Welcome!</h2>
      <p>This is your personal site starter.</p>
    </div>
  );
}
