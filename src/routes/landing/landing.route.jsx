import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import main from "../../assets/images/main.svg";
import Wrapper from "./landing.styles";

const Landing = () => {
  return (
    <Wrapper className="container">
      <nav>
        <img src={logo} alt="Jobster Logo" className="logo" />
      </nav>
      <div className="page">
        <div className="info-box">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            doloribus, non magnam quos neque, molestias in harum laborum odit ut
            porro consequatur asperiores eaque assumenda ducimus. Quia dolorum
            nihil tenetur porro inventore aut, error, eum tempora ratione
            similique, soluta ipsum?
          </p>
          <Link to="/register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="Job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
