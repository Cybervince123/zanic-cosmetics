/**
 * Keyword-matched placeholder photography via LoremFlickr — real photos pulled by
 * subject (not arbitrary), so the site reads as an actual skincare brand rather than
 * random stock. `lock` pins a specific photo for a given keyword set so the same slot
 * renders the same image on every request (no server/client hydration mismatch, no
 * image swapping on reload).
 */
export function themedImage(keywords: string, width: number, height: number, lock: number = 1) {
  return `https://loremflickr.com/${width}/${height}/${encodeURIComponent(keywords)}?lock=${lock}`;
}
