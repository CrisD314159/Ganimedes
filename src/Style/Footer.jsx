import styled from "styled-components";

//Contains all the footer stuff
export const FooterContainer = styled.footer`
  padding: 20px 0;
  background-color: ${({ theme }) => theme.footer};
  display: flex;
  justify-content: space-evenly;
`;

//Contains all de footer image
export const FooterContainerImage = styled.div`
  padding: 10px 35px;
  width: 110px;
`;

//FooterImage
export const FooterImage = styled.img`
  width: 100px;
`;

//Items container
export const FooterMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;

  list-style: none;
  .footerLink {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    font-family: "Lato", sans-serif;
  }
`;

//List item of the menu
export const FooterElement = styled.li``;
