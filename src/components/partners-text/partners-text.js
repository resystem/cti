import React, { useRef, useState } from 'react';
import './partners-text.css';

const texts = {
  pt: (
    <>
      <p>Após o termino de dois ciclos de projetos com apoio do Fundo Newton, o Centro de Trabalho Indigenista (CTI), em parceria com a Comissão Guarani Yvyrupa (CGY), o Centre for the Anthropology of Sustainability (CAOS), da University College London e a Associação Ashaninka do Rio Amônia, receberam o Prêmio Newton 2018. O Prêmio deu continuidade ao apoio ao fortalecimento das formas de viver do povo Guarani em seu território em interdependência com a proteção da Mata Atlântica e em diálogo com os saberes do povo indígena Ashaninka e com a comunidade acadêmica.</p>
      <h2>CAOS - Centre for the Anthropology of Sustainability</h2>
      <p>O Centro para a Antropologia da Sustentabilidade - CAOS da Universidade College London, fundado em 2014, é um centro de pesquisa de referência em sustentabilidade social e ambiental, buscando construir pontes entre a academia e a sociedade civil, olhando para a produção de conhecimento de outros segmentos da sociedade. Para mais informações, visite o site do CAOS: https://www.ucl.ac.uk/ anthropology/research/caos</p>
      <h2>CGY - Comissão Guarani Yvyrupa</h2>
      <p>A Comissão Guarani Yvyrupa (CGY), fundada em 2006, é uma organização indígena que congrega coletivos do povo guarani das regiões Sul e Sudeste do Brasil em torno da luta pela efetivação de seus direitos territoriais. Para mais informações, visite o site da CGY: http://www.yvyrupa.org.br/</p>
      <h2>Apiwtxa - Associação Ashaninka do Rio Amônia</h2>
      <p>A Associação Apiwtxa representa os moradores da Terra Indígena Kampa do Rio Amônia, situada no estado amazônico do Acre. O povo Ashaninka de Apiwtxa tem um histórico de enfrentamento de ameaças ao seu território - como desmatamento e degradação florestal - e de resistência cultural. Também montou o centro educacional “Yorenka Ãtame”, que promove práticas culturais e formação em gestão territorial e ambiental com grupos indígenas e não indígenas. <br /> Para mais informações, visite o site da Apiwtxa: https://apiwtxa.org.br/</p>
      <h2>Fundo Newton</h2>
      <p>O Fundo Newton constrói parcerias de pesquisa e inovação com 17 países parceiros ativos para apoiar seu desenvolvimento econômico e bem-estar social, e para desenvolver sua capacidade de pesquisa e inovação para um crescimento sustentável de longo prazo. O Fundo Newton é administrado pelo Departamento de Negócios, Energia e Estratégia Industrial (BEIS) do Reino Unido. <br /> Para mais informações, visite o site do Newton Fund: www.newtonfund.ac.uk e siga via Twitter: @NewtonFund </p>
    </>
  ),
  en: (
    <>
      <p>Após o termino de dois ciclos de projetos com apoio do Fundo Newton, o Centro de Trabalho Indigenista (CTI), em parceria com a Comissão Guarani Yvyrupa (CGY), o Centre for the Anthropology of Sustainability (CAOS), da University College London e a Associação Ashaninka do Rio Amônia, receberam o Prêmio Newton 2018. O Prêmio deu continuidade ao apoio ao fortalecimento das formas de viver do povo Guarani em seu território em interdependência com a proteção da Mata Atlântica e em diálogo com os saberes do povo indígena Ashaninka e com a comunidade acadêmica.</p>
      <h2>CAOS - Centre for the Anthropology of Sustainability</h2>
      <p>O Centro para a Antropologia da Sustentabilidade - CAOS da Universidade College London, fundado em 2014, é um centro de pesquisa de referência em sustentabilidade social e ambiental, buscando construir pontes entre a academia e a sociedade civil, olhando para a produção de conhecimento de outros segmentos da sociedade. Para mais informações, visite o site do CAOS: https://www.ucl.ac.uk/ anthropology/research/caos</p>
      <h2>CGY - Comissão Guarani Yvyrupa</h2>
      <p>A Comissão Guarani Yvyrupa (CGY), fundada em 2006, é uma organização indígena que congrega coletivos do povo guarani das regiões Sul e Sudeste do Brasil em torno da luta pela efetivação de seus direitos territoriais. Para mais informações, visite o site da CGY: http://www.yvyrupa.org.br/</p>
      <h2>Apiwtxa - Associação Ashaninka do Rio Amônia</h2>
      <p>A Associação Apiwtxa representa os moradores da Terra Indígena Kampa do Rio Amônia, situada no estado amazônico do Acre. O povo Ashaninka de Apiwtxa tem um histórico de enfrentamento de ameaças ao seu território - como desmatamento e degradação florestal - e de resistência cultural. Também montou o centro educacional “Yorenka Ãtame”, que promove práticas culturais e formação em gestão territorial e ambiental com grupos indígenas e não indígenas. <br /> Para mais informações, visite o site da Apiwtxa: https://apiwtxa.org.br/</p>
      <h2>Fundo Newton</h2>
      <p>O Fundo Newton constrói parcerias de pesquisa e inovação com 17 países parceiros ativos para apoiar seu desenvolvimento econômico e bem-estar social, e para desenvolver sua capacidade de pesquisa e inovação para um crescimento sustentável de longo prazo. O Fundo Newton é administrado pelo Departamento de Negócios, Energia e Estratégia Industrial (BEIS) do Reino Unido. <br /> Para mais informações, visite o site do Newton Fund: www.newtonfund.ac.uk e siga via Twitter: @NewtonFund </p>
    </>
  ),
  es: (
    <>
      <p>Após o termino de dois ciclos de projetos com apoio do Fundo Newton, o Centro de Trabalho Indigenista (CTI), em parceria com a Comissão Guarani Yvyrupa (CGY), o Centre for the Anthropology of Sustainability (CAOS), da University College London e a Associação Ashaninka do Rio Amônia, receberam o Prêmio Newton 2018. O Prêmio deu continuidade ao apoio ao fortalecimento das formas de viver do povo Guarani em seu território em interdependência com a proteção da Mata Atlântica e em diálogo com os saberes do povo indígena Ashaninka e com a comunidade acadêmica.</p>
      <h2>CAOS - Centre for the Anthropology of Sustainability</h2>
      <p>O Centro para a Antropologia da Sustentabilidade - CAOS da Universidade College London, fundado em 2014, é um centro de pesquisa de referência em sustentabilidade social e ambiental, buscando construir pontes entre a academia e a sociedade civil, olhando para a produção de conhecimento de outros segmentos da sociedade. Para mais informações, visite o site do CAOS: https://www.ucl.ac.uk/ anthropology/research/caos</p>
      <h2>CGY - Comissão Guarani Yvyrupa</h2>
      <p>A Comissão Guarani Yvyrupa (CGY), fundada em 2006, é uma organização indígena que congrega coletivos do povo guarani das regiões Sul e Sudeste do Brasil em torno da luta pela efetivação de seus direitos territoriais. Para mais informações, visite o site da CGY: http://www.yvyrupa.org.br/</p>
      <h2>Apiwtxa - Associação Ashaninka do Rio Amônia</h2>
      <p>A Associação Apiwtxa representa os moradores da Terra Indígena Kampa do Rio Amônia, situada no estado amazônico do Acre. O povo Ashaninka de Apiwtxa tem um histórico de enfrentamento de ameaças ao seu território - como desmatamento e degradação florestal - e de resistência cultural. Também montou o centro educacional “Yorenka Ãtame”, que promove práticas culturais e formação em gestão territorial e ambiental com grupos indígenas e não indígenas. <br /> Para mais informações, visite o site da Apiwtxa: https://apiwtxa.org.br/</p>
      <h2>Fundo Newton</h2>
      <p>O Fundo Newton constrói parcerias de pesquisa e inovação com 17 países parceiros ativos para apoiar seu desenvolvimento econômico e bem-estar social, e para desenvolver sua capacidade de pesquisa e inovação para um crescimento sustentável de longo prazo. O Fundo Newton é administrado pelo Departamento de Negócios, Energia e Estratégia Industrial (BEIS) do Reino Unido. <br /> Para mais informações, visite o site do Newton Fund: www.newtonfund.ac.uk e siga via Twitter: @NewtonFund </p>
    </>
  ),
}

const PartinersText = ({ language, onClose }) => {
  const [isBottom, setIsBottom] = useState(false);
  const text = useRef();

  return (
    <div className='partners-text-wrapper' onClick={onClose}>
      <div
        ref={text}
        className="partners-text"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {texts[language]}

        <div className="logos">
          <figure>
            <img src="https://cti-assets.s3.us-west-2.amazonaws.com/logos/LOGO+4+CTI.png" />
          </figure>
          <figure>
            <img src="https://cti-assets.s3.us-west-2.amazonaws.com/logos/Logo_CAOS.jpg" />
          </figure>
          <figure>
            <img src="https://cti-assets.s3.us-west-2.amazonaws.com/logos/LOGO+5+CGY.png" />
          </figure>
          <figure>
            <img src="https://cti-assets.s3.us-west-2.amazonaws.com/logos/Newton-Fund-Master-rgb.jpg" />
          </figure>
          <figure>
            <img src="https://cti-assets.s3.us-west-2.amazonaws.com/logos/Logo+AB+Ashaninka+5+(1).jpg" />
          </figure>
          <figure>
            <img src="https://cti-assets.s3.us-west-2.amazonaws.com/logos/img-detailed-Dept-for-Business-Energy-and-Industrial-Strat_294_AW(1).png" />
          </figure>
        </div>

        <footer>
          <img 
            onClick={() => {
              if (!text?.current) return;

              if (isBottom) text.current.scrollTop = -100;
              else text.current.scrollTop += 100;

              const isB = (text.current.scrollTop + text.current.clientHeight) >= text.current.scrollHeight;
              setIsBottom(isB);
            }}
            style={{ transform: isBottom ? 'rotate(180deg)' : 'rotate(0deg)', transitionDuration: '200ms' }}
            src="https://cti-assets.s3.us-west-2.amazonaws.com/buttons/setas2.png"
          />
        </footer>
      </div>
    </div>
  );
};

export default PartinersText;
