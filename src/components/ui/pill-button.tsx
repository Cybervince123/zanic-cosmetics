import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";

interface PillButtonProps {
  href: string;
  children: React.ReactNode;
  tone?: "lime" | "dark" | "light";
  className?: string;
}

/** The reference's primary CTA shape — a full pill with a circular icon flush at the end. */
export function PillButton({ href, children, tone = "lime", className }: PillButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-6 rounded-(--radius-pill) py-2 pl-6 pr-2 text-sm font-medium transition-transform duration-300 hover:scale-[1.02]",
        tone === "lime" && "bg-lime text-ink",
        tone === "dark" && "bg-ink text-on-dark",
        tone === "light" && "bg-surface text-ink",
        className,
      )}
    >
      {children}
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-full transition-colors",
          tone === "lime" && "bg-ink text-lime",
          tone === "dark" && "bg-lime text-ink",
          tone === "light" && "bg-ink text-lime",
        )}
      >
        <ArrowUpRightIcon className="size-4" weight="bold" />
      </span>
    </Link>
  );
}
