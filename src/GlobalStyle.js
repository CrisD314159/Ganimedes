import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
  

  
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  body{
    background-color: ${({ theme }) => theme.body};
  }
  .textArea{
    background-color: ${({ theme }) => theme.textArea};
    border-color: ${({ theme }) => theme.textAreaBorder};
    

  }
  .MuiList-root{
    background-color:  ${({ theme }) => theme.body};
  }

  .select{
    background-color: ${({ theme }) => theme.textArea};

  }

  .menuLink{
    color: ${({ theme }) => theme.text};
  }
  
  
 }
`;
