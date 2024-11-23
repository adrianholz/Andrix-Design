import "./Marquee.css";

type MarqueeProps = {
  gap: string;
  title: string;
  page?: string;
  time: string;
};

export default function Marquee({ gap, title, page, time }: MarqueeProps) {
  return (
    <div
      className="marquee"
      style={
        {
          "--gap": gap,
          "--time": time,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <div className="marquee-content">
        <span>{page} • </span>
        <span>{title} • </span>
        <span>{page} • </span>
        <span>{title} • </span>
        <span>{page} • </span>
        <span>{title} • </span>
      </div>
      <div className="marquee-content">
        <span>{page} • </span>
        <span>{title} • </span>
        <span>{page} • </span>
        <span>{title} • </span>
        <span>{page} • </span>
        <span>{title} • </span>
      </div>
    </div>
  );
}
