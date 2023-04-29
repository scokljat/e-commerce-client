import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as User } from "../../assets/images/user.svg";
import { ReactComponent as Bag } from "../../assets/images/bag.svg";
import { ReactComponent as Home } from "../../assets/images/home.svg";
import SideBar from "../sidebar/SideBar";
import { logout } from "../../store/user/userSlice";
import { Wrapper, Container, BagContainer, StyledNavLink } from "./NavBarStyle";

function NavBar() {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { userProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  let totalProducts = userProducts?.reduce(function (prev, current) {
    return prev + +current.quantity;
  }, 0);

  return (
    <Wrapper>
      <SideBar />
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
              <p>{totalProducts}</p>
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
