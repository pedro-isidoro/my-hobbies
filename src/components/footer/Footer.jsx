import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme-context";
import styled from "styled-components";

export function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <Rodape
      color={theme.color}
      paragraph_color={theme.paragraph_color}
      background={theme.background_header_footer_color}
      icon_color={theme.icon_hover_color}
    >
      <ul>
        <li>
          <a href="https://www.instagram.com/pedrol.isidoro/" target="_blank">
            <i className="fa-brands fa-instagram instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/pedro-isidoro" target="_blank">
            <i className="fa-brands fa-github gitHub"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/pedro-isidoro-8b1680272/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin linkedIn"></i>
          </a>
        </li>
      </ul>
      <p>
        <i className="fa-regular fa-copyright" /> 2024 Pedro Isidoro - Todos os
        direitos reservados
      </p>
    </Rodape>
  );
}

const Rodape = styled.header`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 16rem;
  gap: 4rem;

  & ul {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 2rem;
    gap: 1rem;
  }

  & a i {
    font-size: 2.2rem;
    padding: 1rem;
    border: solid 0.2rem transparent;
    border-radius: 50%;
  }

  & a i.instagram {
    color: #ff2d58;
  }

  & a i.whatsApp {
    color: #0ace4e;
  }

  & a i.gitHub {
    color: #000000;
  }

  & a i.linkedIn {
    color: #009ee1;
  }

  & a i:hover {
    cursor: pointer;
    color: ${(props) => props.icon_color};
    /* color: wheat; */
    border-color: ${(props) => props.icon_color};
  }

  & p {
    font-size: 1.3rem;
    color: ${(props) => props.paragraph_color};
  }

  & p i {
    font-size: 1.5rem;
  }
`;
