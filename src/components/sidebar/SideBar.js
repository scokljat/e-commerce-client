import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { sidebarList } from "../../utils/Constants";
import { useOnClickOutside } from "../../utils/FunctionOnClickOutside";
import {
  Wrapper,
  StyledList,
  StyledNavLink,
  SearchContainer,
  Line,
} from "./SideBarStyle";

function SideBar() {
  const [sideBarListIsOpen, setSideBarListIsOpen] = useState(false);
  const location = useLocation();
  const sideBarRef = useRef(null);

  useOnClickOutside(sideBarRef, () => setSideBarListIsOpen(false));

  return (
    <Wrapper ref={sideBarRef} sideBarIsOpen={sideBarListIsOpen}>
      <Menu
        onClick={() => setSideBarListIsOpen(!sideBarListIsOpen)}
        style={{ cursor: "pointer" }}
      />
      {sideBarListIsOpen && (
        <StyledList>
          <SearchContainer to={"/search"}>
            <p>Search</p>
            <Line />
          </SearchContainer>
          {sidebarList.map((item, index) => (
            <li
              onClick={() => {
                setSideBarListIsOpen(false);
              }}
              key={index}
            >
              <StyledNavLink
                to={item.path}
                active={
                  location.pathname.includes(item.category) ? "true" : undefined
                }
              >
                {item.name}
              </StyledNavLink>
            </li>
          ))}
        </StyledList>
      )}
    </Wrapper>
  );
}

export default SideBar;
