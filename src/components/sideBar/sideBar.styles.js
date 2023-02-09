import styled from "styled-components";
import { CONSTANTS } from "../../index.styles";

const Wrapper = styled.aside`
  display: none;

  @media only screen and (min-width: 992px) {
    display: block;
    flex-basis: 10%;
    background-color: ${CONSTANTS.white};
    min-height: 100vh;
    overflow: hidden;
    position: sticky;
    top: 0;

    div {
      background-color: ${CONSTANTS.white};
      min-height: 100vh;
      transition: ${CONSTANTS.transition};
      margin-left: -20%;
    }

    div.show-sidebar {
      margin-left: 0;
    }

    img {
      width: 75%;
      margin: 3rem 0 5rem 3rem;
    }

    li {
      padding-left: 3rem;
      transition: ${CONSTANTS.transition};
    }

    li:hover {
      background-color: ${CONSTANTS.grey50};
      padding-left: 4rem;
    }
  }
`;

export default Wrapper;
