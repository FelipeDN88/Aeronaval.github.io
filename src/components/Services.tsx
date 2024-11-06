import React from 'react';
import RocketImg from '../assets/rocket-img.jpg';
import LogoMlbr from '../assets/logo-mlbr.png';
import { SectionWrapper } from '../hoc';
import { ServicesStyles, TextStyles } from '../styles/styles';

const Services: React.FC = () => {
  return (
    <section className={ServicesStyles.section}>
      <div className={ServicesStyles.dividerTop}></div>
      <div 
        className={ServicesStyles.backgroundLayer}
        style={{ 
          backgroundImage: `url(${RocketImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          filter: 'brightness(0.9) contrast(1.1)',
        }}
      ></div>

            <h1 className={`text-center ${TextStyles.title}`}>Serviços</h1>
      <div className="relative flex items-center justify-center w-full h-full p-8">
        <div className={ServicesStyles.card.container}>
          <p className={`${TextStyles.paragraph} ${ServicesStyles.textContainer}`}>
            <strong className={TextStyles.subTitle}>Aeroespacial</strong>
            <br />
            <br />
            O Veículo Lançador de Pequeno Porte (VLPP), apoiado e financiado pela Financiadora de Estudos e Projetos (Finep) e coordenado pela Espacial Brasileira (AEB), é um microlançador inovador, projetado para colocar pequenos satélites em órbita com baixo custo e alta eficiência. Este projeto estratégico não só fortalece a autonomia do Brasil no setor aeroespacial, mas também posiciona o país de forma competitiva no mercado global de lançamentos espaciais, alinhando-se com a política nacional de desenvolvimento tecnológico e impulsionando a capacidade industrial e inovadora do Brasil.
            A Aeronaval orgulha-se de sua participação essencial no projeto do Microlançador Brasileiro (ML-BR). Estamos desenvolvendo o ferramental crítico para a fabricação dos motores de combustível sólido, garantindo a confiabilidade e a eficiência dos lançamentos. Nosso trabalho assegura alta repetibilidade na produção e atende aos rigorosos padrões de segurança, contribuindo significativamente para o sucesso do projeto.
          </p>
          <img
            src={LogoMlbr}
            alt="Logo MLBR"
            className={ServicesStyles.card.logo}
          />
        </div>
      </div>

      <div className={ServicesStyles.dividerBottom}></div>
    </section>
  );
};

const NamedServices = SectionWrapper(Services, "services");
export default NamedServices;
