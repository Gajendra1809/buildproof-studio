import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "bg-ink-50 text-ink-950 hover:bg-white shadow-[0_1px_0_rgba(255,255,255,0.25)_inset] hover:-translate-y-px",
  secondary:
    "border border-white/15 bg-white/[0.03] text-ink-50 hover:bg-white/[0.07] hover:border-white/25",
  ghost: "text-ink-50/80 hover:text-white",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const cls = `inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium tracking-tight transition duration-200 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={cls}>
      {children}
    </button>
  );
}
