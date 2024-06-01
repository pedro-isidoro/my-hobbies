import React, { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/Theme-context";
import styled from "styled-components";
import { Modal } from "../generic-modal/GenericModal";

export function InfoCard() {
    const { theme } = useContext(ThemeContext);
    const [openModal, setOpenModal] = useState(false)
    
    return (
      <InfoSection
        color={theme.color}
        background={theme.background_general_color}
        paragraph_color={theme.paragraph_color}
        button={theme.background_header_footer_color}
      >
        <h2 className="title">Sobre Mim</h2>
        <div className="info">
          <img
            src="/src/images/info/me-dreamWorks.webp"
            alt="IA Image about me"
          />
          <div className="info-text">
            <p>
              Me chamo Pedro Isidoro, tenho 20 anos. Sou um estudante de TI e
              como a maioria das pessoas tenho alguns Hobbies que gosto. E
              decidi criar essa Landing Page para mostrar e mantê-los em
              registro.
            </p>
            <button onClick={() => setOpenModal(true)}>Portfólio</button>
          </div>
          <Modal
            isOpen={openModal}
            setModalClosed={() => setOpenModal(!openModal)}
          >
            <p>Em um projeto com tecnologias um pouco mais avançadas, desenvolvi meu próprio portfólio</p>
            <iframe
              src="https://pedro-isidoros-portfolio.vercel.app"
              loading="lazy"
            />
          </Modal>
        </div>
      </InfoSection>
    );
}

const InfoSection = styled.section`
  height: 72rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 7rem;
  padding-bottom: 4rem;

  & .title {
    font-size: 2.8rem;
  }

  & .info {
    display: flex;
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
`;