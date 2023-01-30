import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.section`
  flex-direction: column;

  img {
    width: 60%;
    max-width: 600px;
  }

  h2 {
    margin: 0;
    margin-top: 3rem;
  }

  p {
    max-width: 100%;
    color: ${CONSTANTS.grey500};
    margin: 0.5rem 0;
  }

  a {
    color: ${CONSTANTS.primary500};
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Wrapper;
