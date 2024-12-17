import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #6200ea;
  padding: 1rem 2rem;
  color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Links = styled.div`
  a {
    margin-left: 1rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #ffb300;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>AnonMessages</Logo>
      <Links>
        <Link to="/">Анонимные сообщения</Link>
        <Link to="/news">Новостной канал</Link>
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;
