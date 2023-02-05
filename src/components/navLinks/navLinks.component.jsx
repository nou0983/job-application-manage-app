import { LINKS } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../features/toggle/toggleSlice";
import Wrapper from "./navLinks.styles";

const NavLinks = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {LINKS.map((link, index) => {
        const { text, url, icon } = link;
        return (
          <li key={index}>
            <NavLink to={url} onClick={() => dispatch(closeSidebar())}>
              <span className="icon">{icon}</span> {text}
            </NavLink>
          </li>
        );
      })}
    </Wrapper>
  );
};
export default NavLinks;
