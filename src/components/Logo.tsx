import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "navy" | "white";
  className?: string;
};

export default function Logo({ variant = "navy", className = "" }: LogoProps) {
  const src =
    variant === "white"
      ? "/images/logo/logo-header-white.png"
      : "/images/logo/logo-header-navy.png";

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src={src}
        alt="Adam Gebäudeservice"
        width={779}
        height={586}
        unoptimized
        priority
        className="h-14 w-auto object-contain md:h-16"
      />
    </Link>
  );
}
