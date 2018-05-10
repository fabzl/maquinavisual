import React from "react";
import { connect } from "react-redux";
import VideoHome from "../components/VideoHome";

import translations from "../translations";

const Contact = props => (
  <div>
    <VideoHome
      contact
      fontColor
      title={translations.contact.title[props.language]}
    />
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Contact);
