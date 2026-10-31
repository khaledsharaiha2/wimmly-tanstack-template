// Client-side error reporting hook.
//
// The root error boundary and any component that catches a failure calls
// reportAppError() so the failure is visible in one place. By default it only
// writes to the console — nothing is sent anywhere. To ship errors to a logging
// service, set VITE_APP_ERROR_ENDPOINT (a full https URL) in .env and the
// payload below will be POSTed there.

import { describeError } from "./error-capture";

const ENDPOINT = import.meta.env["VITE_APP_ERROR_ENDPOINT"] as string | undefined;

export function reportAppError(error: unknown, context: Record<string, unknown> = {}): void {
  const description = describeError(error);
  console.error(`[app-error] ${JSON.stringify(context)}\n${description}`);

  if (!ENDPOINT) return;

  try {
    void fetch(ENDPOINT, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        message: description.slice(0, 8_000),
        context,
        href: typeof window === "undefined" ? undefined : window.location.href,
        at: new Date().toISOString(),
      }),
      keepalive: true,
    }).catch(() => {
      /* reporting must never break the app */
    });
  } catch {
    /* reporting must never break the app */
  }
}
