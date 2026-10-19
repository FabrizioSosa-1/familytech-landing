import type { VercelRequest, VercelResponse } from "@vercel/node";
import { submitGeneration } from "./_client.js";

// POST /api/higgsfield/generate
// Body: { "model": "higgsfield-ai/soul/v2/standard", "input": { ...model-specific fields } }
// Works for any model id Higgsfield exposes — see https://console.higgsfield.ai.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { model, input } = req.body ?? {};
  if (typeof model !== "string" || !model) {
    return res.status(400).json({ error: '"model" is required, e.g. "higgsfield-ai/soul/v2/standard"' });
  }
  if (typeof input !== "object" || input === null) {
    return res.status(400).json({ error: '"input" is required (the model\'s own request body)' });
  }

  try {
    const idempotencyKey = typeof req.headers["idempotency-key"] === "string"
      ? req.headers["idempotency-key"]
      : undefined;
    const result = await submitGeneration(model, input, idempotencyKey);
    return res.status(202).json(result);
  } catch (err) {
    console.error("higgsfield generate failed", err);
    return res.status(502).json({ error: (err as Error).message });
  }
}
