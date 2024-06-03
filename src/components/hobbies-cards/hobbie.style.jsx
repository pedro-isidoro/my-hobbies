import styled from "styled-components";

export const CardsSection = styled.section`
  position: relative;
  width: 85%;
  height: 60rem;
  background-color: transparent;
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
    position: absolute;
    top: 90%;
    transform: translate(226%, -50%);
    border-radius: 2rem;
    border: 0.2rem solid #000;
    background-position: 50% 50%;
    background-size: cover;
    display: inline-block;
    transition: 0.5s;
  }

  & .slide .item:nth-child(1) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    border-radius: 2rem;
    border: none;
    /* box-shadow: 0.6rem 0.7rem 0.5rem #ada3a3; */
    box-shadow: 0.6rem 0.7rem 0.5rem ${(props) => props.shadow_color};
  }

  & .slide .item:nth-child(6) {
    left: calc(60% + 1.5rem);
  }

  & .slide .item:nth-child(5) {
    left: calc(60% + 3rem);
  }

  & .slide .item:nth-child(4) {
    left: calc(60% + 4.5rem);
  }

  & .slide .item:nth-child(3) {
    left: calc(60% + 6rem);
  }

  & .slide .item:nth-child(2) {
    left: calc(60% + 7.5rem);
  }

  & .item .content .not-exist{
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
`;