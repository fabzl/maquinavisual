import React from "react";
import { connect } from "react-redux";
import VideoHome from "../components/VideoHome";

// import translations from "../translations";

function isSelectedPageContact(dataContactIn) {
  /*   console.log(dataHomeIn.slug, "datahome");
    if (dataHomeIn.slug === "home") {
      console.log("isSelectedPageHome: ", dataHomeIn.slug === "home");
    } */
    return dataContactIn.slug === "home";
  }
const Contact = props => (
  <div>
    {console.log("propscontact", props, props)}
    <VideoHome
      video={props.dataContact[0].acf.videos}
      contact
      fontColor
      title={
        props.language === "es"
          ? props.dataContact[0].acf.frase_contacto
          : props.dataContact[0].acf.contact_phrase
      }
    />
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    language: state.data.language,
    dataContact: state.data.pages.filter(isSelectedPageContact)
  };
};

export default connect(mapStateToProps)(Contact);
