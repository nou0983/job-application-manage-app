import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;

  .btn-page {
    width: 10rem;
    height: 4rem;
    background: ${CONSTANTS.white};
    border-radius: ${CONSTANTS.borderRadius};
    color: ${CONSTANTS.primary500};
    letter-spacing: ${CONSTANTS.letterSpacing};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: ${CONSTANTS.transition};
  }

  .btn-page:hover {
    background: ${CONSTANTS.primary500};
    color: ${CONSTANTS.white};
  }

  .btn-container {
    background: ${CONSTANTS.primary100};
    border-radius: ${CONSTANTS.borderRadius};
  }

  .btn-number {
    width: 5rem;
    height: 4rem;
    font-weight: 700;
    font-size: 1.7rem;
    color: ${CONSTANTS.primary500};
    transition: ${CONSTANTS.transition};
    border-radius: ${CONSTANTS.borderRadius};
  }

  .active {
    background: ${CONSTANTS.primary500};
    color: ${CONSTANTS.white};
  }
`;

export default Wrapper;
