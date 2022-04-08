import React, { useEffect, useState } from 'react';
import './about-text.css';

const AboutText = ({ onClose }) => {
  return (
    <div className='about-text-wrapper' onClick={onClose}>
      <div
        className="about-text"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p><span>ENQUANTO ISSO</span> Após alguns meses de realização do projeto <i>Indigenous knowledge sharing networks to promote the wellbeing of Guarani and the restoration of the Atlantic Forest</i>, a pandemia de coronavírus chegou ao Brasil e as atividades tiverem que ser interrompidas e posteriormente repensadas e readequadas.</p>
        <p>Parte destes novos esforços se direcionou a apoiar a produção audiovisual de cineastas guaranis, em filmes que já sonhavam realizar ou que criaram a partir da atual proposta.</p>
        <p>Os curta-metragens foram desenvolvidos de forma independente, e assim, surgiu a ideia do site, como um espaço que pudesse abrigar e exibir os diferentes vídeos criados, de forma a manterem sua individualidade, mas contextualizando-os num escopo coletivo.</p>
        <p>Um grande enquanto isso“, foi a expressão usada, e cada um seguiu um desejo próprio, mas todos sendo feitos em meio a pandemia, tratando ou não diretamente do assunto.</p>
        <p>Novos materiais começaram a serem coletados e produzidos. De aldeias de regiões variadas do país como o litoral do Rio de Janeiro, o interior do Paraná, a capital de São Paulo e a amazônia Paraense.</p>
      </div>
    </div>
  );
};

export default AboutText;
