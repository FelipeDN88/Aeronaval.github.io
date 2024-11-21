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
                                    : "PlasmaTex é um projeto inovador que visa desenvolver uma nova geração de materiais texturizados utilizando tecnologia de plasma. Esses materiais oferecem propriedades únicas, como alta resistência a impactos e resistência a condições ambientais extremas. A Aeronaval está explorando aplicações do PlasmaTex em setores como moda, transporte e proteção pessoal, visando não apenas a funcionalidade, mas também a estética e o conforto dos produtos finais. Com PlasmaTex, buscamos redefinir o que é possível em design e engenharia de materiais."}
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
