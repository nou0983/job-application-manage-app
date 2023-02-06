import Wrapper from "./popUpSideBar.styles";
import { FaTimes } from "react-icons/fa";
import logo from "../../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { closeSidebar } from "../../features/toggle/toggleSlice";
import { NavLinks } from "../index.component";

const PopUpSideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.toggle);
  const dispatch = useDispatch();

  return (
    <Wrapper className={`${isSidebarOpen && "show-sidebar"}`}>
      <div>
        <button
          type="button"
          className="btn-close"
          onClick={() => dispatch(closeSidebar())}
        >
          <FaTimes />
        </button>
        <img src={logo} alt="Jobster logo" />
        <NavLinks type="popup" />
      </div>
    </Wrapper>
  );
};

export default PopUpSideBar;
