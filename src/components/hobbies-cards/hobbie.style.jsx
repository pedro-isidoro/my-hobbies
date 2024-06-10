import styled from "styled-components";

export const CardsSection = styled.section`
  position: relative;
  width: 100%;
  height: 60rem;
  animation: show 6s ease-in-out both;

  @keyframes show {
    from {
      transform: scale(0);
      opacity: 0.4;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  & .slide .item {
    width: 12rem;
    height: 8rem;
    top: 90%;
    border-radius: 2rem;
    border: 0.2rem solid #000;
    background-position: 50% 50%;
    background-size: cover;
    transform: translate(226%, -50%);
    transition: 0.5s;
    position: absolute;
    display: inline-block;
  }

  & .slide .item:nth-child(1) {
    top: 0;
    left: 10%;
    width: 80%;
    height: 100%;
    transform: translate(0, 0);
    border-radius: 2rem;
    border: none;
    box-shadow: 0.6rem 0.7rem 0.5rem ${(props) => props.shadow_color};
  }

  & .slide .item:nth-child(6) {
    right: 33%;
  }

  & .slide .item:nth-child(5) {
    right: 32%;
  }

  & .slide .item:nth-child(4) {
    right: 31%;
  }

  & .slide .item:nth-child(3) {
    right: 30%;
  }

  & .slide .item:nth-child(2) {
    right: 29%;
  }

  & .item .content .not-exist {
    display: none;
  }

  & .item .content {
    position: absolute;
    top: 50%;
    left: 4rem;
    width: 40rem;
    padding: 4rem 2rem;
    text-align: left;
    color: #eee;
    background-color: #00000086;
    backdrop-filter: blur(0.4rem);
    transform: translate(0, -50%);
    font-family: system-ui;
    display: none;
  }

  & .slide .item:nth-child(1) .content {
    display: block;
  }

  & .content .name {
    font-size: 2.2rem;
    text-transform: uppercase;
    font-weight: bold;
    opacity: 0;
    animation: animate 1s ease-in-out 1 forwards;
  }

  & .content .des {
    opacity: 0;
    font-size: 1.7rem;
    color: ${(props) => props.paragraph_color};
    margin-top: 1rem;
    margin-bottom: 2rem;
    animation: animate 1s ease-in-out 0.3s 1 forwards;
  }

  & .content Button {
    padding: 0 1rem;
    border: 0.6 solid transparent;
    opacity: 0;
    animation: animate 1s ease-in-out 0.6s 1 forwards;
  }

  @keyframes animate {
    from {
      opacity: 0;
      transform: translate(0, 10rem);
      filter: blur(3.3rem);
    }
    to {
      opacity: 1;
      transform: translate(0);
      filter: blur(0);
    }
  }

  & .button {
    position: absolute;
    width: 100%;
    bottom: 2rem;
    text-align: center;
  }

  & .button button {
    width: 4rem;
    height: 3.5rem;
    border-radius: 0.8rem;
    border: 0.6 solid #000;
    margin: 0 0.3rem;
    transition: 0.3s;
  }

  & .button button i {
    font-size: 1.4rem;
  }

  @media (max-width: 1921px) {
    & .slide .item:nth-child(6) {
      right: 29%;
    }

    & .slide .item:nth-child(5) {
      right: 28%;
    }

    & .slide .item:nth-child(4) {
      right: 27%;
    }

    & .slide .item:nth-child(3) {
      right: 26%;
    }

    & .slide .item:nth-child(2) {
      right: 25%;
    }
  }

  @media (max-width: 1536px) {
    & .slide .item:nth-child(6) {
      right: 33%;
    }

    & .slide .item:nth-child(5) {
      right: 32%;
    }

    & .slide .item:nth-child(4) {
      right: 31%;
    }

    & .slide .item:nth-child(3) {
      right: 30%;
    }

    & .slide .item:nth-child(2) {
      right: 29%;
    }
  }

  @media (max-width: 1441px) {
    & .slide .item {
      transform: translate(175%, -50%);
    }

    & .slide .item:nth-child(6) {
      right: 29%;
    }

    & .slide .item:nth-child(5) {
      right: 28%;
    }

    & .slide .item:nth-child(4) {
      right: 27%;
    }

    & .slide .item:nth-child(3) {
      right: 26%;
    }

    & .slide .item:nth-child(2) {
      right: 25%;
    }
  }

  @media (max-width: 1171px) {
    & .slide .item:nth-child(6) {
      right: 46%;
    }

    & .slide .item:nth-child(5) {
      right: 45%;
    }

    & .slide .item:nth-child(4) {
      right: 44%;
    }

    & .slide .item:nth-child(3) {
      right: 43%;
    }

    & .slide .item:nth-child(2) {
      right: 42%;
    }
  }

  @media (max-width: 881px) {
    & .slide .item {
      transform: translate(120%, -50%);
      width: 8rem;
      height: 6rem;
      top: 94%;
    }

    & .slide .item:nth-child(6) {
      left: 6%;
    }

    & .slide .item:nth-child(5) {
      left: 5%;
    }

    & .slide .item:nth-child(4) {
      left: 4%;
    }

    & .slide .item:nth-child(3) {
      left: 3%;
    }

    & .slide .item:nth-child(2) {
      left: 2%;
    }
  }

  @media (max-width: 761px) {
    & .slide .item:nth-child(6) {
      left: -16%;
    }

    & .slide .item:nth-child(5) {
      left: -15%;
    }

    & .slide .item:nth-child(4) {
      left: -14%;
    }

    & .slide .item:nth-child(3) {
      left: -13%;
    }

    & .slide .item:nth-child(2) {
      left: -12%;
    }

    & .button {
      bottom: 2rem;
    }
  }

  @media (max-width: 601px) {
    & .item .content {
      width: 80%;
      padding: 2rem 1rem;
      text-align: center;
    }

    & .slide .item:nth-child(6) {
      left: 0;
    }

    & .slide .item:nth-child(5) {
      left: -1%;
    }

    & .slide .item:nth-child(4) {
      left: -2%;
    }

    & .slide .item:nth-child(3) {
      left: -3%;
    }

    & .slide .item:nth-child(2) {
      left: -4%;
    }

    & .button {
      bottom: 2rem;
    }

    & .button {
      bottom: 8rem;
    }
  }

  @media (max-width: 551px) {
    & .content .name {
      font-size: 1.9rem;
    }

    & .content .des {
      text-align: justify;
      font-size: 1.5rem;
      padding: 0 2rem;
    }

    & .slide .item {
      transform: translate(70%, -50%);
    }

    & .slide .item:nth-child(6) {
      left: -4%;
    }

    & .slide .item:nth-child(5) {
      left: -5%;
    }

    & .slide .item:nth-child(4) {
      left: -6%;
    }

    & .slide .item:nth-child(3) {
      left: -7%;
    }

    & .slide .item:nth-child(2) {
      left: -8%;
    }

    & .button {
      bottom: 2rem;
    }

    & .button {
      bottom: 8rem;
    }
  }

  @media (max-width: 417px) {
    & .item .content {
      left: 5%;
      width: 90%;
      padding: 2rem 1rem;
      text-align: center;
    }

    & .slide .item:nth-child(1) {
      top: 0;
      left: 5%;
      width: 90%;
    }

    & .slide .item:nth-child(6) {
      left: -8%;
    }

    & .slide .item:nth-child(5) {
      left: -9%;
    }

    & .slide .item:nth-child(4) {
      left: -10%;
    }

    & .slide .item:nth-child(3) {
      left: -11%;
    }

    & .slide .item:nth-child(2) {
      left: -12%;
    }
  }
`;