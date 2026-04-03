
import { HistoryCard } from "../../ui/historyCard/HistoryCard";
import "./History.css";

const historyData = [
  {
    id: 1,
    title: "Introdução às Maldições",
    storyArc: "Arco Inicial",
    description:
      "Yuji Itadori, um estudante comum com força física extraordinária, tem sua vida transformada ao ingerir um dedo de Ryomen Sukuna. Ele se torna o receptáculo da maldição mais poderosa da história.",
    image: "https://tm.ibxk.com.br/2023/08/09/09152002331237.jpeg?ims=1000x400/filters:quality(80)",
    themeColor: "#0891B2",
  },
  {
    id: 2,
    title: "Torneio de Boa Vontade",
    storyArc: "Segundo Arco",
    description:
      "Os estudantes das escolas de feitiçaria de Tóquio e Quioto competem em um torneio. Eventos inesperados revelam uma conspiração contra Satoru Gojo e o mundo dos feiticeiros.",
    image: "https://sm.ign.com/t/ign_br/image/j/jujutsu-ka/jujutsu-kaisen-explaining-the-next-big-thing-in-anime_5pt7.h720.jpg",
    themeColor: "#991B1C",
  },
  {
    id: 3,
    title: "Incidente de Shibuya",
    storyArc: "Arco Crítico",
    description:
      "A noite mais longa da história dos feiticeiros. Shibuya se torna um campo de batalha onde alianças são testadas e o equilíbrio de poder é permanentemente alterado.",
    image: "https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2023/08/jujutsu-kaisen-gojo-gentou.jpg?resize=1200%2C640&ssl=1",
    themeColor: "#6D28D9",
  },
];

export function History() {
  return (
    <section id="history" className="history-container">
      <h2 className="history-title">A Jornada</h2>
      <div className="history-content">
        <div className="vertical-line"></div>
        {historyData.map((history) => (
          <HistoryCard key={history.id} {...history} />
        ))}
      </div>
    </section>
  );
}
