import { z } from "zod";

/**
 * Extracts the 11-character video ID from various YouTube URL formats.
 * Returns null if the URL is not a valid YouTube link or the ID is missing.
 */

const getYouTubeVideoId = (url: string): string | null => {
  try {
    // 1. Pre-process and validate it is a URL
    const parsedUrl = new URL(url.startsWith("http") ? url : `https://${url}`);
    const hostname = parsedUrl.hostname.replace("www.", "");

    // 2. Standard and Embed Links (youtube.com)
    if (hostname === "youtube.com") {
      // Standard watch link: /watch?v=VIDEO_ID
      if (parsedUrl.pathname === "/watch") {
        const v = parsedUrl.searchParams.get("v");
        if (v && v.length === 11) {
          return v;
        }
      }
      // Embed link: /embed/VIDEO_ID
      if (parsedUrl.pathname.startsWith("/embed/")) {
        const parts = parsedUrl.pathname.split("/");
        const v = parts[2]; // The third part is usually the ID
        if (v && v.length === 11) {
          return v;
        }
      }
    }

    // 3. Short Link (youtu.be)
    if (hostname === "youtu.be") {
      const v = parsedUrl.pathname.substring(1); // Remove the leading '/'
      if (v && v.length === 11) {
        return v;
      }
    }

    // 4. Handle mobile/share links (m.youtube.com, etc.) if needed
    // (The current logic handles these if they follow the /watch?v= format)
  } catch {
    return null;
  }
  return null;
};

export const youtubeUrlSchema = z
  .string()
  .trim()
  .refine((val) => getYouTubeVideoId(val) !== null, {
    message:
      "Must be a valid YouTube URL (watch, short link, or embed) with an 11-character video ID.",
  });
