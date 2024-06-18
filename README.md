# Projeto Detalhando meus Hobbies

## Seções
<ul>
    <li>
        <a href="#desafios">Desafios </a><br/>
    </li>
    <li>
        <a href="#solucoes">Soluções</a>
    </li>
    <li>
        Documentação<br/>
    - <a href="#sinopse">Sinopse</a><br/>
    - <a href="#execution">Execução</a><br/>
    - <a href="#documentacao">Documentação</a><br/>
    - <a href="#fetch-api">Chamada de API</a>
    </li>
    <li>
        <a href="#visual">Visual do Projeto</a>
    </li>
</ul>

## Tecnologias Utilizadas
- HTML
- JS

## Bibliotecas Utilizadas
- React
- Vite
- Font Awesome
- Styled Components
- React Router Dom
- TMDB - Filmes e Séries

## Desafios
<ol id="desafios">
    <li>
        Integrar o Styled Components e useContext
    </li>
    <br/>
    <li>
        Importar images por url comapcta
    </li>
    <br/>
    <li>
        Sobreposição indevida do Modal sobre livros
    </li>
</ol>

## Soluções
<ol id="solucoes">
    <li>
        Criando um arquivo jsx e nele se utilizando do hook createContexte, e passando como objects os themas que o sistema poderá receber.<br/> E nos arquivos de código restante puxando seus estilos com useContext.
    </li>
    <br/>
    <li>
        Se utilizando da linha de código colocada no package.json = "vite-jsconfig-paths": "^2.0.1"". E dentro dos códicos se usa o "/path".
    </li>
    <br/>
    <li>
        Ao pensar que o erro estava na estilização, criei um arquivo novo para isso, porém o erro ainda persistia. Então joguei o Modal para fora do loop Map, que estava chamando um array de informações trazidas de um arquivo JSON, e ao ser clicado o button para o abrir, fazia a chamada de uma função a qual enviava os dados do livro proprietário deste botão e refiz o caminho de estilização. Assim, por fim, resolvi o erro de sobreposição. 
    </li>
</ol>    

## Documentação
<h3 id="documentacao">Minha documentação</h3>


<h4 id="sinopse">Sobre</h4>
<p>Para este projeto pensei a princípio em fazer uma landing page, com design feito no Figma, apresentando com react-router-dom, para uma simples apresentação.</p>
<p>Para sua estilização decidi fazer ele todo com styled-components, o qual me deu uma grande dor de cabeça, por ser meu primeiro projeto o usando tanto e tão detalhadamente. Juntamente dele com estudos trazidos do meu curso proficionalizante, DevQuest, usei o useContext para partilhar as configurações padrão de palheta de cor para todo o projeto por meio de props, assim conseguindo desenvolver també um projeto com tema light e dark.</p>

<h4 id="execution">Execução</h4>
<p>Para este projeto acabei assistindo alguns vídeos de sliders feitos com vanilla js e curti, implementei no projeto, ajustei para ser como se fosse um baralho de cards apresentando um e o escondendo atrás dos outros após ser selecionado o próximo card.<p/>
<p>Nos cards de Filmes, Livros, Música e Cozinha eu inseri um Button, e se ultilizando do react-router-dom, ao ser clicado levará para uma página com mais informações sobre este determinado hobbie</p>
<p>A página sobre os filmes, pensei em usar uma API, escolhi a do TMDB, criei minha conta e listas com meus filmes e séries assistidos e favoritos. Usando-se do Axios e de hook personalizada, fiz a chamada de API, introduzinho nela as informações para puxar as listas com as informações que queria. Para não ficar tão simples, criel um arquivo com a estrutura genérica para um Modal, e se ultilizando das informações vindas da API, apresento elas no Modal</p>
<p>E para a página de séries, a príncipio queria fazer a mesma coisa, porém a API que iria usar (Não vou falar para não levar processo) era realmente muito mal desenvolvida. Então Fiz um arquivo JSON inseria as informações que precisava, coloquei as imagens dos livros no public, e se utilizando do "vite-jsconfig-paths" mostro elas com as informações em um modal também.</p>
<p>Por fim, para o responsivo, se utilizando do Styled-components, usei suas configurações e as coloquei tanto nos próprios arquivos dos components, quanto no global-style, para aqueles mais gerais.</p>

<h4 id="fetch-api">Execução</h4>
<p>Para a chamada da API TMDB, após assistir e ler sobre requisições, optei por usar o axios. E criando um arquivo e assim criar um Hook personalizado, passando como parâmetro o método, o ID da lista de filmes e o número da página.</p>
<p>E por fim, dentro do arquivo usando try/catch para tratamento da chamada e por fim retornando os valores desejados de dados, possíveis erros e carregamento dos dados.</p>

## Visual do Projeto
<h4 id="visual">Projeto Final</h4>
<img src="./src/images/project/hobbie-homePage.gif" alt="Project Responsive Image"/>
<h4 id="visual">Post do Projeto"</h4>
<a href="https://www.linkedin.com/feed/update/urn:li:activity:7208826920656871424/" target="_blank">LinkedIn</a>