import React from 'react';
import styled from 'styled-components';

const Wrap = styled.footer`
  z-index: 50;
  padding: 3.5rem 4rem 2rem;
  min-height: 150px;
  display: block;
`;

// const H2 = styled.h2`
//   text-indent: -9999px;
//   color: transparent;
//   font-size: 0;
//   overflow: hidden;
//   margin: 30px 0;
//   line-height: 0;
// `;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const Social = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

const General = styled.div`
  flex: 3;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a > svg {
    vertical-align: middle;
    margin-right: 10px;
  }
`;

const H4 = styled.h4`
  font-weight: 500;
  margin: 0;
  font-size: 18px;
  font-style: italic;
  text-transform: uppercase;
`;

const BackToTop = styled.div`
  flex: 1;
  text-align: right;
`;

const Links = styled.div`
  margin-top: 10px;
`;

const LinkTo = styled.a`
  /* padding: 5px 0 10px;
  margin: 5px 0; */
  font-weight: 500;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
`;

const ToTop = styled.a`
  color: #fff;
  font-size: 14px;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  margin: 20px 0;
  text-decoration: none;
  > span {
    display: block;
  }
  &:hover {
    color: #e70895;
  }
`;

const smoothScroll = () => {
  const scrollY = window.scrollY;
  if (scrollY > 0) {
    setTimeout(() => {
      window.scrollTo(0, scrollY - 30 >= 0 ? window.scrollY - 30 : 0);
      smoothScroll();
    }, 10);
  }
};

const Footer = () => (
  <Wrap>
    <Content>
      <Social>
        <SocialLink href="http://www.facebook.com">
          <i className="fab fa-facebook-f fa-2x" />
        </SocialLink>
        <SocialLink href="http://www.facebook.com">
          <i className="fab fa-instagram fa-2x" />
        </SocialLink>
        <SocialLink href="http://www.facebook.com">
          <i className="fab fa-linkedin-in fa-2x" />
        </SocialLink>
        <SocialLink href="http://www.facebook.com">
          <i className="fab fa-vimeo-v fa-2x" />
        </SocialLink>
      </Social>

      <General>
        <H4>Consultas generales</H4>
        <Links>
          <LinkTo href="tel:+56982000000">
            <i className="fas fa-mobile-alt fa-2x" /> +56 9 8200 0000
          </LinkTo>
          <LinkTo href="mailto:reclamos@fifa.com">
            <i className="far fa-envelope fa-2x" /> reclamos@fifa.com
          </LinkTo>
        </Links>
      </General>

      <BackToTop>
        <ToTop onClick={() => smoothScroll()}>
          <span>
            <i className="fas fa-angle-up fa-4x" />
          </span>
          Volver arriba
        </ToTop>
      </BackToTop>
    </Content>
  </Wrap>
);

export default Footer;
