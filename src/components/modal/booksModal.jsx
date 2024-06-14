import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/Theme-context";

export function BooksModal({ isOpen, setModalClosed, children }) {
  const { theme } = useContext(ThemeContext);
  if (isOpen) {
    return (
      <Div
        color={theme.color}
        paragraph_color={theme.paragraph_color}
        background={theme.background_modal_color}
        button={theme.background_header_footer_color}
        icon_color={theme.icon_color}
        icon_hover_color={theme.icon_hover_color}
        span={theme.span_color}
      >
        <div className="modal-style">
          <div onClick={setModalClosed} className="close-modal">
            <i className="fa-solid fa-x"></i>
          </div>
          <div className="modal-info">{children}</div>
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
  z-index: 5;

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
    backdrop-filter: blur(0.5rem);
  }

  & .modal-style .close-modal {
    display: flex;
  }

  & .modal-style .close-modal i {
    font-size: 2rem;
    color: ${(props) => props.span};
  }

  & .modal-style .close-modal i:hover {
    cursor: pointer;
    color: ${(props) => props.icon_color};
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

  & .modal-info .book-modal h3,
  .modal-info .hq-modal h3,
  .modal-info .book-modal h3 span,
  .modal-info .hq-modal h3 span {
    font-size: 1.8rem;
  }

  & .modal-info .book-modal .description h4,
  .modal-info .hq-modal .description h4,
  .modal-info .book-modal .description span,
  .modal-info .hq-modal .description span {
    font-size: 1.4rem;
  }

  & .modal-info .book-modal .description h4.gener,
  .modal-info .hq-modal .description h4.gener {
    margin-bottom: 3rem;
  }

  & .modal-info .book-modal h3,
  .modal-info .hq-modal h3,
  .modal-info .book-modal h3 span,
  .modal-info .hq-modal h3 span {
    font-size: 2rem;
    color: ${(props) => props.paragraph_color};
  }

  & .modal-info .book-modal .description h4,
  .modal-info .hq-modal .description h4 {
    color: ${(props) => props.paragraph_color};
  }

  & .modal-info .book-modal .description span,
  .modal-info .hq-modal .description span {
    font-size: 1.6rem;
  }

  & .modal-info .book-modal .description span,
  .modal-info .hq-modal .description span,
  .modal-info .book-modal h3 span,
  .modal-info .hq-modal h3 span {
    color: ${(props) => props.span};
  }

  & .modal-info .book-modal .description .sinopse::-webkit-scrollbar-thumb,
  .modal-info .hq-modal .description .sinopse::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.paragraph_color};
  }

  & .modal-info .book-modal .description .sinopse p,
  .modal-info .hq-modal .description .sinopse p {
    color: ${(props) => props.paragraph_color};
    height: 18rem;
  }

  @media (max-width: 601px) {
    & .modal-style {
      width: 90%;
      height: 70rem;
      padding: 3rem 2rem 2rem 2rem;
    }
  }

  @media (max-width: 417px) {
    & .modal-style .close-modal i {
      padding-left: 1rem;
    }
  }

  @media (max-width: 361px) {
    & .modal-style {
      height: 60rem;
      padding: 3rem 1rem 2rem 1rem;
    }
  }
`;
