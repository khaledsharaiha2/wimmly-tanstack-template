import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Plugin order matters: tailwindcss first, then the Start plugin, then nitro
// (which turns the build into a runnable server in .output/), then React.
// Do not add @vitejs/plugin-react or tailwindcss a second time.
export default defineConfig({
  server: { host: "0.0.0.0", port: 5173, strictPort: true },
  // Resolves the "@/*" alias from tsconfig.json for both the browser and SSR builds.
  resolve: { tsconfigPaths: true },
  plugins: [
    tailwindcss(),
    // `server.entry` keeps SSR running through src/server.ts, which renders the
    // fallback error page when the server throws.
    tanstackStart({ server: { entry: "server" } }),
    nitro(),
    viteReact(),
  ],
});
