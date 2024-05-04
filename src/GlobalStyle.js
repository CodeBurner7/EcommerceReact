import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Work Sans", sans-serif;
}
// Services
  .wrap3col{
    display:grid;
    grid-template-columns: repeat(3,1fr);
  }
  .wrap4col{
    display:grid;
    grid-template-columns: repeat(4,1fr);
    text-align:center;
    color:white;
  }
`;
