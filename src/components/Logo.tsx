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
    <Link href="#" className={`flex items-center ${className}`}>
      <Image
        src={src}
        alt="Adam Gebäudeservice"
        width={460}
        height={300}
        unoptimized
        priority
        className="h-12 w-auto object-contain md:h-14"
      />
    </Link>
  );
}
