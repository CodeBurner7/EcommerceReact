import styled from "styled-components";
export const Button=styled.button`
text-decoration:none;
padding:5px 30px;
color:aliceblue;
font-size:18px;
background-color: ${({ theme }) => theme.colors.helper};
border-radius:50px;
text-transform:capitalize;
font-weight:bold;

&:hover{
    color:black;
}

`;