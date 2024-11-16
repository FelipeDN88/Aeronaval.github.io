import React from 'react';
import { SectionWrapper } from '../hoc';
import { FooterStyles, TextStyles } from '../styles/styles';
import { useDeviceType } from '../utils/DevicesTypes';

const Footer: React.FC = () => {
  const { isMobile } = useDeviceType();

  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.flexContainer}>
        <div className={FooterStyles.leftColumn}>
          <h3
            className={`text-center ${TextStyles.paragraph}`}
            style={{ fontSize: isMobile ? '16px' : '20px' }}
          >
            Brasil
          </h3>
          <p
            className={`text-center ${TextStyles.smallParagraph}`}
            style={{ fontSize: isMobile ? '12px' : '18px', lineHeight: isMobile ? '20px' : '25px' }}
          >
            Praça Marechal-do-Ar Eduardo Gomes, 50
          </p>
          <p
            className={`text-center ${TextStyles.smallParagraph}`}
            style={{ fontSize: isMobile ? '12px' : '18px', lineHeight: isMobile ? '20px' : '25px' }}
          >
            Campus DCTA, Incubaero
          </p>
          <p
            className={`text-center ${TextStyles.smallParagraph}`}
            style={{ fontSize: isMobile ? '12px' : '18px', lineHeight: isMobile ? '20px' : '25px' }}
          >
            São José dos Campos - SP Brasil
          </p>
          <p
            className={`text-center ${TextStyles.smallParagraph}`}
            style={{ fontSize: isMobile ? '12px' : '18px', lineHeight: isMobile ? '20px' : '25px' }}
          >
            Telefone: (19) 99997-9575
          </p>
          <p
            className={`text-center ${TextStyles.smallParagraph}`}
            style={{ fontSize: isMobile ? '12px' : '18px', lineHeight: isMobile ? '20px' : '25px' }}
          >
            Email:{' '}
            <a href="mailto:felipedavila@aeronaval.org" className={FooterStyles.emailLink}>
              felipedavila@aeronaval.org
            </a>
          </p>
        </div>

        <div className={FooterStyles.centerColumn}>
          <p
            className={FooterStyles.footerText}
            style={{ fontSize: isMobile ? '8px' : '14px' }}
          >
            © Aeronaval - Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

const NamedFooter = SectionWrapper(Footer, 'contact');
export default NamedFooter;
