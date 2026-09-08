import { cn } from "@/lib/utils";

/** Single source of truth for horizontal rhythm — 1440px max-width, 48px side padding at sm+. */
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1440px] px-6 sm:px-12", className)} {...props} />;
}
