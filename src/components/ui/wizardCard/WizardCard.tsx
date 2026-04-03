import "./WizardCard.css";

// Extendemos as props para incluir o evento de clique
interface WizardCardProps {
  wizardImage: string;
  wizardName: string;
  wizardLevel: string;
  wizardDescription: string;
  wizardTitle: string;
  themeColor: string;
  stats: { power: number; speed: number; technique: number };
  onClick?: () => void; // Prop necessária para abrir o modal
}

export function WizardCard({
  wizardImage,
  wizardName,
  wizardLevel,
  wizardDescription,
  wizardTitle,
  themeColor,
  stats,
  onClick
}: WizardCardProps) {
  
  // Mantendo o uso de CSS Variables para cores dinâmicas
  const cardStyle = {
    "--accent-color": themeColor,
  } as React.CSSProperties;

  return (
    <article 
      className="wizard-card" 
      style={cardStyle} 
      onClick={onClick}
      role="button" // Melhora a acessibilidade
      tabIndex={0}  // Permite focar via teclado
    >
      <div className="wizard-image-container">
        <img 
          className="wizard-image" 
          src={wizardImage} 
          alt={`Retrato de ${wizardName}`} 
          loading="lazy" 
        />
      </div>

      <div className="wizard-content">
        <header className="wizard-header">
          <h3 className="wizard-name">{wizardName}</h3>
          <p className="wizard-level">{wizardLevel}</p>
        </header>

        <p className="wizard-description">{wizardDescription}</p>

        <div className="wizard-badge">
          <span className="badge-dot"></span>
          <span className="badge-text">{wizardTitle}</span>
        </div>

        <div className="wizard-stats-container">
          <StatBar label="PODER" value={stats.power} />
          <StatBar label="VELOCIDADE" value={stats.speed} />
          <StatBar label="TÉCNICA" value={stats.technique} />
        </div>
      </div>
    </article>
  );
}

// Sub-componente interno para evitar repetição de código (DRY)
function StatBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="stat-item">
      <span className="stat-label">{label}</span>
      <progress value={value} max="100" />
    </div>
  );
}