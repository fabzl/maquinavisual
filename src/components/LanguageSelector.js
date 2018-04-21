import React from "react";
import styled from "styled-components";

const LanguageSelector = styled.div``;

const H2 = styled.div`

  text-align:center;
  color: #fff;
  border: 1px solid;
  padding: 5px;
  padding-top: 8px;
  margin-right: 50px;
  &:hover {
    background-color; #fff;
  }
  &:is-hidden {
    display:none;
  }
  &:both {
    border-top:none;
  }
`;
const checkCurrentLanguage = () => {
  return "esp";
};
const chooseLanguage = () => {
  return;
};

export default props => {
  let selectedLang = "esp";

  return (
    <LanguageSelector {...props}>
      <H2 onClick={this.chooseLanguage}>ESP</H2>
      <H2 onClick={this.chooseLanguage} className="is-hidden">
        ENG
      </H2>
    </LanguageSelector>
  );
};
