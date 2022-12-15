import React, { useRef, useState } from 'react';
import './about-text.css';

const texts = {
  pt: (
    <>
     <p><span>ENQUANTO ISSO</span> Após alguns meses de realização do projeto <i>Indigenous knowledge sharing networks to promote the wellbeing of Guarani and the restoration of the Atlantic Forest</i>, a pandemia de coronavírus chegou ao Brasil e as atividades tiverem que ser interrompidas e posteriormente repensadas e readequadas.</p>
     <p>Parte destes novos esforços foram direcionados ao apoio às produções audiovisuais de cineastas guarani, em filmes que já sonhavam realizar ou que criaram a partir da proposta de dialogar com o contexto.</p>
     <p>Os curta-metragens foram desenvolvidos de forma independente, e assim, surgiu a ideia do site, como um espaço que pudesse abrigar e exibir os diferentes vídeos criados. Assim, os vídeos podem manter sua individualidade, mas estão contextualizados num escopo de reflexões coletivas.</p>
     <p>“Um grande enquanto isso“, foi a expressão usada. Cada cineasta seguiu um desejo próprio, mas os filmes foram todos feitos em meio a pandemia, tratando ou não diretamente do assunto.</p>
     <p>Novos materiais começaram a ser coletados e produzidos. De aldeias de regiões variadas do país como o litoral do Rio de Janeiro, o interior do Paraná, a capital de São Paulo e a Amazônia Paraense, as lideranças guarani gravaram depoimentos sobre a situação das comunidades nos esforços de isolamento e contando as dificuldades impostas pela pandemia.</p>
     <p>A plataforma virtual também exibe gifs com algumas sequências de fotos captadas pouco antes da chegada do coronavírus. São imagens de rituais e das crianças na aldeia Pohã Renda, na conflituosa região Oeste do Paraná, municípios de Guaíra e Terra Roxa. Nesta mesma aldeia foi desenvolvido o único dos filmes do projeto realizado pela equipe do CTI: Ava Mocõi - Os gêmeos.</p>
     <p>Já o Ateliê virtual foi uma proposta de estabelecer um coletivo, entre artistas guarani e não indígenas, para criar ilustrações para o site. Os desenhos e pinturas foram produzidos em meio a uma dinâmica de encontros online e troca de referências via grupo de whatsapp. O processo durou alguns meses e ganhou um alcance maior do que o imaginado, gerando mais de 50 ilustrações, que estão dispostas na paisagem da plataforma.</p>
     <p>As artistas não indígenas, Ana e Julia Tranchesi e Sophia Pinheiro, se valeram dos  depoimentos dos filmes como inspiração para desenvolver os desenhos. Já as artistas guarani, Kerexu Martim e Patrícia Ferreira Yxapy, somaram ao tema dos depoimentos também referências de seu cotidiano nas aldeias.</p>
     <p>Além do Ateliê Virtual, alguns desenhos foram produzidos com as crianças da comunidade da aldeia Ara Poty, durante as gravações do filme Ayvu Nhexyrõ - No passo da palavra.</p>
     <br />
     <br />
     <p>Coordenação de conteúdo: Vinicius Toro</p>
     <p>Identidade visual e diagramação: Ana Sayeg Tranchesi e Julia Sayeg Tranchesi</p>
     <p>Programação: Coletivo Re/System</p>
     <p>Ilustrações: Ana Sayeg Tranchesi, Julia Sayeg Tranchesi, Kerexu Martim, Patrícia Ferreira Yxapy e Sophia Pinheiro</p>
     <p>Filmes: Alberto Álvares, Carlos Papa, Alexandre Kuaray, Werá Alexandre, Coletivo Mbya Guarani e Centro de Trabalho Indigenista</p>
     <p>Depoimentos: Xeramõi Agostinho, TI Guarani Araponga - RJ/SP, Leonardo Guarani e Regina - TI Nova Jacundá - PA, Jurandir Augusto Martim - TI Jaraguá-SP, Vicenta Takua e Gabriel Martines, TI Tekohá Guasu-Guavirá -PR</p>
     <p>Gifs: fotos de Pedro Biava, TI Tekohá Guasu-Guavirá -PR</p>
    </>
  ),
  en: (
    <>
      <p><span>ENQUANTO ISSO</span> A few months after the beginning of the project "Indigenous Knowledge Sharing Networks to promote the well-being of Guarani and the restoration of the Atlantic Forest", the coronavirus pandemic arrived in Brazil. At that moment, activities had to be interrupted and replanned and readjusted later on.</p>
      <p>Part of these new efforts were directed towards supporting film productions of Guarani filmmakers, films they had already dreamed of making or that they had created based on the exercise of establishing a dialogue with the context.</p>
      <p>The short films were developed independently, and thus emerged the idea of a website, a virtual space that could host and display different videos made by the filmmakers. Therefore, the videos can keep their individuality, but they are contextualized within a scope of collective reflections.</p>
      <p>“A great ‘in the meantime’”, was the expression used. Each filmmaker followed their own desire, but the films were all made in the middle of the pandemic, whether they dealt directly with the subject or not.</p>
      <p>New materials began to be collected and produced. Guarani leaders recorded statements from people in villages from a number of regions of the country, such as the coast of Rio de Janeiro, the countryside of Paraná, the capital of São Paulo and the Amazon region of Pará. The statements were about the situation of the communities during the isolation efforts and the difficulties imposed by the pandemic.</p>
      <p>The virtual platform also displays GIFs with a few series of pictures taken shortly before the arrival of the coronavirus. There are images of rituals and of children in the village of Pohã Renda, which is located in a region of conflict in western Paraná, in the cities of Guaíra and Terra Roxa. In the same village, the only film made by the CTI team was developed: Ava Mocõi - The Twins.</p>
      <p>The Ateliê Virtual was an invitation to form a collective of Guarani and non-native artists that could create illustrations for the website. The drawings and paintings were produced within a combination of online meetings and exchange of references in a WhatsApp group. The process lasted a few months and reached a broader audience than expected. It resulted in more than 50 illustrations, which are displayed in the platform.</p>
      <p>The non-native artists, Ana and Julia Tranchesi and Sophia Pinheiro, used the films' statements as an inspiration to make the drawings. Guarani artists Kerexu Martim and Patrícia Ferreira Yxapy also added references from their daily lives in the villages to the statements.</p>
      <p>In addition to the Ateliê Virtual, some drawings were produced with the children from the Ara Poty community, during the shooting of Ayvu Nhexyrõ - For every word, a step forward.</p>
      <br />
      <br />
      <p>Content coordination: Vinicius Toro</p>
      <p>Visual identity and layout: Ana Sayeg Tranchesi and Julia Sayeg Tranchesi</p>
      <p>Programming: Re/System Collective</p>
      <p>Illustrations: Ana Sayeg Tranchesi, Julia Sayeg Tranchesi, Kerexu Martim, Patrícia Ferreira Yxapy and Sophia Pinheiro</p>
      <p>Films: Alberto Álvares, Carlos Papa, Alexandre Kuaray, Werá Alexandre, Mbya Guarani Collective and Centro de Trabalho Indigenista</p>
      <p>Statements: Xeramõi Agostinho, Indigenous Land of Guarani Araponga - RJ/SP, Leonardo Guarani and Regina - Indigenous Land of Nova Jacundá - PA, Jurandir Augusto Martim - Indigenous Land of Jaraguá - SP, Vicenta Takua and Gabriel Martines, Indigenous Land of Tekohá Guasu - Guavirá - PR</p>
      <p>GIFs: pictures by Pedro Biava, Indigenous Land of Tekohá Guasu-Guavirá - PR</p>
    </>
  ),
  es: (
    <>
      <p><span>ENQUANTO ISSO</span> Unos meses después del inicio del proyecto Indigenous knowledge sharing networks to promote the wellbeing of Guarani and the restoration of the Atlantic Forest, llegó la pandemia del coronavirus a Brasil. En ese momento fue necesario interrumpir las actividades y luego repensarlas y reajustarlas.</p>
      <p>Parte de los nuevos esfuerzos se dirigieron a apoyar las producciones audiovisuales de cineastas guaraníes en películas que ya soñaban con hacer o que crearon a partir de la propuesta de dialogar con el contexto.</p>
      <p>Los cortometrajes se desarrollaron de forma independiente, y así surgió la idea del sitio web como un espacio para albergar y mostrar los diferentes videos creados. De esta manera, los videos pueden mantener su individualidad al mismo tiempo que se contextualizan dentro de un ámbito de reflexiones colectivas.</p>
      <p>“Un gran mientras tanto” fue la expresión utilizada. Cada cineasta siguió su propio deseo, pero todas las películas se hicieron en medio de la pandemia, tratando directamente del tema en algunos casos.</p>
      <p>Se empezó a recolectar y producir nuevos materiales. Desde pueblos de varias regiones del país, como el litoral de Río de Janeiro, el interior de Paraná, la capital de São Paulo y la Amazonia Paraense, los líderes guaraníes registraron testimonios sobre la situación de las comunidades en el contexto de los esfuerzos de aislamiento y de las dificultades impuestas por la pandemia.</p>
      <p>La plataforma virtual también muestra gifs con secuencias de fotos tomadas poco antes de la llegada del coronavirus. Son imágenes de rituales y de niñas y niños en el pueblo de Pohã Renda, en la conflictiva región oeste de la provincia de Paraná, en los municipios de Guaíra y Terra Roxa. En este mismo pueblo se desarrolló la única película del proyecto realizada por el equipo del CTI: “Ava Mocõi – Os gêmeos” (“Ava Mocõi – Los Gemelos”).</p>
      <p>A su vez, el Ateliê Virtual (Taller Virtual) fue una propuesta para establecer un colectivo, entre artistas guaraníes y no indígenas, con el objetivo de crear ilustraciones para el sitio web. Los dibujos y pinturas se produjeron en medio de una dinámica de encuentros online e intercambios de referencias a través de un grupo de WhatsApp. El proceso tomó unos meses y tuvo un alcance más amplio de lo imaginado, generando más de 50 ilustraciones que se muestran en el paisaje de la plataforma.</p>
      <p>Las artistas no indígenas Ana y Julia Tranchesi y Sophia Pinheiro utilizaron los testimonios de las películas como inspiración para desarrollar los dibujos. Las artistas guaraníes Kerexu Martim y Patrícia Ferreira Yxapy también agregaron al tema de los testimonios referencias de su vida cotidiana en los pueblos.</p>
      <p>Además del Ateliê Virtual, se realizaron algunos dibujos con las niñas y niños de la comunidad del pueblo Ara Poty durante el rodaje de la película “Ayvu Nhexyrõ – No passo da palavra” (“Ayvu Nhexyrõ – En el paso de la palabra”).</p>
      <br />
      <br />
      <p>Coordinación de contenido: Vinicius Toro</p>
      <p>Identidad visual y maquetación: Ana Sayeg Tranchesi y Julia Sayeg Tranchesi</p>
      <p>Programación: Colectivo Re/System</p>
      <p>Ilustraciones: Ana Sayeg Tranchesi, Julia Sayeg Tranchesi, Kerexu Martim, Patrícia Ferreira Yxapy y Sophia Pinheiro</p>
      <p>Películas: Alberto Álvares, Carlos Papa, Alexandre Kuaray, Werá Alexandre, Coletivo Mbya Guarani y Centro de Trabalho Indigenista</p>
      <p>Testimonios: Xeramõi Agostinho, TI Guarani Araponga-RJ/SP, Leonardo Guarani y Regina - TI Nova Jacundá-PA, Jurandir Augusto Martim - TI Jaraguá-SP, Vicenta Takua y Gabriel Martines, TI Tekohá Guasu-Guavirá-PR</p>
      <p>Gifs: fotos de Pedro Biava, TI Tekohá Guasu-Guavirá -PR</p>
    </>
  ),
};

const AboutText = ({ language, onClose }) => {
  const [isBottom, setIsBottom] = useState(false);
  const text = useRef();

  return (
    <div className='about-text-wrapper' onClick={onClose}>
      <div
        className="about-text"
        ref={text}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="text">
          {texts[language]}
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

export default AboutText;
