import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import laurel from '../img/laurels_black.svg';

const Wrap = styled.div`
  height: 50vh;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Acerca = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f1f1f2;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 2rem 0 0.6em;
  color: #1e1814;
`;


const Laurel = styled.div`
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1em;
  margin: 2rem 0 0.6em;
  

  &:after {
  background-image: url('{../img/laurels_black.svg}')no-repeat;
  content:'';
  top: 10px;
  right: 5px;
  position: absolute;
  display: inline-block;
  width: 300px;
  height: 200px;
  }
 
`;



const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 430px;
`;

const Image = styled.div`
  position: relative;
  overflow: hidden;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
`;

const Prizes = styled.div`
  margin: 0 auto;
  å display: flex;
  color: #f1f1f2;
  flex: 1;
`;

const Box = styled.div`

  flex-direction:row;
  padding: 15px 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(135deg, rgba(205,73,82,1) 0%,rgba(215,56,117,1) 100%);
`;

// const Laurel = styled.img`
//     width: 80%;
//     max-width:350px;

// `;


const Item = ({ item }) => <Laurel>{item}</Laurel> ;

const About = props => {
  const {
    about_image_big,
    about_image_small_1,
    about_image_small_2,
    about_image_small_3,
    about_image_small_4,
    text_about,
    premios
  } = props.data;
  const premiosArray = premios.split(' // ');
  return (
    <div>
      <Wrap src={props.data.about_image_big.url} />
      <Acerca>
        <H2>{props.data.text_about}</H2>
      </Acerca>
      <Images>
        <Image src={about_image_small_1.url} />
        <Image src={about_image_small_2.url} />
        <Image src={about_image_small_3.url} />
        <Image src={about_image_small_4.url} />
      </Images>
      <Prizes>
        <Box>
          <div>
            <H2>Premios</H2>
            {premiosArray.map(item => <div><Item item={item} /></div>)}
          </div>
        </Box>
      </Prizes>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data.pages[0].acf
  };
};

export default connect(mapStateToProps)(About);
