interface Project {
    name: string;
    description: string;
    imgUrl: string;
    icons: {icon: string, label: string}[];
}

interface Navlink {
    id: string;
    title: string;
}

export const navLinks: Navlink[] = [
    {id: "home", title: "Início"},
    {id: "about", title: "Sobre"},
    {id: "services", title: "Serviços"},
    {id: "projects", title: "Projetos"},
    {id: "contact", title: "Contato"},
    {id: "consulting", title: "Consultoria"},
];

export const projects: Project[] = [
    {
      name: "ANV-PAX",
      description:
        "O ANV-PAX é um hovercraft projetado para o transporte de passageiros e carga, com capacidade de 2700 kg. Com um suporte logístico cuidadosamente planejado, ele oferece versatilidade, robustez, segurança e alta disponibilidade para operadores que buscam expandir seus negócios. Sua estrutura foi desenvolvida para atender às exigências das Normas da Autoridade Marítima, integrando soluções consagradas nos setores naval e aeroespacial.",
      imgUrl: "src/assets/hovercraft-bg-2.jpeg",
      icons : [
        {icon: "src/assets/speed-icon.png", label: "Velocidade"},
        {icon: "src/assets/maintenance-icon.png", label: "Manutenibilidade"},
        {icon: "src/assets/accessibility-icon.png", label: "Acessibilidade"},
        {icon: "src/assets/clipboard-icon.png", label: "Muiltiemprego"},
      ]
    },
    {
        name:"ANV-SAR",
        description: "O ANV-SAR é um hovercraft inovador, projetado para equipes de resgate dos Corpos de Bombeiros, oferecendo modularidade e portabilidade excepcionais. Ideal para situações críticas como enchentes e rompimentos de barragens, ele proporciona transporte fácil e segurança máxima, garantindo uma resposta ágil e eficaz em em situações críticas e emergenciais.",
        imgUrl: "src/assets/hovercraft-bg.jpeg",
        icons: [
          {icon: "src/assets/modularity-icon.png", label: "Modularidade"},
          {icon: "src/assets/forklift-icon.png", label: "Portabilidade"},
          {icon: "src/assets/security-icon.png", label: "Segurança"},
          {icon: "src/assets/clipboard-icon.png", label: "Muiltiemprego"},
          {icon: "src/assets/resgate.png", label: "Resgate"},
          {icon: "src/assets/earth-icon.png", label: "Turismo Náutico"},
          {icon: "src/assets/siren-icon.png", label: "Patrulhamento"},
        ]
    },
    {
        name:"Tecido tecnológico PlasmaTex",
        description: "Doenças transmitidas por mosquitos, como a dengue, são um problema crescente no Brasil e no mundo. A Aeronaval está revolucionando a proteção contra doenças transmitidas por mosquitos, com uma tecnologia de plasma frio que incorpora repelentes diretamente em tecidos. Esses materiais tratados oferecem uma defesa eficaz e prática para roupas esportivas, uniformes e fardas. Além de atender setores de defesa e civil, estamos impulsionando a inovação para futuras aplicações aeroespaciais.",
        imgUrl: "src/assets/fabric-bg.jpg",
        icons: [
          {icon: "src/assets/shirt-icon.png", label: "Vestuário Inovador"},
          {icon: "src/assets/mesh-icon.png", label: "Tecido Tecnológico"},
          {icon: "src/assets/factory-icon.png", label: "Sustentabilidade"},
        ]
    },
];