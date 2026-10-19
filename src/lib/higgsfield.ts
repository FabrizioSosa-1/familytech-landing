// Client-side helper. Talks only to our own /api/higgsfield/* serverless
// functions — the Higgsfield API key never reaches the browser.

export interface HiggsfieldSubmitResponse {
  status: string;
  request_id: string;
  status_url: string;
  cancel_url: string;
}

export interface HiggsfieldStatusResponse {
  status: "queued" | "in_progress" | "completed" | "failed" | "nsfw" | "canceled";
  request_id: string;
  images?: { url: string }[];
  video?: { url: string };
  audio?: { url: string };
  audios?: { url: string }[];
  error?: unknown;
  [key: string]: unknown;
}

/**
 * Submit a generation job for any model Higgsfield offers. `model` is the
 * model path exactly as Higgsfield documents it (discover ids at
 * https://console.higgsfield.ai), e.g. "higgsfield-ai/soul/v2/standard".
 * `input` is that model's own request body.
 */
export async function generate(
  model: string,
  input: Record<string, unknown>,
): Promise<HiggsfieldSubmitResponse> {
  const res = await fetch("/api/higgsfield/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ model, input }),
  });
  if (!res.ok) throw new Error(`generate failed: ${res.status} ${await res.text()}`);
  return res.json();
}

export async function getStatus(requestId: string): Promise<HiggsfieldStatusResponse> {
  const res = await fetch(`/api/higgsfield/status?request_id=${encodeURIComponent(requestId)}`);
  if (!res.ok) throw new Error(`status failed: ${res.status} ${await res.text()}`);
  return res.json();
}

export async function cancel(requestId: string): Promise<void> {
  const res = await fetch("/api/higgsfield/cancel", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ request_id: requestId }),
  });
  if (!res.ok && res.status !== 204) throw new Error(`cancel failed: ${res.status} ${await res.text()}`);
}

const TERMINAL_STATUSES = new Set(["completed", "failed", "nsfw", "canceled"]);

/**
 * Poll a submitted request until it reaches a terminal status.
 * Defaults: check every 2s, give up after 5 minutes.
 */
export async function pollUntilDone(
  requestId: string,
  { intervalMs = 2000, timeoutMs = 5 * 60 * 1000 }: { intervalMs?: number; timeoutMs?: number } = {},
): Promise<HiggsfieldStatusResponse> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const result = await getStatus(requestId);
    if (TERMINAL_STATUSES.has(result.status)) return result;
    if (Date.now() > deadline) throw new Error(`Timed out waiting for request ${requestId}`);
    await new Promise((r) => setTimeout(r, intervalMs));
  }
}
