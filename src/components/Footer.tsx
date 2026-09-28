import { Container } from "./ui/Container";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#sprint", label: "BuildProof Sprint" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-10">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo className="h-8 w-auto" />
          <p className="mt-2 max-w-xs text-sm text-ink-400">
            Turn your software idea into something real.
          </p>
          <SocialLinks className="mt-5" />
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 sm:items-end">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-ink-300 transition hover:text-ink-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
