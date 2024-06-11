import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { BooksSection } from "./booksRead.style";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";

import BookCard from "../../cards/books-cards/bookCard";
import HQCard from "../../cards/books-cards/hqCard";

export function BooksRead() {
  const { theme } = useContext(ThemeContext);

  return (
    <BooksSection
      color={theme.color}
      background={theme.background_general_color}
      paragraph_color={theme.paragraph_color}
      button={theme.background_header_footer_color}
      icon_hover_color={theme.icon_hover_color}
    >
      <div className="BooksRead">
        <h2>Livros</h2>
        <BookCard />
      </div>
      <div className="BooksToRead">
        <h2>HQ's</h2>
        <HQCard />
      </div>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </BooksSection>
  );
}
