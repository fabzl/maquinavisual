import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios"

import VideoHome from "../components/VideoHome";
import Grid from "../components/Grid";
import translations from "../translations";
import { colors } from "../styles/globals";

const Textarea = styled.textarea`
  float: center;
  width: 50%;
  object-position: center;
  margin: 5% 25%;
  resize: none;
`;

const InputN = styled.div`
  float: center;
  width: 50%;
  object-position: center;
  margin: 5% 25%;
`;

const InputE = styled.div`
  float: center;
  width: 50%;
  object-position: center;
  margin: 5% 25%;
`;

const InputT = styled.div`
  float: center;
  width: 50%;
  object-position: center;
  margin: 5% 25%;
`;

const Inpunts = styled.div`
  float: center;
  width: 80%;
  object-position: center;
  margin-bottom: 4%;
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
function isSelectedPageProducts(dataProductsIn) {
  /*   console.log(dataHomeIn.slug, "datahome");
    if (dataHomeIn.slug === "home") {
      console.log("isSelectedPageHome: ", dataHomeIn.slug === "home");
    } */
    return dataProductsIn.slug === "products";
  }



const Products = props => (
  <div>
    {console.log("props", props.dataProducts, props.dataProducts[0])}
    <Intro>
      <H2>{props.dataProducts[0].acf.intro_title}</H2>
      <P>{props.dataProducts[0].acf.intro_text}</P>
    </Intro>
    <Formulario>
      <Form id="contact-form" action="ProductsContact.php" method="POST">
        <Label><input type="radio" id="pack" value="first_checkbox" name="pack"/>
          <H2>{props.dataProducts[0].acf.pack_name}</H2>
          <P>{props.dataProducts[0].acf.pack_text}</P>
          <P>{props.dataProducts[0].acf.pack_price}</P>
        </Label>
        <Label><input type="radio" id="pack" value="first_checkbox" name="pack"/>
          <H2>{props.dataProducts[0].acf.pack_name_2}</H2>
          <P>{props.dataProducts[0].acf.pack_text_2}</P>
          <P>{props.dataProducts[0].acf.pack_price_2}</P>
        </Label>
        <Inpunts>
          <P>{props.dataProducts[0].acf.commercial_conditions}</P>
          <InputE className="form-group">
            <label for="email"></label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" />
          </InputE>
          <InputN className="form-group">
            <label for="name"></label>
            <input type="text" className="form-control" id="name" name="name"/>
          </InputN>
          <InputT className="form-group">
            <label for="message"></label>
            <textarea className="form-control" rows="5" id="message" name="message"></textarea>
          </InputT>
          <button type="submit" className="btn btn-primary">Submit</button>
        </Inpunts>
      </Form>
    </Formulario>
  </div>
);

const mapStateToProps = state => {
  return {
    data: state.data.posts,
    dataProducts: state.data.pages.filter(isSelectedPageProducts),
    language: state.data.language
  };
};

export default connect(mapStateToProps)(Products);
