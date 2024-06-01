import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Section className="error-message">
      <div className="error">
        <div className="error-text">
          <h1>Erro 404!!</h1>
          <p>Erro desconhecido, por favor aguarde!!</p>
        </div>
        <button>
          <Link className="link-back" to="/">
            Voltar para a Home Page
          </Link>
        </button>
      </div>
    </Section>
  );
};

export default ErrorPage;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .error, .error-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;