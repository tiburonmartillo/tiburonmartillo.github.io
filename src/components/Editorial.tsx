import type { ReactNode } from "react";
import type { CardLayout, ContentCard } from "../content";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  wide = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "section-intro section-intro-wide" : "section-intro"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

export function CardGrid({
  cards,
  columns = 4,
  layout = "cards",
}: {
  cards: ContentCard[];
  columns?: 3 | 4;
  layout?: CardLayout;
}) {
  const classes = ["card-grid"];
  if (columns === 3) classes.push("card-grid-three");
  if (layout !== "cards") classes.push(`card-grid-${layout}`);
  return (
    <div className={classes.join(" ")}>
      {cards.map((card, index) => (
        <article className="text-card reveal" key={`${card.title}-${index}`}>
          {layout !== "plain" && layout !== "pairs" && (
            <Eyebrow>{card.eyebrow ?? String(index + 1).padStart(2, "0")}</Eyebrow>
          )}
          <h3>{card.title}</h3>
          <p>{card.body}</p>
          {card.methods && <p className="card-methods">{card.methods}</p>}
        </article>
      ))}
    </div>
  );
}

export function Metrics({
  items,
  inverse = false,
}: {
  items: Array<[string, string]>;
  inverse?: boolean;
}) {
  return (
    <div className={inverse ? "metrics metrics-inverse" : "metrics"}>
      {items.map(([value, label]) => (
        <div className="metric" key={`${value}-${label}`}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function Rule() {
  return <hr className="rule" />;
}
