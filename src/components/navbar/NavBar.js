import { useState } from "react";
import { useSelector } from "react-redux";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Bag } from "../../assets/images/bag.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import SideBar from "../sidebar/SideBar";
import {
  Wrapper,
  Container,
  InputContainer,
  BagContainer,
  StyledNavLink,
} from "./NavBarStyle";

function NavBar() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);

  return (
    <Wrapper>
      <Menu
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        style={{ cursor: "pointer" }}
      />
      {sideBarIsOpen && <SideBar setSideBarIsOpen={setSideBarIsOpen} />}
      <Container>
        <InputContainer>
          <input placeholder="Search..." />
          <Search />
        </InputContainer>
        {isLoggedIn ? (
          <>
            <StyledNavLink to="/">
              <Home />
            </StyledNavLink>
            <StyledNavLink to="/profile">
              <User />
            </StyledNavLink>
            <BagContainer>
              <StyledNavLink to="/my-shop">
                {" "}
                <Bag />
              </StyledNavLink>
              <p>0</p>
            </BagContainer>
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Log in</StyledNavLink>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default NavBar;
