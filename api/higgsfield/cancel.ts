import type { VercelRequest, VercelResponse } from "@vercel/node";
import { cancelRequest } from "./_client.js";

// POST /api/higgsfield/cancel  Body: { "request_id": "..." }
// Only requests still "queued" can be canceled; once "in_progress" it's too late.
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { request_id: requestId } = req.body ?? {};
  if (typeof requestId !== "string" || !requestId) {
    return res.status(400).json({ error: '"request_id" is required' });
  }

  try {
    await cancelRequest(requestId);
    return res.status(204).end();
  } catch (err) {
    console.error("higgsfield cancel failed", err);
    return res.status(502).json({ error: (err as Error).message });
  }
}
