import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import VideoHome from '../components/VideoHome';
import Grid from '../components/Grid';

const AllWork = styled.div`
  padding: 0;
  background: #33345b;
  text-align: center;
`;

const H3 = styled.h3`
  margin: 0;
  font-weight: 700;
  font-style: italic;
  line-height: 1.3em;
  font-size: 3.6rem;
  text-transform: uppercase;
`;

const LinkTo = styled(Link)`
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 55px 0 45px;
  &:hover {
    color: #e70895;
  }
`;

const Home = props => (
  <div>
    <VideoHome title="Where imagination meets reality" />
    <Grid data={props.data} />
    <AllWork>
      <H3>
        <LinkTo to="/work">View all work</LinkTo>
      </H3>
    </AllWork>
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts
  };
};

export default connect(mapStateToProps)(Home);
