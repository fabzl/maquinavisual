import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';

import translations from '../translations';
import logo from '../img/logo_main_white.svg';

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
  /* padding: 20px 10px 5px; */
  line-height: 1em;
  text-transform: uppercase;
  transition: 1s all;
  &.active,
  &:hover {
    color:	: #cd4952;
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
  min-width: 350px;
`;

const Burger = () => (
  <svg width="30px" height="30px" fill="#f1f1f2">
    <rect y="7" width="30" height="2" />
    <rect y="15" width="30" height="2" />
    <rect y="23" width="30" height="2" />
  </svg>
);

const BurgerLink = styled.a`
  color: #f1f1f2;
  margin: 0 20px;
  @media (min-width: 740px) {
    display: none;
  }
`;

const Header = props => (
  <Nav>
    <LogoContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
    </LogoContainer>

    <LinkTo to="/reel">{translations.header.reel[props.language]}</LinkTo>

    <LinkTo to="/work">{translations.header.work[props.language]}</LinkTo>

    <LinkTo to="/about">{translations.header.about[props.language]}</LinkTo>

    <LinkTo to="/contact">{translations.header.contact[props.language]}</LinkTo>
    <LanguageSelector />

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
