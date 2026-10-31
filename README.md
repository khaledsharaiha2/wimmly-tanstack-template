# Wimmly TanStack Start App

Starter project: TanStack Start, React 19, Vite, Tailwind CSS v4, shadcn/ui, Vitest and TypeScript.

```
pnpm install
pnpm dev      # http://localhost:5173
```

| Command          | What it does                       |
| ---------------- | ---------------------------------- |
| `pnpm dev`       | Dev server with hot reload         |
| `pnpm build`     | Production build                   |
| `pnpm preview`   | Serve the built app                |
| `pnpm test`      | Run the Vitest suite               |
| `pnpm lint`      | ESLint                             |
| `pnpm format`    | Prettier write                     |
| `pnpm typecheck` | `tsc --noEmit`                     |

## Layout

- `src/routes/` — file-based routes; `__root.tsx` is the HTML shell, `README.md` here lists the routing conventions.
- `src/components/ui/` — shadcn/ui primitives.
- `src/lib/` — `cn()` helper, server-error capture, the fallback error page, client error reporting.
- `src/test/` — Vitest setup and a routing smoke test.
- `AI_RULES.md` — the rules the builder's agent follows when editing this app.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
