import {
  HeaderContainer,
  HeaderImage,
  HeaderImageContainer,
  HeaderMenu,
  HeaderMenuLinkElement,
} from "../../Style/Header";
import { Link } from "react-router-dom";
import BasicMenu from "../../Style/HeaderMenuResponsive";
import styled from "styled-components";
import { Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const MenuResponsive = styled.div`
  height: 100%;
  width: 300px;
  display: none;
  @media screen and (max-width: 740px) {
    display: block;
  }
`;
const Box = styled.div`
  display: flex;

  @media screen and (max-width: 740px) {
    width: 300px;
    justify-content: center;
  }
`;
const Header = ({ toggleTheme, theme }) => {
  return (
    <div>
      <HeaderContainer>
        <MenuResponsive>
          <BasicMenu />
        </MenuResponsive>
        <HeaderImageContainer>
          <Link to={"/"} className="headerLink">
            {theme ? (
              <HeaderImage src="/img/Ganimedes-logo.png" alt="Ganimedes" />
            ) : (
              <HeaderImage
                src="/img/Ganimedes-logo-white.png"
                alt="Ganimedes"
              />
            )}
          </Link>
        </HeaderImageContainer>

        <Box className="menuContainer">
          <Button onClick={toggleTheme}>
            <DarkModeIcon />
          </Button>
          <HeaderMenu>
            <Link className="headerLink" to={"/"}>
              <HeaderMenuLinkElement>Inicio</HeaderMenuLinkElement>
            </Link>
            <Link className="headerLink" to={"/about"}>
              <HeaderMenuLinkElement>Acerca</HeaderMenuLinkElement>
            </Link>
            <Link className="headerLink" to={"https://crisdev.web.app/"}>
              <HeaderMenuLinkElement>Creator's Page</HeaderMenuLinkElement>
            </Link>
          </HeaderMenu>
        </Box>
      </HeaderContainer>
    </div>
  );
};

export default Header;
