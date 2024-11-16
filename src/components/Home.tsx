import React from 'react';
// import LogoCircular from '../assets/logo-circular.png';
import BackgroundImage from '../assets/earth-bg.jpg';
import { SectionWrapper } from '../hoc';
import { HomeStyles, TextStyles } from '../styles/styles';

const Home: React.FC = () => {
  return (
    <div className={HomeStyles.container}>
      <div
        className={HomeStyles.background}
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      ></div>
      <div className={HomeStyles.content}>
        <h1 className={`mb-5 ${TextStyles.title}`}>AERONAVAL</h1>
        <p className={TextStyles.paragraph}>
          Expandindo horizontes com soluções tecnológicas, impulsionando inovação em regiões desafiadoras
        </p>
        {/* <img src={LogoCircular} alt="Logo Circular" className={HomeStyles.logo} /> */}
      </div>
    </div>
  );
};

const NamedHome = SectionWrapper(Home, "home");
export default NamedHome;
