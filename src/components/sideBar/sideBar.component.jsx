import logo from "../../assets/images/logo.svg";
import Wrapper from "./sideBar.styles";
import { NavLinks } from "../index.component";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { isSidebarOpen } = useSelector((store) => store.toggle);

  return (
    <Wrapper>
      <div className={`${isSidebarOpen && "show-sidebar"}`}>
        <img src={logo} alt="Jobster logo" />
        <NavLinks />
      </div>
    </Wrapper>
  );
};
export default SideBar;
