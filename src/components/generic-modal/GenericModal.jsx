import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/Theme-context";

export function Modal({ isOpen, setModalClosed, children }) {
  const { theme } = useContext(ThemeContext);
  if (isOpen) {
    return (
      <Div
        color={theme.color}
        paragraph_color={theme.paragraph_color}
        background={theme.background_modal_color}
        button={theme.background_header_footer_color}
      >
        <div className="modal-style">
          <div onClick={setModalClosed} className="close-modal">
            <i className="fa-solid fa-x"></i>
          </div>
          <div className="modal-info">
            {children}
            <button className="closedButton" onClick={setModalClosed}>
              Fechar
            </button>
          </div>
        </div>
      </Div>
    );
  }
  return null;
}

const Div = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.75);
  z-index: 10;

  & .modal-style {
    position: fixed;
    width: 70rem;
    padding: 3rem 4rem 2rem 4rem;
    height: 60rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    border-radius: 1rem;
    background-color: ${(props) => props.background};
  }

  & .modal-style .close-modal i {
    font-size: 2rem;
    color: ${(props) => props.color};
  }

  & .modal-style .close-modal i:hover {
    cursor: pointer;
    color: #ababab;
    transform: scale(1.5);
  }

  & .modal-style .modal-info {
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  & .modal-style .modal-info iframe {
    width: 90%;
    height: 40rem;
    border: 0.1rem solid black;
    border-radius: 1rem;
  }

  & .modal-style .modal-info p {
    width: 80%;
    text-align: center;
    font-size: 2rem;
    color: ${(props) => props.paragraph_color};
  }

  & .modal-style .modal-info .closedButton {
    width: 110px;
    height: 28px;
    border-radius: 25rem;
    font-size: 1.6rem;
    color: ${(props) => props.color};
    background-color: ${(props) => props.button};
    border: 0.1rem solid ${(props) => props.color};
  }

  & .modal-style .modal-info .closedButton:hover {
    cursor: pointer;
    background-color: #ababab;
    color: #fff;
    border-color: #fff;
  }
`;