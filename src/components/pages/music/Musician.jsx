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
  height: auto;
  padding: 4rem 0;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  & img {
    width: 40rem;
    border-radius: 2rem;
    margin-bottom: 4rem;
  }

  & .musicSkills {
    width: 100%;
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  & .musicSkills .musicSkill {
    width: 40rem;
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

  @media (max-width: 500px) {
    & img {
      width: 30rem;
      margin-bottom: 3rem;
    }
  }

  @media (max-width: 426px) {
    & .musicSkills .musicSkill i,
    .musicSkill p {
      font-size: 1.8rem;
    }

    & .musicSkills .musicSkill i{
      padding: 1.5rem;
    }
  }

  @media (max-width: 350px) {
    & img {
      width: 25rem;
    }
  }
`;
