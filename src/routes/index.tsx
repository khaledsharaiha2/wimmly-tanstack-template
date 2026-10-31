import { createFileRoute } from "@tanstack/react-router";

import { MadeWithWimmly } from "@/components/made-with-wimmly";

// Replace this placeholder screen with the app's real home page.
// Routing conventions live in ./README.md; per-page titles/SEO go in this route's head().
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-background px-4 text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-foreground">
        Your app starts here
      </h1>
      <p className="max-w-md text-sm text-muted-foreground">
        Describe what you want to build and this blank page becomes the first screen of your app.
      </p>
      <MadeWithWimmly />
    </div>
  );
}
