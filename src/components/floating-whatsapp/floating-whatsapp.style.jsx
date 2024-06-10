import styled from "styled-components";

export const Whatsapp = styled.section`
  position: relative;
  transition: 0.2s ease-in-out;

  & :hover {
    cursor: pointer;
    opacity: 0.65;
  }

  & a {
    position: fixed;
    width: 5rem;
    height: 5rem;
    bottom: 2.8rem;
    right: 2rem;
    border-radius: 50%;

    font-size: 3rem;
    text-align: center;
    color: rgb(255, 255, 255);
    background-color: rgb(37, 211, 102);
    box-shadow: 1px 1px 2px #888;
    z-index: 9;
    animation: whatsFloat 3.5s ease-in-out infinite;
  }

  @keyframes whatsFloat {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.5rem);
    }
  }

  & a i {
    margin: 0.8rem 0 0 0.2rem;
    font-size: 3.3rem;
  }

  @media (max-width: 417px) {
    & a {
      width: 3.5rem;
      height: 3.5rem;
      bottom: 2.8rem;
      right: 2rem;

      font-size: 2rem;
      text-align: center;
    }

    & a i {
      margin: 0.6rem 0 0 0.1rem;
      font-size: 2.5rem;
    }
  }
`;