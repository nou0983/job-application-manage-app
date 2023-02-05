import {
  Navigation,
  SideBar,
  PopUpSideBar,
} from "../../components/index.component";
import { Outlet } from "react-router-dom";
import Wrapper from "./sharedLayout.styles";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const { isSidebarOpen } = useSelector((store) => store.toggle);

  return (
    <Wrapper className="flex-container">
      <PopUpSideBar />
      <SideBar />
      <div className={`${!isSidebarOpen && "full-size"}`}>
        <Navigation />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default SharedLayout;
