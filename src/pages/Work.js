import React from 'react';
import { connect } from 'react-redux';
import Grid from '../components/Grid';

const Work = props => <Grid data={props.data} link />;

const mapStateToProps = state => {
  return {
    data: state.data.posts
  };
};

export default connect(mapStateToProps)(Work);
