import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { changeLang } from "../redux/actions";

const H2 = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  text-align: center;
  color: #f1f1f2;
  border: 1px solid;
  padding: 5px;
  padding-top: 8px;
  margin-right: 50px;
  &:hover {
    background-color: #f1f1f2;
  }
  &:both {
    border-top: none;
  }
`;

// () => props.changeLang()
const LanguageSelector = props => (
  <H2 onClick={() => props.changeLang()}>
    {props.language === "en" ? "es" : "en"}
  </H2>
);

const mapStateToProps = state => {
  return {
    language: state.data.language
  };
};

export default connect(mapStateToProps, { changeLang })(LanguageSelector);
