import React from "react";
import { connect } from "react-redux";
import VideoHome from "../components/VideoHome";

import translations from "../translations";

const Contact = props => (
  <div>
    {console.log(props.dataContact.video)}
    <VideoHome
      video={props.dataContact.video}
      contact
      fontColor
      title={
        props.language === "es"
          ? props.dataContact.frase_contacto
          : props.dataContact.contact_phrase
      }
    />
  </div>
);

// {frase_contacto: false, contact_phrase: false, mail_de_contacto: false, telefono_de_contacto: false, video: false

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataContact: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(Contact);
