import icon from "@/assets/logo-icon.png";

const ASPECT = icon.height / icon.width;

/** The brand mark, from the client's own logo artwork. It ships as a
 *  white/transparent PNG, so we recolor it with our blue -> green
 *  gradient by using it as a CSS mask rather than baking a fixed
 *  color into the asset. */
export default function LogoMark({ size = 22 }: { size?: number }) {
  const maskImage = `url(${icon.src})`;

  return (
    <span
      aria-hidden
      className="inline-block shrink-0 bg-gradient-to-br from-blue to-green"
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
