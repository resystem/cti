import React, { useRef, useState } from 'react';
import './cti-text.css';

const texts = {
  pt: (
    <>
      <p>O Centro de Trabalho Indigenista – CTI é uma associação sem fins lucrativos, fundada em março de 1979 por antropólogos e indigenistas. É constituído por profissionais com formação e experiência qualificadas e comprometidos com o futuro dos povos indígenas. Tem como marca de sua identidade a atuação direta em Terras Indígenas por meio de projetos elaborados a partir de demandas locais, visando contribuir para que os povos indígenas assumam o controle efetivo de seus territórios, e apoiando suas formas de organização na  proteção e garantia de seus direitos constitucionais. </p>
      <p>As primeiras ações do CTI junto aos Guarani, em 1979, foram realizadas nas aldeias situadas no município de São Paulo. De lá para cá, a parceria  se expandiu pela Yvyrupa, termo utlizado pelos Guarani para o contínuo território tradicional, atualmente espalhado por todos os estados do sul e sudeste, pelo Mato Grosso do Sul e presente também no Pará.. Ao longo do tempo, além de ações voltadas ao reconhecimento dos direitos territoriais dos Guarani, o CTI apoiou a realização de intercâmbios culturais entre diversas aldeias, fortalecendo os rituais e os laços de parentesco e reciprocidade.  Ao mesmo tempo, deu suporte para a sustentabilidade das comunidades e conservação das terras Guarani, fortalecendo a permanência no território, por meio de atividades de recuperação de áreas com espécies que fazem parte do acervo cultural guarani e de apoio à agricultura e à conservação de cultivos tradicionais. Foi no CTI também que se originou o Vídeo nas Aldeias, projeto que tomou rumo próprio na formação audiovisual e produção de filmes em terras indígenas, mas que tem, ainda hoje no CTI, iniciativas convergentes nas intenções de estimular as produções indígenas.</p>
      <p>Saiba mais em www.trabalhoindigenista.org.br</p>
      <br />
      <p>Centro de Trabalho Indigenista – CTI </p>
      <br />
      <p>Presidência: Andréia Bavaresco</p>
      <p>Conselho Estratégico: Maria Auxiliadora Cruz de Sá Leão, Maria Elisa Ladeira, Maria Inês, Ladeira, Jaime Siqueira, Juliana Noleto e Eliza Castilla</p>
      <p>Coordenação Executiva: Jaime Siqueira</p>
      <p>Coordenação Geral: Eliza Castilla, Helena Ladeira, Juliana Noleto, Marcelo Hotimsky, Priscila Chianca e Renato Bock.</p>
      <br />
      <br />
      <p>
        <strong>Projeto Indigenous knowledge sharing networks to promote the wellbeing of Guarani and the restoration of the Atlantic Forest</strong>
      </p>
      <p>Coordenação do projeto: Teresa Paris</p>
      <p>Equipe: Daiane Camargo, Eliza Castilla, Inaiá de Carvalho, Maria Inês Ladeira, Rafael Nakamura, Rodrigo Cossio e Vinicius Toro</p>
    </>
  ),
  en: (
    <>
      <p>El Centro de Trabalho Indigenista (Centro de Trabajo Indigenista – CTI) es una asociación sin fines de lucro, fundada en marzo de 1979 por antropólogos e indigenistas. Está integrado por profesionales con formación y experiencia calificadas y comprometidos con el futuro de los pueblos indígenas. La marca de su identidad es su acción directa en Tierras Indígenas por medio de proyectos que se desarrollan con base en demandas locales, con el objetivo de contribuir a que los pueblos indígenas asuman el control efectivo de sus territorios y de apoyar sus formas de organización para la protección y garantía de sus derechos constitucionales.</p>
      <p>Las primeras acciones del CTI con los guaraníes, en 1979, se llevaron a cabo en pueblos ubicados en el municipio de São Paulo. Desde entonces, la alianza se ha expandido por la Yvyrupa, término utilizado por los guaraníes para denominar su territorio tradicional continuo, actualmente esparcido por todos los estados de las regiones Sur y Sureste de Brasil y también presente en las provincias de Mato Grosso do Sul (región Centro-Oeste) y Pará (región Norte). A lo largo del tiempo, además de acciones dirigidas al reconocimiento de los derechos territoriales de los guaraníes, el CTI ha apoyado la realización de intercambios culturales entre diversos pueblos, fortaleciendo los ritos y lazos de parentesco y reciprocidad. Al mismo tiempo, ha dado soporte a la sostenibilidad de las comunidades y a la conservación de las tierras guaraníes, fortaleciendo su permanencia en el territorio a través de actividades de recuperación de áreas con especies que son parte del patrimonio cultural guaraní y del apoyo a la agricultura y a la conservación de cultivos tradicionales. Fue también en el CTI donde se creó el proyecto “Vídeo nas Aldeias” (“Video en los Pueblos”), que siguió su camino en la formación audiovisual y en la producción cinematográfica en tierras indígenas, pero que aún cuenta, en el CTI, con iniciativas convergentes en el estímulo de las producciones indígenas.</p>
      <p>Obtenga más información en www.trabalhoindigenista.org.br</p>
      <br />
      <p>Centro de Trabajo Indigenista – CTI</p>
      <br />
      <p>Presidencia: Andréia Bavaresco</p>
      <p>Consejo Estratégico: Maria Auxiliadora Cruz de Sá Leão, Maria Elisa Ladeira, Maria Inês, Ladeira, Jaime Siqueira, Juliana Noleto y Eliza Castilla</p>
      <p>Coordinación Ejecutiva: Jaime Siqueira</p>
      <p>Coordinación General: Eliza Castilla, Helena Ladeira, Juliana Noleto, Marcelo Hotimsky, Priscila Chianca y Renato Bock.</p>
      <br />
      <br />
      <p>
        <strong>Proyecto Indigenous knowledge sharing networks to promote the wellbeing of Guarani and the restoration of the Atlantic Forest</strong>
      </p>
      <p>Coordinación del proyecto: Teresa Paris</p>
      <p>Equipo: Daiane Camargo, Eliza Castilla, Inaiá de Carvalho, Maria Inês Ladeira, Rafael Nakamura, Rodrigo Cossio y Vinicius Toro</p>
    </>
  ),
  es: (
    <>
      <p>El Centro de Trabalho Indigenista (Centro de Trabajo Indigenista – CTI) es una asociación sin fines de lucro, fundada en marzo de 1979 por antropólogos e indigenistas. Está integrado por profesionales con formación y experiencia calificadas y comprometidos con el futuro de los pueblos indígenas. La marca de su identidad es su acción directa en Tierras Indígenas por medio de proyectos que se desarrollan con base en demandas locales, con el objetivo de contribuir a que los pueblos indígenas asuman el control efectivo de sus territorios y de apoyar sus formas de organización para la protección y garantía de sus derechos constitucionales.</p>
      <p>Las primeras acciones del CTI con los guaraníes, en 1979, se llevaron a cabo en pueblos ubicados en el municipio de São Paulo. Desde entonces, la alianza se ha expandido por la Yvyrupa, término utilizado por los guaraníes para denominar su territorio tradicional continuo, actualmente esparcido por todos los estados de las regiones Sur y Sureste de Brasil y también presente en las provincias de Mato Grosso do Sul (región Centro-Oeste) y Pará (región Norte). A lo largo del tiempo, además de acciones dirigidas al reconocimiento de los derechos territoriales de los guaraníes, el CTI ha apoyado la realización de intercambios culturales entre diversos pueblos, fortaleciendo los ritos y lazos de parentesco y reciprocidad. Al mismo tiempo, ha dado soporte a la sostenibilidad de las comunidades y a la conservación de las tierras guaraníes, fortaleciendo su permanencia en el territorio a través de actividades de recuperación de áreas con especies que son parte del patrimonio cultural guaraní y del apoyo a la agricultura y a la conservación de cultivos tradicionales. Fue también en el CTI donde se creó el proyecto “Vídeo nas Aldeias” (“Video en los Pueblos”), que siguió su camino en la formación audiovisual y en la producción cinematográfica en tierras indígenas, pero que aún cuenta, en el CTI, con iniciativas convergentes en el estímulo de las producciones indígenas. </p>
      <p>Obtenga más información en www.trabalhoindigenista.org.br</p>
      <br />
      <p>Centro de Trabajo Indigenista – CTI </p>
      <br />
      <p>Presidencia: Andréia Bavaresco</p>
      <p>Consejo Estratégico: Maria Auxiliadora Cruz de Sá Leão, Maria Elisa Ladeira, Maria Inês, Ladeira, Jaime Siqueira, Juliana Noleto y Eliza Castilla</p>
      <p>Coordinación Ejecutiva: Jaime Siqueira</p>
      <p>Coordinación General: Eliza Castilla, Helena Ladeira, Juliana Noleto, Marcelo Hotimsky, Priscila Chianca y Renato Bock.</p>
      <br />
      <br />
      <p><strong>Proyecto Indigenous knowledge sharing networks to promote the wellbeing of Guarani and the restoration of the Atlantic Forest  </strong></p>
      <p>Coordinación del proyecto: Teresa Paris</p>
      <p>Equipo: Daiane Camargo, Eliza Castilla, Inaiá de Carvalho, Maria Inês Ladeira, Rafael Nakamura, Rodrigo Cossio y Vinicius Toro</p>
    </>
  ),
};

const CtiText = ({ language, onClose }) => {
  const [isBottom, setIsBottom] = useState(false);
  const text = useRef();

  return (
    <div className="partners-text-wrapper" onClick={onClose}>
      <div
        ref={text}
        className="partners-text"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text">
          {texts[language]}
        </div>

        <footer>
          <svg
            onClick={() => {
              if (!text?.current) return;

              if (isBottom) text.current.scrollTop = -100;
              else text.current.scrollTop += 100;

              const isB = (text.current.scrollTop + text.current.clientHeight) >= text.current.scrollHeight;
              setIsBottom(isB);
            }}
            style={{ transform: isBottom ? 'rotate(180deg)' : 'rotate(0deg)', transitionDuration: '200ms' }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24" fill="#68b7b0"
          >
            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </footer>
      </div>
    </div>
  );
};

export default CtiText;
