import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import styled from "styled-components";
import { Button } from "../../generic-button/GenericButton";
import { Link } from "react-router-dom";

export function Cook() {
  const { theme } = useContext(ThemeContext);

  return (
    <CookSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <div className="cookSkill">
        <p>Um site que desenvolvi para usar como "Caderno de Receitas"</p>
        <iframe
          src="https://my-recipes-three.vercel.app"
          loading="lazy"
        ></iframe>
      </div>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </CookSection>
  );
}

const CookSection = styled.section`
  width: 100%;
  height: 82svb;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  & .cookSkill p {
    color: ${(props) => props.color};
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }
  
  & .cookSkill iframe {
    width: 70rem;
    height: 50rem;
    border: none;
    border-radius: 1rem;
  }

  & Button {
    width: 12rem;
  }
`;
