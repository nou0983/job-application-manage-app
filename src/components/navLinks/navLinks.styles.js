import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;

  li {
    padding: 1.5rem 0 1.5rem 3rem;
  }

  li:hover a {
    color: ${CONSTANTS.grey900};
  }

  li:hover .icon {
    color: ${CONSTANTS.primary500};
  }

  a {
    display: flex;
    align-items: center;
    color: ${CONSTANTS.grey500};
    text-transform: capitalize;
    transition: ${CONSTANTS.transition};
  }

  .icon {
    font-size: 2.7rem;
    margin-right: 1.2rem;
    transition: ${CONSTANTS.transition};
  }

  .icon svg {
    vertical-align: -4px;
  }

  .active {
    color: ${CONSTANTS.grey900};
  }

  .active .icon {
    color: ${CONSTANTS.primary500};
  }
`;

export default Wrapper;
