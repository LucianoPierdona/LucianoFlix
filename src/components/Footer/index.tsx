import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Proudly created in the
        {' '}
        <a href="https://www.alura.com.br/">
          React Immersion from Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
