import { faGithub, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="footer-container">
      
      <section className="footer-info">
        <h3 className="footer-title">Jujutsu Kaisen</h3>
        <p>
          Explore o mundo sobrenatural onde feiticeiros lutam contra maldições
          usando energia amaldiçoada. Uma jornada épica de poder, sacrifício e
          determinação.
        </p>
      </section>

      
      <nav aria-label="Navegação secundária">
        <h3 className="footer-title">Navegação</h3>
        <ul className="footer-links">
          <li><a className="footer-link" href="#hero">Início</a></li>
          <li><a className="footer-link" href="#wizards">Personagens</a></li>
          <li><a className="footer-link" href="#tecnics">Técnicas</a></li>
          <li><a className="footer-link" href="#history">História</a></li>
        </ul>
      </nav>

      
      <div className="footer-socials">
        <h3 className="footer-title">Redes Sociais</h3>
        <p>Siga-nos para mais conteúdo e atualizações</p>
        <nav aria-label="Redes sociais">
          <ul className="social-icons-list">
            <li>
              <a className="social-icon-link" href="https://www.instagram.com/p.gabriel88_/?hl=pt-br" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} color="#fff" size="2x"/>
              </a>
            </li>
            <li>
              <a className="social-icon-link" href="https://github.com/pedrosantosdev08" aria-label="Github" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} color="#fff" size="2x"/>
              </a>
            </li>
            <li>
              <a className="social-icon-link" href="https://www.linkedin.com/in/pedrodevsantos/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedinIn} color="#fff" size="2x"/>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="footer-copyright">© 2026 <span>Jujutsu Kaisen</span> Fan Site. Desenvolvido com energia amaldiçoada.</p>
    </footer>
  );
}