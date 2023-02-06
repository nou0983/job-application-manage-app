import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.section`
  margin: 4rem auto 0;
  width: 90%;
  background-color: ${CONSTANTS.white};
  padding: 5rem 4rem;
  border-radius: ${CONSTANTS.borderRadius};
  box-shadow: ${CONSTANTS.shadow2};

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;

    > * {
      flex-basis: 32%;
    }

    > button {
      align-self: flex-end;
      margin-bottom: 1.4rem;
    }
  }
`;

export default Wrapper;
