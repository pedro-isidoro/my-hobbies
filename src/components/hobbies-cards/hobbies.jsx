import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../contexts/Theme-context";
import { Button } from "../generic-button/GenericButton";
import { CardsSection } from "./hobbie.style";
import { Link } from "react-router-dom";
import hobbieData from "/src/json/hobbies-card.json";

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

  const [hobbiesCards, sethobbiesCards] = useState([]);

  useEffect(() => {
    sethobbiesCards(hobbieData);
  }, []);

  return (
    <CardsSection
      color={theme.color}
      paragraph_color={theme.paragraph_color}
      background={theme.background_general_color}
      button={theme.background_header_footer_color}
      dark_color={theme.dark_color}
      shadow_color={theme.box_shadow_color}
    >
      <ul className="slide">
        {hobbiesCards.map((hobbiesCard, index) => (
          <li
            key={index}
            className="item"
            style={{
              backgroundImage: hobbiesCard.url,
            }}
          >
            <div className="content">
              <div className="name">{hobbiesCard.name}</div>
              <div className="des">{hobbiesCard.description}</div>
              <Link to={hobbiesCard.link} className={hobbiesCard.className}>
                <Button>More info</Button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
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
