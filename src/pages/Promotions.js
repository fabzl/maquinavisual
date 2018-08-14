import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import VideoHome from "../components/VideoHome";
import Grid from "../components/Grid";
import translations from "../translations";
import { colors } from "../styles/globals";

const P = styled.p`
  color: ${colors.black};
  text-align: center;
`;

const H2 = styled.h2`
  color: ${colors.black};
  text-align: center;
`;

const Intro = styled.div`
  background: ${colors.orange};
`;

const AllWork = styled.div`
  padding: 0;
  background: linear-gradient(
    135deg,
    rgba(205, 73, 82, 1) 0%,
    rgba(215, 56, 117, 1) 100%
  );
  text-align: center;
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: italic;
  line-height: 1.2em;
  font-size: 2.9rem;
  font-family: "poppins";
  text-transform: uppercase;
`;

const LinkTo = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  display: block;
  padding: 55px 0 45px;
  transition: all 1s;
  &:hover {
    color: ${colors.black};
  }
`;

const Promotions = props => (
  <div>
    <Intro>
      <H2></H2>
      <P></P>
    </Intro>
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataHome: state.data.pages[3].acf,
    dataContact: state.data.pages[0].acf,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Promotions);
