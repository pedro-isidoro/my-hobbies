import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme-context";
import { MainSection } from "./main-container.style";
import { HobbiesCards } from "../hobbies-cards/hobbies";
import { InfoCard } from "../info-card/info";

export function MainContainer() {
  //Usando desestruturação para chamar o tema e suas caracteristicas
  const { theme } = useContext(ThemeContext);
  // console.log(theme)
  return (
    <MainSection
      color={theme.color}
      background={theme.background_general_color}
    >
      <InfoCard />
      <HobbiesCards />
    </MainSection>
  );
}
