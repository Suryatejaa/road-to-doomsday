"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "tva-watched-log";

function readWatchedLog(): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeWatchedLog(log: Record<string, boolean>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
  } catch {
    // localStorage unavailable (private browsing, quota exceeded, etc.) — fail silently
  }
}

/**
 * Tracks whether a timeline entry has been marked as watched, persisted to
 * localStorage under a single log keyed by entry id.
 */
export function useWatched(entryId: string) {
  const [isWatched, setIsWatched] = useState(false);

  // Hydrate from localStorage after mount — avoids SSR/client markup mismatch
  useEffect(() => {
    const log = readWatchedLog();
    setIsWatched(!!log[entryId]);
  }, [entryId]);

  const toggleWatched = useCallback(() => {
    setIsWatched((prev) => {
      const next = !prev;
      const log = readWatchedLog();
      if (next) {
        log[entryId] = true;
      } else {
        delete log[entryId];
      }
      writeWatchedLog(log);
      return next;
    });
  }, [entryId]);

  return { isWatched, toggleWatched };
}
