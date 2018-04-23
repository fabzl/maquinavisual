import React, { Component } from "react";
import styled from "styled-components";
import Box from "./Box";
import { colors } from "../styles/globals";

class Social extends Component {
  state = {
    display: "none"
  };
  displayOrNot = () => {
    if (this.props.header) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const Social = styled.div`
      flex: 1;

      justify-content: space-between;
      align-items: center;
      display: ${this.displayOrNot() ? "none" : "flex"};
      @media (max-width: 740px) {
        display: ${this.displayOrNot() ? "none" : "flex"};
      }
    `;

    const SocialLink = styled.a`
      text-decoration: none;
      color: ${colors.white};
      transition: 1s all;
      &:hover {
        color: ${colors.violet};
      }
    `;

    return (
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
    );
  }
}

export default Social;
