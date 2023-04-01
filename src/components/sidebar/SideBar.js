import { sidebarList } from "../../utils/Constants";
import { Wrapper, StyledList, StyledNavLink } from "./SideBarStyle";

function SideBar() {
  return (
    <Wrapper>
      <StyledList>
        {sidebarList.map((item, index) => (
          <StyledNavLink to={item.path}>
            <li key={index}>{item.name}</li>
          </StyledNavLink>
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default SideBar;
