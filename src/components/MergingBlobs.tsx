export function MergingBlobs({
  size = 360,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div
      className={`relative pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="gooey-merge" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
            <feColorMatrix
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feGaussianBlur in="goo" stdDeviation="2" />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0"
        style={{ filter: "url(#gooey-merge)" }}
      >
        <span
          className="absolute rounded-full blob-merge-a"
          style={{
            width: "42%",
            height: "42%",
            top: "30%",
            left: "18%",
            backgroundColor: "#0D2342",
            animation: "blob-merge-a 6s ease-in-out infinite",
          }}
        />
        <span
          className="absolute rounded-full blob-merge-b"
          style={{
            width: "38%",
            height: "38%",
            top: "24%",
            left: "46%",
            backgroundColor: "#FF9242",
            animation: "blob-merge-b 6s ease-in-out infinite",
          }}
        />
        <span
          className="absolute rounded-full blob-merge-c"
          style={{
            width: "30%",
            height: "30%",
            top: "52%",
            left: "36%",
            backgroundColor: "#0D2342",
            animation: "blob-merge-c 7s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
}
