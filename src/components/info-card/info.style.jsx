import styled from "styled-components";

export const InfoSection = styled.section`
  height: auto;
  width: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 7rem;

  & .title {
    font-size: 2.8rem;
  }

  & .info {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  & .info img {
    width: 43rem;
    height: 42rem;
    animation: float 3.8s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-4rem);
    }
  }

  & .info .info-text {
    width: 44rem;
    height: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 3rem;
  }

  & .info .info-text p {
    font-size: 2.1rem;
    color: ${(props) => props.color};
  }

  & .info .info-text button {
    width: 110px;
    height: 28px;
    border-radius: 25rem;
    font-size: 1.6rem;
    color: ${(props) => props.color};
    background-color: ${(props) => props.button};
    border: 0.1rem solid ${(props) => props.color};
  }

  & .info .info-text button:hover {
    cursor: pointer;
    background-color: #ababab;
    color: #fff;
    border-color: #fff;
  }

  @media (max-width: 601px) {
    & .info img {
      width: 33rem;
      height: 32rem;
    }
  }

  @media (max-width: 501px) {
    & .info img {
      width: 27rem;
      height: 26rem;
    }

    & .info .info-text {
      width: 36rem;
    }
  }
  
  @media (max-width: 426px) {
    & .info .info-text p {
      text-align: justify;
    }
  }

  @media (max-width: 417px) {
    & .info .info-text button {
      height: 34px;
    }
  }

  @media (max-width: 376px) {
    & .info .info-text p {
      font-size: 1.9rem;
    }
  }
`;