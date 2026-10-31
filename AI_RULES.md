# Tech Stack

- TanStack Start (React 19 full-stack framework) with TypeScript, built on Vite.
- File-based routing with TanStack Router: every page is a file in `src/routes/` (e.g. `src/routes/about.tsx` → `/about`). `src/routes/__root.tsx` is the shared layout and HTML shell; it must render `<Outlet />`.
- Never use react-router-dom, `src/pages/`, `src/App.tsx` or `index.html` — they do not exist in this project.
- Never edit `src/routeTree.gen.ts`; it is generated automatically.
- Navigation uses `<Link to="/path">` and `useNavigate()` from `@tanstack/react-router`. Create the route file before linking to it.
- Page titles and SEO tags use the route's `head()` option.
- Server-only logic (secrets, database calls, external APIs with keys) uses `createServerFn` from `@tanstack/react-start`. Do not read secrets in components.
- Styling uses Tailwind CSS v4, configured in `src/styles.css` with CSS variables (no tailwind.config file).
- Use shadcn/ui components (in `src/components/ui/`) and lucide-react icons. Add more shadcn components as needed.
- Browser-only APIs (window, localStorage) must run inside `useEffect` or event handlers, because pages render on the server first.
- Keep `src/routes/index.tsx` as the main page; put reusable components in `src/components/`.
