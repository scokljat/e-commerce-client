import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Bag } from "../../assets/images/bag.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import SideBar from "../sidebar/SideBar";
import { logout } from "../../store/user/userSlice";
import { Wrapper, Container, BagContainer, StyledNavLink } from "./NavBarStyle";

function NavBar() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Menu
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        style={{ cursor: "pointer" }}
      />
      {sideBarIsOpen && <SideBar setSideBarIsOpen={setSideBarIsOpen} />}
      <Container>
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
                <Bag />
              </StyledNavLink>
              <p>{user?.bagProducts?.length}</p>
            </BagContainer>
            <h3
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              Log out
            </h3>
          </>
        ) : (
          <>
            <StyledNavLink to="/" style={{ marginTop: "5px" }}>
              <Home />
            </StyledNavLink>
            <StyledNavLink to="/login">Log in</StyledNavLink>
          </>
        )}
      </Container>
    </Wrapper>
  );
}

export default NavBar;
