import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.section`
  img {
    display: block;
    margin: auto;
  }

  h2 {
    text-align: center;
    margin: 2rem 0;
  }

  .form {
    max-width: 400px;
    border-top: 5px solid ${CONSTANTS.primary500};
  }

  .btn {
    margin-top: 1.5rem;
  }

  .spinner {
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 100px;
    border: 2px solid ${CONSTANTS.grey50};
    border-top-color: ${CONSTANTS.grey300};
    animation: spinner 2s infinite linear;
  }

  @keyframes spinner {
    100% {
      rotate: 360deg;
    }
  }

  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: ${CONSTANTS.primary500};
    cursor: pointer;
    letter-spacing: ${CONSTANTS.letterSpacing};
  }
`;

export default Wrapper;
