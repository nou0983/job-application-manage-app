import Wrapper from "./navigation.styles";
import { FaBars, FaUserCircle, FaAngleDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../features/user/userSlice";
import { toggleSidebar, closeSidebar } from "../../features/toggle/toggleSlice";

const Navigation = () => {
  const { user } = useSelector((store) => store.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <Wrapper className="flex-container">
      <button
        type="button"
        className="toggle-popup"
        onClick={() => dispatch(toggleSidebar())}
      >
        <FaBars className="btn-toggle" />
      </button>
      <h3 className="heading">dashboard</h3>
      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FaUserCircle /> {user?.name} <FaAngleDown />
        </button>
        <button
          type="button"
          className={`btn-dropdown ${isDropdownOpen && "btn-dropdown--show"}`}
          onClick={() => {
            dispatch(closeSidebar());
            dispatch(logoutUser());
          }}
        >
          logout
        </button>
      </div>
    </Wrapper>
  );
};

export default Navigation;
