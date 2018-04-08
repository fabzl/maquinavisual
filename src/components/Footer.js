import React from 'react';
import styled from 'styled-components';

import logo from '../img/logo_footer.svg';


const Logo = styled.img`
  width: 25%;
  min-width: 350px;
  margin: 0 auto;
  display: flex;
`;

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
  color: #f1f1f2;
`;

const General = styled.div`
  flex: 3;
  text-align: center;
  color: #f1f1f2;
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
  color: #f1f1f2;
  text-decoration: none;
  font-size: 16px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
`;

const ToTop = styled.a`
  color: #f1f1f2;
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
       <Logo src={logo} />
    <Content>   
     
      <Social>
        <SocialLink href="https://www.facebook.com/pg/maquinavisual">
          <i className="fab fa-facebook-f fa-2x" />
        </SocialLink>
        <SocialLink href="http://www.instagram.com/maquinavisual">
          <i className="fab fa-instagram fa-2x" />
        </SocialLink>
        <SocialLink href="http://www.linkeid.com/maquinavisual">
          <i className="fab fa-linkedin-in fa-2x" />
        </SocialLink>
        <SocialLink href="https://vimeo.com/maquinavisual">
          <i className="fab fa-vimeo-v fa-2x" />
        </SocialLink>
      </Social>

      <General>
        <H4>Storytelling & 3D</H4>
        <div className='end-line-footer'>
						<span className='line'></span>
						<h6 data-translatable >© {(new Date().getFullYear())} MAQUINA VISUAL SOME RIGHTS RESERVED.</h6>
				</div>
        <Links>
          <LinkTo href="tel:+56982000000">
            <i className="fas fa-mobile-alt fa-2x" /> +56 9 7623 4946
          </LinkTo>
          <LinkTo href="mailto:contacto@maquinavisual.com?subject=Contacto%20desde%20Maquina%20Visual">
            <i className="far fa-envelope fa-2x" />contacto@maquinavisual.com
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
