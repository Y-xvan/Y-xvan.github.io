import { getStore } from "@netlify/blobs";

const STORE_NAME = "site-counters";
const COUNTER_KEY = "global-merit-count";
const MAX_RETRIES = 5;

function createStore() {
  return getStore(STORE_NAME);
}

function json(data, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("Content-Type", "application/json; charset=utf-8");
  headers.set("Cache-Control", "no-store");

  return new Response(JSON.stringify(data), {
    ...init,
    headers,
  });
}

function normalizeCount(value) {
  const parsed = Number.parseInt(String(value ?? 0), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

async function readCount(store) {
  const entry = await store.get(COUNTER_KEY, { type: "json" });

  if (entry === null) {
    return 0;
  }

  return normalizeCount(entry.count);
}

async function incrementCount(store) {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt += 1) {
    const entry = await store.getWithMetadata(COUNTER_KEY, { type: "json" });

    const now = new Date().toISOString();

    if (entry === null) {
      const nextValue = { count: 1, updatedAt: now };
      const { modified } = await store.setJSON(COUNTER_KEY, nextValue, {
        onlyIfNew: true,
      });

      if (modified) {
        return nextValue.count;
      }

      continue;
    }

    const currentCount = normalizeCount(entry.data?.count);
    const nextValue = { count: currentCount + 1, updatedAt: now };
    const { modified } = await store.setJSON(COUNTER_KEY, nextValue, {
      onlyIfMatch: entry.etag,
    });

    if (modified) {
      return nextValue.count;
    }
  }

  throw new Error("Could not update merit counter after multiple retries.");
}

export default async (req) => {
  const store = createStore();

  try {
    if (req.method === "GET") {
      const count = await readCount(store);
      return json({ count, source: "netlify-blobs" });
    }

    if (req.method === "POST") {
      const count = await incrementCount(store);
      return json({ count, source: "netlify-blobs" });
    }

    return json(
      { error: "Method not allowed" },
      {
        status: 405,
        headers: { Allow: "GET, POST" },
      },
    );
  } catch (error) {
    console.error("Shared merit counter failed:", error);

    return json(
      {
        error: "Shared merit counter unavailable",
      },
      { status: 500 },
    );
  }
};
