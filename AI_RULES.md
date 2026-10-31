# Tech Stack

- TanStack Start (React 19 full-stack framework) with TypeScript, built on Vite.
- File-based routing with TanStack Router: every page is a file in `src/routes/` (e.g. `src/routes/about.tsx` → `/about`). `src/routes/__root.tsx` is the shared layout and HTML shell; it must render `<Outlet />`.
- Never use react-router-dom, `src/pages/`, `src/App.tsx` or `index.html` — they do not exist in this project.
- Never edit `src/routeTree.gen.ts`; it is generated automatically.
- Navigation uses `<Link to="/path">` and `useNavigate()` from `@tanstack/react-router`. Create the route file before linking to it.
- Page titles and SEO tags use the route's `head()` option.
- Server-only logic (secrets, database calls, external APIs with keys) uses `createServerFn` from `@tanstack/react-start`. Do not read secrets in components.
- A module that must never reach the browser is named `*.server.ts`, or imports `@tanstack/react-start/server-only`. The Next.js `server-only` package is not available here.
- Styling uses Tailwind CSS v4, configured in `src/styles.css` with CSS variables (no tailwind.config file). Use the semantic tokens (`bg-background`, `text-muted-foreground`, `border-input`, …) — never hardcoded hex colors or `bg-white`/`text-black`, so dark mode keeps working.
- shadcn/ui components are pre-installed in `src/components/ui/` (button, dialog, table, form, select, tabs, sidebar, chart, …) with `lucide-react` icons. Use `cn()` from `@/lib/utils` for conditional classes. Add more components with `pnpm dlx shadcn@latest add <name>`.
- Browser-only APIs (window, localStorage) must run inside `useEffect` or event handlers, because pages render on the server first.
- Data fetching on first paint: a route `loader` with `queryClient.ensureQueryData(...)` plus `useSuspenseQuery(...)` in the component; `@tanstack/react-query` is installed and wired through router context.
- Keep `src/routes/index.tsx` as the main page; put reusable components in `src/components/`.
- Tests run with Vitest (`pnpm test`) in jsdom; put them in `src/**/*.test.ts(x)` and keep the routing smoke test in `src/test/` passing.
