interface Project {
    name: string;
    description: string;
    imgUrl: string;
    icons: {icon: string, label: string}[];
    category: "Hovercraft" | "PlasmaTex";
}

interface Navlink {
    id: string;
    title: string;
}

export const navLinks: Navlink[] = [
    {id: "home", title: "Início"},
    {id: "about", title: "Sobre"},
    {id: "projects", title: "Projetos"},
    {id: "services", title: "Serviços"},
    {id: "consulting", title: "Consultoria"},
    {id: "contact", title: "Contato"},
];

export const projects: Project[] = [
    {
      name: "ANV-PAX",
      description:
        "O ANV-PAX é um hovercraft projetado para o transporte de passageiros e carga, com capacidade de 2700 kg. Com um suporte logístico cuidadosamente planejado, ele oferece versatilidade, robustez, segurança e alta disponibilidade para operadores que buscam expandir seus negócios. Sua estrutura foi desenvolvida para atender às exigências das Normas da Autoridade Marítima, integrando soluções consagradas nos setores naval e aeroespacial.",
      imgUrl: "",
      icons : [
        {icon: "/speed-icon.png", label: "Velocidade"},
        {icon: "/maintenance-icon.png", label: "Manutenibilidade"},
        {icon: "/accessibility-icon.png", label: "Acessibilidade"},
        {icon: "/clipboard-icon.png", label: "Muiltiemprego"},
      ],
      category: "Hovercraft",
    },
    {
        name:"ANV-SAR",
        description: "O ANV-SAR é um hovercraft inovador, inicialmente projetado para equipes de resgate dos Corpos de Bombeiros, oferecendo modularidade, portabilidade e resistência excepcionais. Ideal para situações críticas como enchentes e rompimentos de barragens, ele proporciona transporte fácil e segurança máxima, garantindo uma resposta ágil e eficaz em situações críticas e emergenciais.",
        imgUrl: "",
        icons: [
          {icon: "/modularity-icon.png", label: "Modularidade"},
          {icon: "/forklift-icon.png", label: "Portabilidade"},
          {icon: "/security-icon.png", label: "Segurança"},
          {icon: "/clipboard-icon.png", label: "Muiltiemprego"},
          {icon: "/resgate.png", label: "Resgate"},
          {icon: "/earth-icon.png", label: "Turismo Náutico"},
          {icon: "/siren-icon.png", label: "Patrulhamento"},
        ],
        category: "Hovercraft",
    },
    {
        name:"Tecido tecnológico PlasmaTex",
        description: "Doenças transmitidas por mosquitos, como a dengue, são um problema crescente no Brasil e no mundo. A Aeronaval está revolucionando a proteção contra doenças transmitidas por mosquitos, com uma tecnologia de plasma frio que incorpora repelentes diretamente em tecidos. Esses materiais tratados oferecem uma defesa eficaz e prática para roupas esportivas, uniformes e fardas. Além de atender ao setor têxtil, estamos impulsionando a inovação para aplicações aeroespaciais.",
        imgUrl: "",
        icons: [
          {icon: "/shirt-icon.png", label: "Vestuário Inovador"},
          {icon: "/mesh-icon.png", label: "Tecido Tecnológico"},
          {icon: "/factory-icon.png", label: "Sustentabilidade"},
        ],
        category: "PlasmaTex",
    },
];