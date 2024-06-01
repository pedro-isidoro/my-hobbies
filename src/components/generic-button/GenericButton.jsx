import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/Theme-context";
import styled from "styled-components";

export function Button(props) {
  const { theme } = useContext(ThemeContext)
  return (
    // Usando o spread para chamar todas as props passadas
    <StyledButton
      color={theme.color}
      background={theme.background_general_color}
      button={theme.background_header_footer_color}
    >
      {props.children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  width: 110px;
  height: 28px;
  border-radius: 25rem;

  font-size: 1.6rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.button};
  border: 0.1rem solid ${(props) => props.color};

  &:hover {
    cursor: pointer;
    background-color: #ababab;
    color: #fff;
    border-color: #fff;
  }
`;