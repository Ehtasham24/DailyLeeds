import icon from "@/assets/logo-icon.png";

const ASPECT = icon.height / icon.width;

/** The brand mark, from the client's own logo artwork. It ships as a
 *  white/transparent PNG, so it's used as a CSS mask over a fill —
 *  the brand gradient by default, or any background via `className`. */
export default function LogoMark({
  size = 22,
  className = "bg-gradient-to-br from-blue to-green",
}: {
  size?: number;
  className?: string;
}) {
  const maskImage = `url(${icon.src})`;

  return (
    <span
      aria-hidden
      className={`inline-block shrink-0 ${className}`}
      style={{
        width: size,
        height: size * ASPECT,
        WebkitMaskImage: maskImage,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskImage,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
      }}
    />
  );
}
