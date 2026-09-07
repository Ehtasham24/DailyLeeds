export default function Spinner({ size = 48 }: { size?: number }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="animate-spin rounded-full"
      style={{
        width: size,
        height: size,
        background: "conic-gradient(from 0deg, #2F7DE1, #1BB47A, #2F7DE1)",
        WebkitMask:
          "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
        mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
      }}
    />
  );
}
