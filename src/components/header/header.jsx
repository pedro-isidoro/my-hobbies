import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/Theme-context";
import { Cabecalho } from "./header.style";
import { Link } from "react-router-dom";

export function Header(){
  //Usando desestruturação para chamar os estados
  const { theme, setTheme } = useContext(ThemeContext);
  // console.log("Themes: ", themes)
  // console.log("Theme: ", theme)

  function swithIcon(){
    const icon = document.querySelector("#header-icon");
    icon.classList.toggle("fa-sun");
    icon.classList.toggle("fa-moon");
  }

  return (
    <Cabecalho
      color={theme.color}
      icon_color={theme.icon_color}
      icon_hover_color={theme.icon_hover_color}
      background={theme.background_header_footer_color}
      theme_color={theme.theme_color}
    >
      <div className="logo">
        <Link to={"/"} className="logo-link">
          <h2>Hobbies</h2>
        </Link>
      </div>
      <a
        onClick={() => {
          // Setando o tema a partir do clique
          setTheme(theme === themes.light ? themes.dark : themes.light);
          // console.log("Tema Atual: ", theme);
          swithIcon();
        }}
      >
        <i className="fa-solid fa-sun" id="header-icon"></i>
      </a>
    </Cabecalho>
  );
};