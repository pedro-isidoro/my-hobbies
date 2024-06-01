import styled from "styled-components";

export const Cabecalho = styled.header`
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;

  & h2 {
    font-size: 2.6rem;
  }

  & a i {
    font-size: 2rem;
    color: ${(props) => props.icon_color};
  }

  & a i:hover {
    cursor: pointer;
    color: ${(props) => props.icon_hover_color};
  }
`;
