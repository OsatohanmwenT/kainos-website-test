const CHARCOAL = "#3f3f3e";
const ORANGE = "#ef6c23";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="KainosEdge"
    >
      <circle cx="62" cy="75" r="58" fill={CHARCOAL} />
      <circle cx="94" cy="71" r="52" fill={ORANGE} />
      <text
        x="66"
        y="119"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight={700}
        fontSize="132"
        fill="#ffffff"
      >
        K
      </text>
    </svg>
  );
}

export function Logo({
  variant = "dark",
  className,
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const kainosColor = variant === "light" ? "#ffffff" : CHARCOAL;
  const taglineColor = variant === "light" ? "rgba(255,255,255,0.6)" : "#8a8a89";

  return (
    <svg
      viewBox="0 0 460 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="KainosEdge Consulting Limited"
    >
      <circle cx="62" cy="75" r="58" fill={CHARCOAL} />
      <circle cx="94" cy="71" r="52" fill={ORANGE} />
      <text
        x="66"
        y="119"
        textAnchor="middle"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontWeight={700}
        fontSize="132"
        fill="#ffffff"
      >
        K
      </text>
      <text x="150" y="93" fontFamily="Inter, sans-serif" fontWeight={800} fontSize="58">
        <tspan fill={kainosColor}>ainos</tspan>
        <tspan fill={ORANGE}>edge</tspan>
      </text>
      <text
        x="153"
        y="119"
        fontFamily="Inter, sans-serif"
        fontWeight={500}
        fontSize="15"
        letterSpacing="2"
        fill={taglineColor}
      >
        CONSULTING LIMITED
      </text>
    </svg>
  );
}
