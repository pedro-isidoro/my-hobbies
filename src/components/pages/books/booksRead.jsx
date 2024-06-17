import React, { useContext } from "react";
import { ThemeContext } from "../../../contexts/Theme-context";
import { BooksSection } from "./booksRead.style";
import { Link } from "react-router-dom";
import { Button } from "../../generic-button/GenericButton";
import allBooks from "/src/json/favorite-books.json";
import allHqs from "/src/json/favorite-hq.json";

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
      span={theme.span_color}
    >
      <div className="BooksRead">
        <h2>Livros ({allBooks.length})</h2>
        <BookCard />
      </div>
      <div className="BooksToRead">
        <h2>HQ's ({allHqs.length})</h2>
        <HQCard hqsData={allHqs} />
      </div>
      <Link to="/">
        <Button>Home Page</Button>
      </Link>
    </BooksSection>
  );
}
