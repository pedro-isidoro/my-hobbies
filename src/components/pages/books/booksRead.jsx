import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { BooksSection } from "./booksRead.style";
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
