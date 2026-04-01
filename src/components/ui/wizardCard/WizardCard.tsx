import "./WizardCard.css";

interface WizardCardProps {
  wizardImage: string;
  wizardName: string;
  wizardLevel: string;
  wizardDescription: string;
  wizardTitle: string;
  themeColor: string;
  stats: { power: number; speed: number; technique: number };
}

export function WizardCard({
  wizardImage,
  wizardName,
  wizardLevel,
  wizardDescription,
  wizardTitle,
  themeColor,
  stats
}: WizardCardProps) {
  const cardStyle = {
    "--accent-color": themeColor,
  } as React.CSSProperties;

  return (
    <div className="wizard-card" style={cardStyle}>
      <div className="wizard-image-container">
        <img className="wizard-image" src={wizardImage} alt={wizardName} />
      </div>

      <div className="wizard-content">
        <div className="wizard-header">
          <h3 className="wizard-name">{wizardName}</h3>
          <p className="wizard-level">{wizardLevel}</p>
        </div>

        <p className="wizard-description">{wizardDescription}</p>

        <div className="wizard-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">{wizardTitle}</span>
        </div>

        <div className="wizard-stats-container">
          <div className="stat-item">
            <span className="stat-label">PODER</span>
            <progress value={stats.power} max="100" />
          </div>
          <div className="stat-item">
            <span className="stat-label">VELOCIDADE</span>
            <progress value={stats.speed} max="100" />
          </div>
          <div className="stat-item">
            <span className="stat-label">TÉCNICA</span>
            <progress value={stats.technique} max="100" />
          </div>
        </div>
      </div>
    </div>
  );
}