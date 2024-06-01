import React, { useContext } from "react";
import { ThemeContext, themes } from "../../contexts/Theme-context";
import { Cabecalho } from "./header.style";

export function Header(){
  //Usando desestruturação para chamar os estados
  const { theme, setTheme } = useContext(ThemeContext);
  // console.log("Themes: ", themes)
  // console.log("Theme: ", theme)

  return (
    <Cabecalho
      color={theme.color}
      icon_color={theme.icon_color}
      icon_hover_color={theme.icon_hover_color}
      background={theme.background_header_footer_color}
      theme_color={theme.theme_color}
    >
      <div className="logo">
        <h2>Hobbies</h2>
      </div>
      <a
        onClick={() => {
          // Setando o tema a partir do clique
          setTheme(theme === themes.light ? themes.dark : themes.light);
          // console.log("Tema Atual: ", theme);
        }}
      >
        <i className="fa-solid fa-sun"></i>
      </a>
    </Cabecalho>
  );
};