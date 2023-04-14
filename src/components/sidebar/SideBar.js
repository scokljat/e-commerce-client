import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { sidebarList } from "../../utils/Constants";
import { useOnClickOutside } from "../../utils/FunctionOnClickOutside";
import {
  Wrapper,
  StyledList,
  StyledNavLink,
  InputContainer,
} from "./SideBarStyle";

function SideBar({}) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const location = useLocation();
  const sideBarRef = useRef(null);

  useOnClickOutside(sideBarRef, () => setSideBarIsOpen(false));

  return (
    <Wrapper ref={sideBarRef} sideBarIsOpen={sideBarIsOpen}>
      <Menu
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        style={{ cursor: "pointer" }}
      />
      {sideBarIsOpen && (
        <>
          <InputContainer>
            <input placeholder="Search..." />
            <Search />
          </InputContainer>
          <StyledList>
            {sidebarList.map((item, index) => (
              <li
                onClick={() => {
                  setSideBarIsOpen(false);
                }}
                key={index}
              >
                <StyledNavLink
                  to={item.path}
                  active={
                    location.pathname.includes(item.category) ? true : false
                  }
                >
                  {item.name}
                </StyledNavLink>
              </li>
            ))}
          </StyledList>
        </>
      )}
    </Wrapper>
  );
}

export default SideBar;
