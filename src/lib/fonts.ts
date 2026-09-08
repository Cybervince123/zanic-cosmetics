import { Inter } from "next/font/google";

// Sole typeface, matching the reference exactly — Inter variable across the whole
// scale, from muted body copy up to medium-weight, tight-tracked display headings.
export const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
