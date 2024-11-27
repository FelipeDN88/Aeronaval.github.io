import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { useDeviceType } from "../hooks/DevicesTypes";
import { ProjectCard } from "./cards/ProjectCard";
import { ProjectsStyles, TextStyles } from "../styles/styles";

const Projects: React.FC = () => {
    const { isMobile } = useDeviceType();
    const [visibleCategory, setVisibleCategory] = useState<string | null>(null);

    const toggleCategoryVisibility = (category: string) => {
        setVisibleCategory(visibleCategory === category ? null : category);
    };

    const categories = [...new Set(projects.map((project) => project.category))];

    return (
        <div className={ProjectsStyles.container}>
            <div className={ProjectsStyles.titleContainer}>
                <h1 className={`text-white ${TextStyles.title}`}>Projetos</h1>
            </div>

            {categories.map((category) => (
                <div key={category}>
                    <div className={ProjectsStyles.buttonContainer}>
                        <button
                            onClick={() => toggleCategoryVisibility(category)}
                            className={`${ProjectsStyles.toggleButton}`}
                        >
                            {category}
                        </button>
                    </div>

                    {visibleCategory === category && (
                        <div className={ProjectsStyles.hoverSection.container}>
                            <p className={ProjectsStyles.hoverSection.paragraph}>
                                {category === "Hovercraft"
                                    ? "Os hovercrafts são veículos anfíbios capazes de se deslocarem sobre diferentes superfícies, como água, terra, terrenos pantanosos e gelo, utilizando um colchão de ar gerado pelos motores. Esse sistema de sustentação permite que o veículo levite a uma curta distância do solo, reduzindo o atrito e garantindo alta mobilidade em áreas de difícil acesso. Seu uso é amplamente aplicado em operações de resgate, transporte em regiões alagadas e patrulhas, especialmente em locais onde veículos convencionais enfrentam limitações."
                                    : "A Aeronaval tem buscado diversificar suas pesquisas com a intenção de expandir horizontes no setor aeroespacial. Com esse objetivo estratégico, estamos iniciando estudos voltados para tecnologia de plasma, desenvolvendo o projeto PlasmaTex. Essa pesquisa visa criar um equipamento de plasma capaz de realizar o beneficiamento de diversos tecidos, fornecendo recursos como repelência a insetos e proteção UV, além de outras propriedades úteis para os setores aeroespaciais e de defesa. Com o roteiro planejado, nosso objetivo é ser uma empresa de referência no desenvolvimento de tecnologias com plasmas não térmicos."}
                            </p>
                        </div>
                    )}

                    <div
                        className={`${ProjectsStyles.projectsList} ${
                            isMobile ? "flex-col items-center" : "flex-row justify-center"
                        }`}
                    >
                        {projects
                            .filter((project) => project.category === category)
                            .map((project, index) => (
                                <ProjectCard
                                    key={`project-${index}`}
                                    name={project.name}
                                    description={project.description}
                                    imgUrl={project.imgUrl}
                                    icons={project.icons}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const WrappedProjects = SectionWrapper(Projects, "projects");
export default WrappedProjects;
