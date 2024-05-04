
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Navbar";
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="../../images/ecommerce2.png" alt="my logo img"  className="logo"/>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 3rem;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 3rem;
  }
`;
export default Header;
