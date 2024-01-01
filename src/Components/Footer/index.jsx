import {
  FooterContainer,
  FooterContainerImage,
  FooterElement,
  FooterImage,
  FooterMenu,
} from "../../Style/Footer";
import { Link } from "react-router-dom";
const Footer = ({ theme }) => {
  return (
    <div>
      <FooterContainer>
        <FooterContainerImage>
          {theme ? (
            <FooterImage src="/img/Ganimedes-logo.png" alt="Ganimedes" />
          ) : (
            <FooterImage src="/img/Ganimedes-logo-white.png" alt="Ganimedes" />
          )}
        </FooterContainerImage>
        <FooterMenu>
          <Link to={"/"} className="footerLink">
            <FooterElement>Inicio</FooterElement>
          </Link>
          <Link to={"/about"} className="footerLink">
            <FooterElement>Acerca</FooterElement>
          </Link>
          <Link to={"https://crisdev.web.app/"} className="footerLink">
            <FooterElement>Creator's Page</FooterElement>
          </Link>
        </FooterMenu>
      </FooterContainer>
    </div>
  );
};

export default Footer;
