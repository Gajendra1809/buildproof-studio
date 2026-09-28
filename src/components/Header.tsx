"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#sprint", label: "Sprint" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition ${
        scrolled
          ? "border-b border-white/8 bg-ink-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="BuildProof Studio home">
          <Logo priority />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-ink-300 transition hover:text-ink-50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <Button href="#contact">Build My Prototype</Button>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute h-px w-4 bg-ink-50 transition ${open ? "rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`absolute h-px w-4 bg-ink-50 transition ${open ? "-rotate-45" : "translate-y-1"}`}
          />
        </button>
      </Container>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/8 bg-ink-950 lg:hidden"
        >
          <nav className="flex flex-col gap-1 px-5 py-4" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-ink-100"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 pt-2 pb-4">
              <Button href="#contact" className="w-full">
                Build My Prototype
              </Button>
              <SocialLinks className="mt-4" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
