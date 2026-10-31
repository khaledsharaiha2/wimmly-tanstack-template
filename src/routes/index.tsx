import { createFileRoute } from "@tanstack/react-router";
import { MadeWithWimmly } from "@/components/made-with-wimmly";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
      </div>
      <MadeWithWimmly />
    </div>
  );
}
