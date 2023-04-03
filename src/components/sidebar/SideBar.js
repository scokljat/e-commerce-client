import { sidebarList } from "../../utils/Constants";
import { Wrapper, StyledList, StyledNavLink } from "./SideBarStyle";

function SideBar({ setSideBarIsOpen }) {
  return (
    <Wrapper>
      <StyledList>
        {sidebarList.map((item, index) => (
          <StyledNavLink to={item.path}>
            <li
              key={index}
              onClick={() => {
                setSideBarIsOpen(false);
              }}
            >
              {item.name}
            </li>
          </StyledNavLink>
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default SideBar;
