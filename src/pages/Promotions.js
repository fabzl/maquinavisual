import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import VideoHome from "../components/VideoHome";
import Grid from "../components/Grid";
import translations from "../translations";
import { colors } from "../styles/globals";

const Input = styled.input`
`;

const Inpunts = styled.div`
  float: center;
  width: 80%;
  object-position: center;
  margin: 10% 10%;
`;

const Formulario = styled.div`
`;
const Form = styled.form`
`;

const Label = styled.label`
  background: ${colors.orange};
  float: right;
  width: 25%;
  object-position: center;
  margin: 5% 10% 10% 10%;
`;

const P = styled.p`
  color: ${colors.white};
  text-align: center;
`;

const H2 = styled.h2`
  color: ${colors.white};
  text-align: center;
  margin-top: 60px;
`;

const Intro = styled.div`

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
function isSelectedPagePromotions(dataPromotionsIn) {
  /*   console.log(dataHomeIn.slug, "datahome");
    if (dataHomeIn.slug === "home") {
      console.log("isSelectedPageHome: ", dataHomeIn.slug === "home");
    } */
    return dataPromotionsIn.slug === "promotions";
  }

const Promotions = props => (
  <div>
    {console.log("props", props.dataPromotions, props.dataPromotions[0])}
    <Intro>
      <H2>{props.dataPromotions[0].acf.intro_title}</H2>
      <P>{props.dataPromotions[0].acf.intro_text}</P>
    </Intro>
    <Formulario>
      <Form>
        <Label><input type="radio" id="op2" value="first_checkbox" name="pack"/>
          <H2>{props.dataPromotions[0].acf.pack_name}</H2>
          <P>{props.dataPromotions[0].acf.pack_text}</P>
          <P>{props.dataPromotions[0].acf.pack_price}</P>
        </Label>
        <Label><input type="radio" id="op2" value="first_checkbox" name="pack"/>
          <H2>{props.dataPromotions[0].acf.pack_name_2}</H2>
          <P>{props.dataPromotions[0].acf.pack_text_2}</P>
          <P>{props.dataPromotions[0].acf.pack_price_2}</P>
        </Label>
        <Inpunts>
          <P>{props.dataPromotions[0].acf.commercial_conditions}</P>
          <Input type="email" id="mail" value=""/>
          <Input type="name" id="name" value=""/>
          <Input type="textarea" id="text" value=""/>
          <Input type="submit" id="submit" value="enviar"/>
        </Inpunts>
      </Form>
    </Formulario>
    
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataPromotions: state.data.pages.filter(isSelectedPagePromotions),
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Promotions);
