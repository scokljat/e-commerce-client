import { useSearchParams } from "react-router-dom";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { sidebarList } from "../../utils/Constants";
import {
  Wrapper,
  StyledList,
  StyledNavLink,
  InputContainer,
} from "./SideBarStyle";

function SideBar({ setSideBarIsOpen }) {
  const [searchParams] = useSearchParams();
  return (
    <Wrapper>
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
                searchParams.get("category") === item.category ? true : false
              }
            >
              {item.name}
            </StyledNavLink>
          </li>
        ))}
      </StyledList>
    </Wrapper>
  );
}

export default SideBar;
