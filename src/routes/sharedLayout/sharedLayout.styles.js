import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.section`
  &.flex-container {
    align-items: flex-start;
    justify-content: space-between;
  }

  > div {
    transition: ${CONSTANTS.transition};
    flex-basis: 90%;
    flex-shrink: 0;
  }

  > div.full-size {
    flex-basis: 100%;
  }

  @media only screen and (max-width: 992px) {
    > div {
      flex-basis: 100%;
    }
  }
`;

export default Wrapper;
