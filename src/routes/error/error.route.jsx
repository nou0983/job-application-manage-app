import Wrapper from "./error.styles";
import { Link } from "react-router-dom";
import img from "../../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="container flex-container full-page">
      <img src={img} alt="Error page" />
      <h2>ohh! page not found</h2>
      <p>We can't seem to find the page you're looking for</p>
      <Link to="/">back home</Link>
    </Wrapper>
  );
};

export default Error;
