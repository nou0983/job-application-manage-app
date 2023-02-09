import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.li`
  background: ${CONSTANTS.white};
  border-radius: ${CONSTANTS.borderRadius};
  width: 48%;
  box-shadow: ${CONSTANTS.shadow2};

  header {
    padding: 1.5rem 2rem;
    border-bottom: 1px solid ${CONSTANTS.grey100};
    display: flex;
    align-items: center;
  }

  .main-icon {
    padding: 1.3rem 2.2rem;
    display: inline-block;
    background: ${CONSTANTS.primary500};
    border-radius: ${CONSTANTS.borderRadius};
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${CONSTANTS.white};
    margin-right: 2rem;
  }

  h5 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  h6 {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: ${CONSTANTS.letterSpacing};
  }

  .info-container {
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
  }

  .info {
    flex-basis: 45%;
    display: flex;
    align-items: center;
    gap: 3%;

    svg {
      color: ${CONSTANTS.grey400};
    }

    h6.status {
      border-radius: ${CONSTANTS.borderRadius};
      padding: 0.5rem 1rem;
    }
  }

  .pending {
    background: #fcefc7;
    color: #e9b949;
  }

  .interview {
    background: #e0e8f9;
    color: #647acb;
  }

  .declined {
    color: #d66a6a;
    background: #ffeeee;
  }

  .btn-edit,
  .btn-delete {
    display: inline-block;
    letter-spacing: ${CONSTANTS.letterSpacing};
    cursor: pointer;
    transition: ${CONSTANTS.transition};
    padding: 1rem 1.9rem;
  }

  .btn-edit {
    color: ${CONSTANTS.greenDark};
    background: ${CONSTANTS.greenLight};
    margin-right: 1rem;
  }

  .btn-edit:hover {
    color: ${CONSTANTS.white};
    background: ${CONSTANTS.greenDark};
  }

  .btn-delete {
    color: ${CONSTANTS.redDark};
    background: ${CONSTANTS.redLight};
  }

  .btn-delete:hover {
    color: ${CONSTANTS.white};
    background: ${CONSTANTS.redDark};
  }
`;

export default Wrapper;
