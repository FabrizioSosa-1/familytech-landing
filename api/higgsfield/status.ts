import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getRequestStatus } from "./_client.js";

// GET /api/higgsfield/status?request_id=...
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const requestId = req.query.request_id;
  if (typeof requestId !== "string" || !requestId) {
    return res.status(400).json({ error: '"request_id" query param is required' });
  }

  try {
    const result = await getRequestStatus(requestId);
    return res.status(200).json(result);
  } catch (err) {
    console.error("higgsfield status failed", err);
    return res.status(502).json({ error: (err as Error).message });
  }
}
