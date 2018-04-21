import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";

import translations from "../translations";
import logo from "../img/logo_main_white.svg";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  align-items: center;
  z-index: 900;
  flex-direction: row;
  display: flex;
  /* font-size: 16px; */
  /* justify-content: space-around; */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 120, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const LinkTo = styled(NavLink)`
  text-indent: 0;
  color: #f1f1f2;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2em;
  margin: 0 20px;
  line-height: 1em;
  text-transform: uppercase;
  transition: 1s all;
  &.active,
  &:hover {
    color:	: #cd4952;
  }
`;

const LogoContainer = styled.div`
  margin-right: auto;
`;

const Logo = styled.img`
  width: 80%;

  @media (min-width: 500px) {
    min-width: 350px;
  }
`;

const Burger = () => (
  <svg width="30px" height="30px" fill="#f1f1f2">
    <rect y="7" width="30" height="2" />
    <rect y="15" width="30" height="2" />
    <rect y="23" width="30" height="2" />
  </svg>
);

const BurgerLink = styled.a`
  z-index: 50000;
  color: #f1f1f2;
  margin: 0 20px;
  @media (min-width: 740px) {
    display: none;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  z-index: 900;
  flex-direction: row;
  display: flex;

  @media (max-width: 740px) {
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100%;
    z-index: 3000;
    background: rgba(0, 1, 40, 0.85);
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
  }
`;

const Header = props => (
  <Nav>
    <LogoContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </LogoContainer>
    <NavContainer>
      <LinkTo to="/reel">{translations.header.reel[props.language]}</LinkTo>

      <LinkTo to="/work">{translations.header.work[props.language]}</LinkTo>

      <LinkTo to="/about">{translations.header.about[props.language]}</LinkTo>

      <LinkTo to="/contact">
        {translations.header.contact[props.language]}
      </LinkTo>
      <LanguageSelector />
    </NavContainer>
    <BurgerLink>
      <Burger />
    </BurgerLink>
  </Nav>
);

const mapStateToProps = state => {
  return {
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Header);
