import { useState } from "react";
import { ModalWizard } from "../../ui/modalWizard/ModalWizard";
import { WizardCard } from "../../ui/wizardCard/WizardCard";
import "./Wizards.css";

interface WizardStats {
  power: number;
  speed: number;
  technique: number;
}

interface WizardSkill {
  name: string;
  description: string;
  color?: string;
}

interface Wizard {
  id: number;
  wizardImage: string;
  wizardName: string;
  wizardLevel: string;
  wizardDescription: string;
  wizardTitle: string;
  themeColor: string;
  stats: WizardStats;
  skills?: WizardSkill[];
}

const WIZARDS_LIST: Wizard[] = [
  {
    id: 1,
    wizardImage: 'https://i.pinimg.com/736x/b5/e7/f8/b5e7f88b1b5ff8777840924f0e6e27e8.jpg',
    wizardName: 'Yuji Itadori',
    wizardLevel: 'Grau 1',
    wizardDescription: 'O receptáculo de Sukuna e protagonista da série, conhecido por sua força física absurda e controle de energia amaldiçoada.',
    wizardTitle: 'Rei das Maldições',
    themeColor: '#991B1C',
    stats: { power: 90, speed: 90, technique: 90 },
    skills: [
      { name: "Punho Divergente", description: "Um soco onde a energia amaldiçoada chega com atraso, criando um segundo impacto devastador.", color: "#ef4444" },
      { name: "Kokuichi (Black Flash)", description: "Uma distorção no espaço que ocorre quando a energia amaldiçoada é aplicada em 0,000001 segundos.", color: "#000000" },
      { name: "Combate Corpo a Corpo", description: "Mestria em artes marciais combinada com força física sobre-humana.", color: "#991B1C" }
    ]
  },
  {
    id: 2,
    wizardImage: 'https://i.pinimg.com/1200x/a4/50/bc/a450bcb4ad32e7f5b9e7db259b0bea61.jpg',
    wizardName: 'Satoru Gojo',
    wizardLevel: 'Grau Especial',
    wizardDescription: 'O feiticeiro mais forte do mundo, detentor do Mugen e do Seis Olhos. Ele redefine o conceito de impossível.',
    wizardTitle: 'Energia Infinita',
    themeColor: '#6A27D2',
    stats: { power: 100, speed: 90, technique: 100 },
    skills: [
      { name: "Vazio Infinito", description: "Expansão de Domínio que força informações infinitas no cérebro do alvo, paralisando-o.", color: "#1e1b4b" },
      { name: "Roxo (Hollow Purple)", description: "A fusão do Azul e do Vermelho que cria uma singularidade capaz de apagar matéria.", color: "#6A27D2" },
      { name: "Mugen (Limitless)", description: "Cria uma distância infinita entre Gojo e qualquer ataque, tornando-o intocável.", color: "#a5b4fc" }
    ]
  },
  {
    id: 3,
    wizardImage: 'https://i.pinimg.com/1200x/22/c3/69/22c369e6893fa16f74a498e38cb9c66c.jpg',
    wizardName: 'Ryomen Sukuna',
    wizardLevel: 'Grau Especial (Rei das Maldições)',
    wizardDescription: 'Uma maldição lendária de quatro braços. Sua crueldade é superada apenas por sua habilidade técnica incomparável.',
    wizardTitle: 'Rei das Maldições',
    themeColor: '#991B1C',
    stats: { power: 100, speed: 90, technique: 100 },
    skills: [
      { name: "Santuário Malévolo", description: "Uma expansão de domínio sem barreiras que corta tudo em seu raio de alcance.", color: "#450a0a" },
      { name: "Clivar e Desmantelar", description: "Técnicas de corte invisíveis que se ajustam à resistência e energia do oponente.", color: "#991B1C" },
      { name: "Flecha de Fogo", description: "Uma habilidade oculta capaz de gerar chamas com poder destrutivo imenso.", color: "#f97316" }
    ]
  },
  {
    id: 4,
    wizardImage: 'https://wallpapers.com/images/hd/megumi-fushiguro-power-manifestation-anime-artwork-vl29gupg6wzfy2fd.jpg',
    wizardName: 'Megumi Fushiguro',
    wizardLevel: 'Grau 2',
    wizardDescription: 'Um prodígio do clã Zenin que utiliza a técnica das Dez Sombras para invocar Shikigamis poderosos.',
    wizardTitle: 'Técnica Divina',
    themeColor: '#0891B2',
    stats: { power: 90, speed: 90, technique: 90 },
    skills: [
      { name: "Dez Sombras", description: "Invocação de criaturas amaldiçoadas a partir das sombras, como os Cães Divinos e Nue.", color: "#0891B2" },
      { name: "Jardim das Sombras Quimera", description: "Uma expansão de domínio incompleta que permite criar múltiplos clones e invocações.", color: "#164e63" },
      { name: "Mahoraga", description: "O Shikigami mais forte, capaz de se adaptar a qualquer fenômeno ou ataque.", color: "#64748b" }
    ]
  },
  {
    id: 5,
    wizardImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a44778ea-3457-40e0-8979-b7e3685d23d0/dfph3lh-2037d77d-a068-492a-9ddb-d628df9b6cec.png/v1/fill/w_1920,h_1070,q_80,strp/nobara_kugisaki_x_mobile_legends_8k_wallpaper_by_newjer53_dfph3lh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA3MCIsInBhdGgiOiIvZi9hNDQ3NzhlYS0zNDU3LTQwZTAtODk3OS1iN2UzNjg1ZDIzZDAvZGZwaDNsaC0yMDM3ZDc3ZC1hMDY4LTQ5MmEtOWRkYi1kNjI4ZGY5YjZjZWMucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.HxKXl4x1czO3-5emXyem0AKjSW7k3WdznnXKq_6Ow6g',
    wizardName: 'Nobara Kugisaki',
    wizardLevel: 'Grau 3',
    wizardDescription: 'Uma feiticeira confiante que usa martelo, pregos e bonecos de palha para destruir maldições à distância.',
    wizardTitle: 'Técnica de Voodoo',
    themeColor: '#6A27D2',
    stats: { power: 85, speed: 90, technique: 70 },
    skills: [
      { name: "Ressonância", description: "Usa um boneco de palha e partes da maldição para causar dano diretamente ao núcleo do alvo.", color: "#d946ef" },
      { name: "Grampo (Hairpin)", description: "Faz com que os pregos imbuídos de energia amaldiçoada explodam violentamente.", color: "#6A27D2" },
      { name: "Kanzashi", description: "Técnica de manipulação de pregos para controle de área e ataques perfurantes.", color: "#4c1d95" }
    ]
  },
  {
    id: 6,
    wizardImage: 'https://preview.redd.it/mahito-sukuna-all-the-way-v0-xveobl01lm9e1.jpeg?auto=webp&s=066eb2738d9f9d9cc2471311cb59f88221cfab4d',
    wizardName: 'Mahito',
    wizardLevel: 'Grau Especial (Maldição)',
    wizardDescription: 'Uma maldição nascida do medo e ódio que os humanos sentem uns pelos outros. Sua habilidade de manipular a alma o torna extremamente perigoso.',
    wizardTitle: 'Transfiguração Ociosa',
    themeColor: '#7DD3FC',
    stats: { power: 88, speed: 85, technique: 95 },
    skills: [
      { name: "Transfiguração Ociosa", description: "Permite remodelar a alma de si mesmo ou de outros, alterando a forma física instantaneamente.", color: "#7DD3FC" },
      { name: "Auto-Incorporação de Perfeição", description: "Expansão de Domínio onde ele pode tocar a alma de qualquer um dentro do raio de alcance.", color: "#0c4a6e" },
      { name: "Isomerismo Polimórfico", description: "Criação de humanos transfigurados que servem como lacaios em combate.", color: "#38bdf8" }
    ]
  },
  {
    id: 7,
    wizardImage: 'https://uploads.alternativanerd.com.br/wp-content/uploads/2024/04/AN_Nanami-Jujutsu-Kaisen.webp',
    wizardName: 'Kento Nanami',
    wizardLevel: 'Grau 1',
    wizardDescription: 'Um ex-trabalhador corporativo que retornou ao mundo do jujutsu. Conhecido por seu pragmatismo e técnica de precisão matemática.',
    wizardTitle: 'Feiticeiro Assalariado',
    themeColor: '#EAB308',
    stats: { power: 85, speed: 80, technique: 92 },
    skills: [
      { name: "Técnica de Proporção 7:3", description: "Divide o alvo em dez partes e cria um ponto fraco no ponto 7:3, garantindo um golpe crítico.", color: "#EAB308" },
      { name: "Colapso", description: "Imbuir energia em destroços de objetos destruídos para causar dano em área massivo.", color: "#854d0e" },
      { name: "Horas Extras", description: "Um pacto vinculante que aumenta sua energia amaldiçoada quando o turno de trabalho regular termina.", color: "#451a03" }
    ]
  },
  {
    id: 8,
    wizardName: 'Suguru Geto',
    wizardImage: 'https://i.pinimg.com/736x/f1/7f/ff/f17fff775f9849c21efc0168dab7534e.jpg',
    wizardLevel: 'Grau Especial',
    wizardDescription: 'Um dos quatro feiticeiros de Grau Especial. Sua ideologia extremista o levou a buscar um mundo habitado apenas por feiticeiros.',
    wizardTitle: 'Manipulador de Maldições',
    themeColor: '#166534',
    stats: { power: 95, speed: 88, technique: 98 },
    skills: [
      { name: "Manipulação de Maldições", description: "Capacidade de absorver maldições derrotadas e utilizá-las como servos sob seu comando.", color: "#166534" },
      { name: "Uzumaki", description: "Combina milhares de maldições em um único ataque de energia concentrada e devastadora.", color: "#14532d" },
      { name: "Combate com Nuvens Brinccalhonas", description: "Mestria em armas amaldiçoadas e artes marciais para complementar seu exército de maldições.", color: "#064e3b" }
    ]
  },
  {
    id: 9,
    wizardImage: 'https://i.pinimg.com/736x/36/81/92/3681920c620ded78225c789c86fcf076.jpg',
    wizardName: 'Mahoraga',
    wizardLevel: 'Grau Especial (Shikigami)',
    wizardDescription: 'A carta na manga do clã Zenin. Este Shikigami nunca foi domado na história até a era moderna, sendo o ápice da adaptação.',
    wizardTitle: 'Espada do Extermínio',
    themeColor: '#475569',
    stats: { power: 100, speed: 85, technique: 100 },
    skills: [
      { name: "Adaptação Universal", description: "A roda em suas costas gira para se adaptar a qualquer fenômeno ou ataque sofrido.", color: "#475569" },
      { name: "Espada do Extermínio", description: "Uma lâmina revestida de energia positiva que é letal para qualquer espírito amaldiçoado.", color: "#cbd5e1" },
      { name: "Força Transcendente", description: "Poder físico bruto capaz de rivalizar com os feiticeiros de Grau Especial mais fortes.", color: "#1e293b" }
    ]
  }
];

export function Wizards() {
  const [selectedWizard, setSelectedWizard] = useState<Wizard | null>(null);

  const handleCloseModal = () => setSelectedWizard(null);

  return (
    <section id="wizards" className="wizards-container">
      <h2 className="wizards-title">
        <i>FEITICEIROS e maldições</i>
      </h2>
      
      <div className="wizards-grid">
        {WIZARDS_LIST.map((wizard) => (
          <WizardCard 
            key={wizard.id} 
            {...wizard}
            onClick={() => setSelectedWizard(wizard)}
          />
        ))}
      </div>

      {selectedWizard && (
        <ModalWizard 
          isOpen={!!selectedWizard} 
          onClose={handleCloseModal}
          bannerImage={selectedWizard?.wizardImage ?? ""}
          name={selectedWizard?.wizardName ?? ""}
          subtitle={selectedWizard?.wizardLevel ?? ""}
        description={selectedWizard?.wizardDescription ?? ""}
        themeColor={selectedWizard?.themeColor ?? "#000"}
        infos={selectedWizard ? [
          { label: "GRAU", value: selectedWizard.wizardLevel },
          { label: "TÍTULO", value: selectedWizard.wizardTitle },
          { label: "PODER", value: `${selectedWizard.stats.power}%` }
        ] : []}
        skills={selectedWizard?.skills ?? []} 
      />)}
    </section>
  );
}