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
  }

  > div.full-size {
    flex-shrink: 0;
    flex-basis: 100%;
  }
`;

export default Wrapper;
