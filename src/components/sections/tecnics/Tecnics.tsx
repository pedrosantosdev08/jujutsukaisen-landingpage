import { faFire } from "@fortawesome/free-solid-svg-icons/faFire";
import { TecnicsCard } from "../../ui/tecnicsCard/TecnicsCard";
import "./Tecnics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons/faShield";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons/faBoltLightning";
import { faSkull } from "@fortawesome/free-solid-svg-icons/faSkull";
import { faFan } from "@fortawesome/free-solid-svg-icons/faFan";

const tecnicsData = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faEye} />,
    tecnicName: "Ilimitado",
    badgeText: "Técnica Inata",
    tecnicDescription: "Manipulação do espaço infinito em nível atômico...",
    themeColor: "#9b4dff", // Corrigido de ## para #
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faShield} />,
    tecnicName: "Dez Sombras",
    badgeText: "Técnica Herdada",
    tecnicDescription: "Invocação de até dez shikigami através de sombras...",
    themeColor: "#00bcd4",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faBoltLightning} />,
    tecnicName: "Golpe Negro",
    badgeText: "Fenômeno",
    tecnicDescription:
      "Distorção espacial que amplifica exponencialmente o poder de um ataque quando executado dentro de 0.000001 segundos após o impacto físico.",
    themeColor: "#dd1025",
  },
  {
    id: 4,
    icon: <FontAwesomeIcon icon={faFire} />,
    tecnicName: "Fogo Cursed",
    badgeText: "Técnica de Chamas",
    tecnicDescription:
      "Invocação de chamas amaldiçoadas inextinguíveis que queimam qualquer coisa, incluindo outras energias amaldiçoadas.",
    themeColor: "#dd1025",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faFan} />,
    tecnicName: "Corte Cleave",
    badgeText: "Técnica de Corte",
    tecnicDescription:
      "Corte dimensional que se ajusta automaticamente à dureza do alvo, garantindo sempre um corte perfeito.",
    themeColor: "#dd1025",
  },
  {
    id: 6,
    icon: <FontAwesomeIcon icon={faSkull} />,
    tecnicName: "Expansão de Domínio",
    badgeText: "Técnica Suprema",
    tecnicDescription:
      "Manifestação de um espaço isolado onde a técnica inata do usuário atinge 100% de acerto garantido.",
    themeColor: "#9b4dff",
  },
];

export function Tecnics() {
  return (
    <section id="tecnics" className="tecnics-container">
      <h2 className="tecnics-title">técnicas amaldiçoadas</h2>
      <p className="tecnics-description">
        Poderes que transcendem a compreensão humana, moldados pela energia
        amaldiçoada
      </p>
      <div className="tecnics-grid">
        {tecnicsData.map((tecnic) => (
          <TecnicsCard key={tecnic.id} {...tecnic} />
        ))}
      </div>
    </section>
  );
}
