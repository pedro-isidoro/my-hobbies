import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";

export function BooksRead() {
  const { theme } = useContext(ThemeContext);

  return (
    <BooksSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
    >
      <div className="BooksRead">
        <h3>Livros</h3>
        <p>XXXXXXXXXXXXXXXX</p>
      </div>
      <div className="BooksToRead">
        <h3>HQ's e Mangás</h3>
        <p>XXXXXXXXXXXXXXXX</p>
      </div>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </BooksSection>
  );
}

const BooksSection = styled.section`
  width: 100%;
  height: 82svb;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & .BooksRead, .BooksToRead{
    height: 26rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
  } 
  
  & .BooksRead h3,
  .BooksToRead h3,
  .BooksRead p,
  .BooksToRead p {
    color: ${(props) => props.color};
  }

  & .BooksRead h3,
  .BooksToRead h3 {
    font-size: 2rem;
  }

  & .BooksRead p,
  .BooksToRead p {
    font-size: 1.6rem;
  }

  & Button {
    width: 12rem;
  }
`;
