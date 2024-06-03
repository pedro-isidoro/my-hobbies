import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import styled from "styled-components";
import PhotoMine from "/src/images/music/me-playing-bass.webp";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";

export function Musician() {
  const { theme } = useContext(ThemeContext);

  return (
    <MusicSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <img src={PhotoMine} alt="Foto minha" />
      <ul className="musicSkills">
        <li className="musicSkill">
          <i className="fa-solid fa-guitar"></i>
          <p>Sou um Bassist, ou mais conhecido como Baixista.</p>
        </li>
        <li className="musicSkill">
          <i className="fa-solid fa-microphone"></i>
          <p>Além de músico, também sou cantor.</p>
        </li>
        <li className="musicSkill">
          <i className="fa-solid fa-sliders"></i>
          <p>E tenho conhecimento básico de mixagem de som.</p>
        </li>
      </ul>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </MusicSection>
  );
}

const MusicSection = styled.section`
  width: 100%;
  height: 82svb;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 25%;
    border-radius: 2rem;
    margin-bottom: 6rem;
  }

  & .musicSkills {
    width: 80%;
    height: 30%;
    display: flex;
    justify-content: center;
  }

  & .musicSkills .musicSkill {
    width: 35%;
    height: 100%;
    text-align: center;
    padding: 2rem;
  }

  & .musicSkills .musicSkill i,
  .musicSkill p {
    font-size: 2rem;
    color: ${(props) => props.color};
  }

  & .musicSkills .musicSkill i {
    padding: 2rem;
    color: ${(props) => props.paragraph_color};
    background-color: ${(props) => props.button};
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  & Button {
    width: 12rem;
  }
`;
