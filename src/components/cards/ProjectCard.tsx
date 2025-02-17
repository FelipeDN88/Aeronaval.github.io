import React from "react";
import { ProjectCardStyles, TextStyles } from "../../styles/styles";
import TechCard from "./TechCard";

interface ProjectCardProps {
  name: string;
  description: string;
  imgUrl?: string;
  icons: { icon: string, label: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, imgUrl, icons }) => {
  return (
    <div className={ProjectCardStyles.container}>
      <div className={ProjectCardStyles.textContainer}>
        <h3 className={`mb-2 ${TextStyles.subTitle}`}>{name}</h3>
        <p className={`drop-shadow-[0_35px_35px_rgba(0,0,0,0.99)] ${TextStyles.paragraph}`}>
          {description}
        </p>

        {/* Adicionando a imagem aqui */}
        {imgUrl && (
          <div className="my-4">
            <img src={imgUrl} alt={name} className={ProjectCardStyles.image} />
          </div>
        )}

        <div className={ProjectCardStyles.iconsContainer}>
          {icons.map((tech, index) => (
            <TechCard key={index} icon={tech.icon} label={tech.label} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};