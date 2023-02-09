import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.nav`
  padding: ${CONSTANTS.centerPadding};
  background: ${CONSTANTS.white};
  position: sticky;
  top: 0;

  &.flex-container {
    justify-content: space-between;
  }

  .btn-toggle {
    background: transparent;
    border-color: transparent;
    font-size: 2.5rem;
    color: ${CONSTANTS.primary500};
    vertical-align: middle;
  }

  h3 {
    font-size: 3.5rem;
    margin: 0;
  }

  .btn-container {
    position: relative;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: ${CONSTANTS.shadow2};
  }

  .btn-dropdown {
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    background: ${CONSTANTS.primary100};
    box-shadow: ${CONSTANTS.shadow2};
    padding: 1rem;
    text-align: center;
    visibility: hidden;
    border-radius: ${CONSTANTS.borderRadius};
    color: ${CONSTANTS.primary500};
    letter-spacing: ${CONSTANTS.letterSpacing};
    text-transform: capitalize;
  }

  .btn-dropdown--show {
    visibility: visible;
  }
`;

export default Wrapper;
