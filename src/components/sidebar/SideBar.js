import { sidebarList } from "../../utils/Constants";
import { Wrapper, StyledList } from "./SideBarStyle";

function SideBar() {
  return (
    <Wrapper>
      <StyledList>
        {sidebarList.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default SideBar;
