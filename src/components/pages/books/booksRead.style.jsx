import styled from "styled-components";

export const BooksSection = styled.section`
  width: 100%;
  height: 82svb;
  background-color: ${(props) => props.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  & .BooksRead, .BooksToRead{
    height: 26rem;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightblue;
  } 
  
  & .BooksRead h3,
  .BooksToRead h3,
  .BooksRead p,
  .BooksToRead p {
    color: ${(props) => props.color};
  }

  & .BooksRead h3,
  .BooksToRead h3 {
    font-size: 2rem;
  }

  & .BooksRead p,
  .BooksToRead p {
    font-size: 1.6rem;
  }

  & Button {
    width: 12rem;
  }
`;
