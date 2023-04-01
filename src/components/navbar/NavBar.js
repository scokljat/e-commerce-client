import { useState } from "react";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Search } from "../../assets/images/search.svg";
import { ReactComponent as Bag } from "../../assets/images/bag.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import {
  Wrapper,
  Container,
  InputContainer,
  BagContainer,
  StyledNavLink,
} from "./NavBarStyle";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Wrapper>
      <Menu />
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
            {" "}
            <StyledNavLink to="/login">Log in</StyledNavLink>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default NavBar;
