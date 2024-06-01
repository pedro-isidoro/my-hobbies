import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme-context";
import { Button } from "../generic-button/GenericButton";
import { CardsSection } from "./hobbie.style";
import { Link } from "react-router-dom";

export function HobbiesCards() {
  //Avançar para o próximo slide
  //Em seguida, ela move o primeiro item da lista items (ou seja, items[0]) para o final dos filhos do elemento .slide, usando o método appendChild.
  function nextCard() {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  }
  //Retroceder um slide
  //Move o primeiro elemento da lista de itens (.item) para o final do contêiner com a classe slide.
  function prevCard() {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  }

  //Usando desestruturação para chamar o tema e suas caracteristicas
  const { theme } = useContext(ThemeContext);

  return (
    <CardsSection
      color={theme.color}
      paragraph_color={theme.paragraph_color}
      background={theme.background_general_color}
      button={theme.background_header_footer_color}
      dark_color={theme.dark_color}
      shadow_color={theme.box_shadow_color}
    >
      <div className="slide">
        <div
          className="item"
          style={{ backgroundImage: "url(../../images/cards/jiu-jitsu.webp)" }}
        >
          <div className="content">
            <div className="name">JiuJiteiro</div>
            <div className="des">
              Dos meus 12 aos 16 anos, pratiquei uma das lutas que mais amo até
              os dias de hoje. Infelizmente em 2020, por conta da pandemia tive
              que parar, e até então não consegui voltar a treinar.
            </div>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(../../images/cards/kitchen.webp)" }}
        >
          <div className="content">
            <div className="name">Cozinheiro Amador</div>
            <div className="des">
              Não sou nenhum chefe de cozinda mas... Por fim, como meu último
              hobbie. Adoro cozinhar, testar receitas diferentes, principalmente
              doces, e no tempo livre acabo assistindo alguns vídeos para testar
              e fazer os pratos feitos.
            </div>
            <Link to="cozinha">
              <Button>More info</Button>
            </Link>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(../../images/cards/music.webp)" }}
        >
          <div className="content">
            <div className="name">Músico</div>
            <div className="des">
              Um hobbie que tenho a mais de 8 anos, é tocar contra-baixo e
              Cantar. E aprendendo aos poucos sobre mixagem de som, de forma
              autodidata.
            </div>
            <Link to="musica">
              <Button>More info</Button>
            </Link>
          </div>
        </div>

        <div
          className="item"
          style={{ backgroundImage: "url(../../images/cards/library.webp)" }}
        >
          <div className="content">
            <div className="name">Leitor</div>
            <div className="des">
              Como mais um hobbie, sou uma pessoa que adoro ler. E mais
              recentemente estou lendo cada vez mais e gêneros cada vez mais
              diversos.
            </div>
            <Link to="livros-e-hqs">
              <Button>More info</Button>
            </Link>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(../../images/cards/movies.webp)" }}
        >
          <div className="content">
            <div className="name">Aspirante á Cinéfilo</div>
            <div className="des">
              Assim como a maioria das pessoas gosto de assistir filmes e
              séries. Mas recentemente acabei pegando gosto por filmes mais
              antigos e aclamados pelos auto-denominados “Cinéfilos”.
            </div>
            <Link to="filmes-e-series">
              <Button>More info</Button>
            </Link>
          </div>
        </div>
        <div
          className="item"
          style={{ backgroundImage: "url(../../images/cards/gym.webp)" }}
        >
          <div className="content">
            <div className="name">Rato de Academia</div>
            <div className="des">
              No final de 2022, com 19 anos, após treinos de calistenia em casa,
              achei a mim mesmo na musculação, e até hoje mantenho uma rotina
              árdua de treinos e desenvolvimento.
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <Button className="prev" onClick={prevCard}>
          <i className="fa-solid fa-arrow-left-long" onClick={prevCard}></i>
        </Button>
        <Button className="next" onClick={nextCard}>
          <i className="fa-solid fa-arrow-right-long" onClick={nextCard}></i>
        </Button>
      </div>
    </CardsSection>
  );
}
