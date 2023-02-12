import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.article`
  flex-basis: 32%;
  padding: 3rem;
  background: ${CONSTANTS.white};
  border-radius: ${CONSTANTS.borderRadius};
  border-bottom: 5px solid ${(props) => props.color};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    font-weight: 700;
    font-size: 5rem;
    color: ${(props) => props.color};
  }

  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: ${CONSTANTS.letterSpacing};
    text-align: left;
    margin-top: 0.5rem;
  }

  .icon {
    width: 7rem;
    height: 7rem;
    background: ${(props) => props.bgc};
    border-radius: ${CONSTANTS.borderRadius};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 4rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
