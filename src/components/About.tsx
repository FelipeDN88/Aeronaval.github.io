import React from 'react';
import "../styles/background.css";
import LogoCircular from '../assets/logo-circular.png';
import { SectionWrapper } from '../hoc';
import { AboutStyles, TextStyles } from '../styles/styles';

const About: React.FC = () => {
    return (
      <div className={AboutStyles.container}>
        <div className={AboutStyles.content}>
          <h1 className={`mb-5 ${TextStyles.title}`}>
            Bem-vindo à Aeronaval
          </h1>
          <p className={`${TextStyles.paragraph} ${AboutStyles.justifiedText}`}>
          A Aeronaval é uma empresa dedicada ao desenvolvimento de soluções tecnológicas para os setores aeroespacial e naval. Nossa missão é expandir o horizonte de possibilidades para nossos clientes, oferecendo produtos e serviços inovadores.
         <br />
         <br />
         Convidamos você a explorar as possibilidades que a Aeronaval tem a oferecer. Descubra como nossa expertise e inovação podem transformar suas ideias em realidade e impulsionar o sucesso de suas operações.
         </p>
          <img src={LogoCircular} alt="Logo Circular" className={AboutStyles.logo} />
        </div>
      </div>
    );
};

const NamedAbout = SectionWrapper(About, "about");
export default NamedAbout;
