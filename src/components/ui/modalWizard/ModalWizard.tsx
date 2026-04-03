import { useEffect, useRef } from "react";
import "./ModalWizard.css"

interface Skill {
  name: string;
  description: string;
  color?: string;
}

interface Info {
  label: string;
  value: string;
}

interface ModalWizardProps {
  isOpen: boolean;
  onClose: () => void;
  bannerImage: string;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
  infos: Info[];
  skills: Skill[];
}

export function ModalWizard({
  isOpen,
  onClose,
  bannerImage,
  name,
  subtitle,
  description,
  themeColor,
  infos,
  skills,
}: ModalWizardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  const modalStyle = {
    "--accent-color": themeColor,
  } as React.CSSProperties;

  return (
    <dialog 
      ref={dialogRef} 
      className="character-modal" 
      style={modalStyle}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
    >
      <div className="modal-container">
        <button className="close-x" onClick={onClose}>&times;</button>
        
        <header className="modal-banner">
          <img src={bannerImage} alt={name} />
          <div className="banner-overlay"></div>
        </header>

        <div className="modal-body">
          <h1 className="modal-char-name">{name}</h1>
          <p className="modal-char-subtitle">{subtitle}</p>

          <section className="modal-section">
            <h2 className="section-heading">BIOGRAFIA</h2>
            <p className="section-text">{description}</p>
          </section>

          <section className="modal-section">
            <h2 className="section-heading">INFORMAÇÕES</h2>
            <div className="info-grid">
              {infos.map((info, idx) => (
                <div key={idx} className="info-box">
                  <span className="info-label">{info.label}</span>
                  <span className="info-value">{info.value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="modal-section">
            <h2 className="section-heading italic">HABILIDADES + TÉCNICAS</h2>
            <div className="skills-stack">
              {skills.map((skill, idx) => (
                <div 
                  key={idx} 
                  className="skill-card" 
                  style={{ borderLeftColor: skill.color || "var(--accent-color)" }}
                >
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-desc">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </dialog>
  );
}