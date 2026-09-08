import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";

/** Small lime circle-with-arrow used to mark interactive images throughout the reference. */
export function ArrowBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-9 items-center justify-center rounded-full bg-lime text-ink shadow-sm",
        className,
      )}
    >
      <ArrowUpRightIcon className="size-4" weight="bold" />
    </span>
  );
}
