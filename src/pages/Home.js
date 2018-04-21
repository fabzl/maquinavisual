import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import VideoHome from '../components/VideoHome';
import Grid from '../components/Grid';
import translations from '../translations';

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
  line-height: 1.3em;
  font-size: 3.2rem;
  text-transform: uppercase;
`;

const LinkTo = styled(Link)`
  color: #f1f1f2;
  text-decoration: none;
  display: block;
  padding: 55px 0 45px;
  transition: all 1s;
  &:hover {
    color: #1e1814;
  }
`;

const Home = props => (
  <div>
    <VideoHome title={translations.home.title[props.language]} />
    <Grid data={props.data} language={props.language} />
    <AllWork>
      <H3>
        <LinkTo to="/work">{translations.home.link[props.language]}</LinkTo>
      </H3>
    </AllWork>
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Home);
