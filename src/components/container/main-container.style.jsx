import styled from "styled-components";

export const MainSection = styled.main`
  color: ${(props) => props.color};
  background-color: ${(props) => props.background};
  /* height: 84svb; */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;
  gap: 8rem;
`;
