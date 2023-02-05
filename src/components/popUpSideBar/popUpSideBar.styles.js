import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.aside`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  opacity: 0;
  transition: ${CONSTANTS.transition};

  &.show-sidebar {
    z-index: 1;
    opacity: 1;
  }

  div {
    background: ${CONSTANTS.white};
    width: ${CONSTANTS.fluidWidth};
    height: 90vh;
    border-radius: ${CONSTANTS.borderRadius};
    padding: 5rem 3rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 2;
  }

  .btn-close {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    font-size: 3.5rem;
    color: ${CONSTANTS.redDark};
  }

  img {
    margin: 4rem 0;
  }

  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export default Wrapper;
