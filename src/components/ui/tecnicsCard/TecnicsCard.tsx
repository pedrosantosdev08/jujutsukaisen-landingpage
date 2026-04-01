import "./TecnicsCard.css"
interface TecnicsCardProps {
  icon: React.ReactNode;
  tecnicName: string;
  badgeText: string;
  tecnicDescription: string;
  themeColor: string;
}

export function TecnicsCard({
  icon,
  tecnicName,
  badgeText,
  tecnicDescription,
  themeColor,
}: TecnicsCardProps) {
  return (
    <article
      className="tecnics-card"
      style={{ "--accent-color": themeColor } as React.CSSProperties}
    >
      <div className="tecnic-icon" aria-hidden="true">
        {icon}
      </div>

      <h3 className="tecnic-name">{tecnicName}</h3>

      <div className="tecnic-badge">
        <strong className="badge-text">{badgeText}</strong>
      </div>

      <p className="tecnic-description">{tecnicDescription}</p>
    </article>
  );
}