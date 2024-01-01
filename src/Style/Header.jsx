import styled from "styled-components";
//Contanis all the header element
export const HeaderContainer = styled.header`
  * {
    box-sizing: border-box;
  }
  background-color: ${({ theme }) => theme.header};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  @media screen and (max-width: 740px) {
    justify-content: center;
  }
`;
//Contains the image logo
export const HeaderImageContainer = styled.div`
  width: 120px;
  @media screen and (max-width: 740px) {
    width: 350px;
  }
`;
export const HeaderImage = styled.img`
  width: 100%;
`;
//Contains the elemento of the menu
export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  .headerLink {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    margin: 0 15px;
    font-family: "Lato", sans-serif;
  }
  @media screen and (max-width: 740px) {
    display: none;
  }
`;
//Menu element link

//Menu element
export const HeaderMenuLinkElement = styled.li`
  text-decoration: none;
`;
