import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";
import { cn } from "@/lib/utils";

interface ArrowButtonProps {
  href: string;
  children: React.ReactNode;
  /** "solid" fills the chip; "outline" borders it. */
  variant?: "solid" | "outline";
  /** Use "on-dark" when placed over a dark or photo background. */
  tone?: "on-light" | "on-dark";
  className?: string;
}

/** Text chip (6px radius, not a pill) + a separate circular arrow — the reference's button pattern. */
export function ArrowButton({
  href,
  children,
  variant = "solid",
  tone = "on-light",
  className,
}: ArrowButtonProps) {
  const solid = variant === "solid";
  const dark = tone === "on-dark";

  return (
    <Link href={href} className={cn("group inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "rounded-(--radius-button) px-4 py-2 text-sm font-light transition-colors",
          solid && !dark && "bg-ink text-cream group-hover:bg-ink/85",
          solid && dark && "bg-gold text-ink group-hover:bg-gold-soft",
          !solid && !dark && "border border-line text-ink group-hover:border-ink",
          !solid && dark && "border border-on-dark/30 text-on-dark group-hover:border-on-dark",
        )}
      >
        {children}
      </span>
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors",
          solid && dark && "border-gold text-gold group-hover:bg-gold group-hover:text-ink",
          !solid && dark && "border-on-dark/30 text-on-dark group-hover:bg-on-dark group-hover:text-ink",
          !dark && "border-line text-ink group-hover:bg-ink group-hover:text-cream",
        )}
      >
        <ArrowRightIcon className="size-4" weight="light" />
      </span>
    </Link>
  );
}
