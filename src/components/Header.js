import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

import logo from './logo_main_white.svg';

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  align-items: center;
  z-index: 900;
  flex-direction: row;
  display: flex;
  /* font-size: 16px; */
  /* justify-content: space-around; */
`;

const LinkTo = styled(NavLink)`
  text-indent: 0;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2em;
  margin: 0 20px;
  /* padding: 20px 10px 5px; */
  line-height: 1em;
  text-transform: uppercase;
  font-style: italic;
  &.active,
  &:hover {
    /* font-weight: bold; */
    /* color: red; */
    color: #e70895;
  }
  @media (max-width: 740px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  margin-right: auto;
`;

const Logo = styled.img`
  width: 80%;
`;

const Burger = () => (
  <svg width="30px" height="30px">
    <rect y="7" width="30" height="2" />
    <rect y="15" width="30" height="2" />
    <rect y="23" width="30" height="2" />
  </svg>
);

const BurgerLink = styled.a`
  color: #fff;
  margin: 0 20px;
  @media (min-width: 740px) {
    display: none;
  }
`;

export default () => (
  <Nav>
    <LogoContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </LogoContainer>

    <LinkTo to="/work">Work</LinkTo>

    <LinkTo to="/about">About</LinkTo>

    <LinkTo to="/contact">Contact</LinkTo>

    <BurgerLink>
      <Burger />
    </BurgerLink>
  </Nav>
);
