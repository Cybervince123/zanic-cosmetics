import Link from "next/link";
import { Container } from "@/components/site/container";

const LINK_COLUMNS = [
  [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ],
  [
    { href: "/wholesale", label: "Wholesale" },
    { href: "/distribution", label: "Distribution" },
    { href: "/privacy", label: "Privacy Policy" },
  ],
];

export function Footer() {
  return (
    <footer className="bg-lime text-ink">
      <Container className="pb-8 pt-16 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-8">
          <p className="text-[18vw] font-semibold leading-[0.85] tracking-tight sm:text-[13vw] lg:text-[9vw]">
            Zanic<span className="text-ink/40">.</span>
          </p>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:gap-x-16">
            {LINK_COLUMNS.map((column, i) => (
              <ul key={i} className="space-y-2.5">
                {column.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink/80 transition-colors hover:text-ink">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/15 pt-6 text-xs text-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Zanic Cosmetics Ltd. All Rights Reserved.</p>
          <p>Quality Skincare Products, Delivered with Excellence.</p>
        </div>
      </Container>
    </footer>
  );
}
