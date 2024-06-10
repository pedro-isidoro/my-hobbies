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
      box_shadow={theme.cooking_iframe_box_shadow}
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
  height: auto;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 4rem;
  text-align: center;
  background-color: ${(props) => props.background};

  & .cookSkill {
    width: 80%;
  }

  & .cookSkill p {
    color: ${(props) => props.color};
    font-size: 2.4rem;
    margin-bottom: 4rem;
  }

  & .cookSkill iframe {
    width: 100%;
    height: 80rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 10px 10px 6px 0px ${(props) => props.box_shadow};
  }

  & Button {
    width: 12rem;
  }

  @media (max-width: 417px) {
    & .cookSkill {
      width: 90%;
    }
  }

  @media (max-width: 370px) {
    & .cookSkill p {
      font-size: 2rem;
      margin-bottom: 4rem;
    }
  }
`;
