// Server-side only. Never import this from client code or expose HF_CREDENTIALS
// to the browser — the Higgsfield docs explicitly call their client "server-side
// only" for this reason (https://docs.higgsfield.ai/docs/how-to/sdk).
//
// We talk to the REST API directly (https://docs.higgsfield.ai/docs/api-reference)
// instead of the @higgsfield/client SDK because the SDK's documented helper,
// subscribe(), blocks until the job finishes — risky in a serverless function
// with a short timeout. submit/status/cancel give us the same generic,
// model-agnostic flow without blocking.

const BASE_URL = "https://api.higgsfield.ai";

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

function authHeader(): string {
  const credentials = process.env.HF_CREDENTIALS;
  if (!credentials) {
    throw new Error(
      "HF_CREDENTIALS is not set. Add it as an environment variable " +
        '("your-api-key-id:your-api-key-secret"), see .env.example.',
    );
  }
  return `Key ${credentials}`;
}

async function higgsfieldFetch(path: string, init: RequestInit): Promise<Response> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      Authorization: authHeader(),
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`Higgsfield API ${res.status} ${res.statusText}: ${body}`);
  }
  return res;
}

/**
 * Submit a generation request for ANY model available through the Higgsfield
 * API. `model` is the model path exactly as Higgsfield documents it for that
 * model (e.g. "higgsfield-ai/soul/v2/standard") — see https://console.higgsfield.ai
 * to discover model ids. `input` is that model's own request body.
 */
export async function submitGeneration(
  model: string,
  input: Record<string, unknown>,
  idempotencyKey?: string,
): Promise<HiggsfieldSubmitResponse> {
  const res = await higgsfieldFetch(`/${model}`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: idempotencyKey ? { "Idempotency-Key": idempotencyKey } : undefined,
  });
  return res.json() as Promise<HiggsfieldSubmitResponse>;
}

export async function getRequestStatus(requestId: string): Promise<HiggsfieldStatusResponse> {
  const res = await higgsfieldFetch(`/requests/${requestId}/status`, { method: "GET" });
  return res.json() as Promise<HiggsfieldStatusResponse>;
}

export async function cancelRequest(requestId: string): Promise<void> {
  await higgsfieldFetch(`/requests/${requestId}/cancel`, { method: "POST" });
}
