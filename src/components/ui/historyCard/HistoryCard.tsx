import "./HistoryCard.css"

interface HistoryCardProps {
  title: string;
  storyArc: string;
  description: string;
  image: string;
  themeColor: string;
}

export function HistoryCard({
  title,
  storyArc,
  description,
  image,
  themeColor,
}: HistoryCardProps) {
  const cardStyle = {
    "--accent-color": themeColor,
  } as React.CSSProperties;
  return (
    <article className="history-card" style={cardStyle}>
      <h3 className="history-card-title"> 1 {title}</h3>
      <p className="history-card-story-arc">{storyArc}</p>
      <p className="history-card-description">{description}</p>
      <img className="history-image" src={image} alt={title} />
    </article>
  );
}
