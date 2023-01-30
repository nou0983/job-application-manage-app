import { useState } from "react";
import { FormRow } from "../../components/index.component";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.svg";
import Wrapper from "./register.styles";

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const { name, email, password, isMember } = state;

  const handleChange = (e) => {
    const newState = { ...state, [e.target.name]: e.target.value };
    setState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });    
      return;
    }
  };

  const toggleMember = () => {
    const newState = { ...state, isMember: !isMember };
    setState(newState);
  };

  return (
    <Wrapper className="full-page flex-container">
      <form className="form" onSubmit={handleSubmit}>
        <img src={logo} alt="Jobster logo" />
        <h2>{isMember ? "login" : "register"}</h2>

        {!isMember && (
          <FormRow
            type="name"
            name="name"
            value={name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {isMember ? "Not a member yet? " : "Already a memeber? "}
          <button
            className="member-btn"
            type="button"
            name="isMember"
            onClick={toggleMember}
          >
            {isMember ? "register" : "login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;