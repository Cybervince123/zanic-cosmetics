"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ListIcon, ShoppingBagIcon, XIcon } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/site/container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 640px)");
    const onChange = () => setMenuOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="relative z-50 bg-bg">
      <Container className="flex items-center justify-between gap-4 py-6">
        <Link href="/" aria-label="Zanic Cosmetics — Home" className="flex items-center gap-3">
          <span className="relative block size-14 shrink-0 overflow-hidden rounded-full sm:size-16">
            <Image src="/brand/logo-dark.jpeg" alt="" fill sizes="64px" className="object-cover" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-ink">Zanic</span>
          <span className="hidden text-sm text-ink-muted sm:ml-3 sm:block">Lagos, Nigeria</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink transition-colors hover:text-lime-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/checkout"
            aria-label="Cart, 0 items"
            className="relative flex size-10 items-center justify-center rounded-full transition-colors hover:bg-muted"
          >
            <ShoppingBagIcon className="size-5 text-ink" />
            <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-ink text-[10px] font-medium text-on-dark">
              0
            </span>
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center text-ink lg:hidden"
          >
            {menuOpen ? <XIcon className="size-6" /> : <ListIcon className="size-6" />}
          </button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "grid bg-bg text-ink transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <nav aria-label="Mobile" aria-hidden={!menuOpen} className="min-h-0 overflow-hidden">
          <ul className="divide-y divide-line border-t border-line">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  tabIndex={menuOpen ? 0 : -1}
                  className="block px-6 py-4 text-base transition-colors hover:text-lime-deep"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
