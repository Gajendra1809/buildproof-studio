import Image from "next/image";

export function Logo({
  className = "h-8 w-auto sm:h-9",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt="BuildProof Studio"
      width={404}
      height={132}
      className={className}
      priority={priority}
    />
  );
}
