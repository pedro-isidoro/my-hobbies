import { createContext, useState } from "react";

export const themes = {
  light: {
    color: "#1a2c32",
    dark_color: "#2d464c",

    theme_color: "#1a2c32",
    paragraph_info_color: "#ddeff0",
    paragraph_color: "#ddeff0",
    icon_color: "#92cace",
    icon_hover_color: "#1a2c32",
    box_shadow_color: "#5facb1",

    background_header_footer_color: "#3b757f",
    background_general_color: "#ddeff0",
  },
  dark: {
    color: "#B96BB7",
    dark_color: "#ed6ceb",

    theme_color: "#078cf0",
    paragraph_color: "#ed6ceb",
    icon_color: "#B96BB7",
    icon_hover_color: "#e5c2e5",
    box_shadow_color: "#f181f0",

    background_header_footer_color: "#083764",
    background_general_color: "#18181b",
  },
  // dark: {
  //   color: "#078cf0",
  //   dark_color: "#6bacea",
  //   theme_color: "#B96BB7",
  //   paragraph_color: "#B96BB7",
  //   icon_hover_color: "#62B0F8",
  //   background_header_footer_color: "#18181b",
  //   background_general_color: "#083764",
  // },
  // yellow: {
  //   color: "#daef16",
  // },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  //Setando um thema padrão, e um estado para alterá-lo
  const [ theme, setTheme ] = useState(themes.light);

  //criando um provedor, para passar os themas como props a todos os filhos
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};