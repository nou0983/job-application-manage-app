import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.section`
  width: 90%;
  margin: 4rem auto 0;
  text-align: center;

  h4 {
    font-size: 2.8rem;
  }

  button {
    text-transform: capitalize;
    color: ${CONSTANTS.primary500};
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;

export default Wrapper;
