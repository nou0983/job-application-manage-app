import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.header`
  nav img {
    vertical-align: middle;
  }

  .page {
    min-height: 80vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .info-box {
    flex-basis: 50%;
  }

  h1 span {
    color: ${CONSTANTS.primary500};
  }

  p {
    color: ${CONSTANTS.grey600};
  }

  .main-img {
    width: 45%;
  }
`;

export default Wrapper;
