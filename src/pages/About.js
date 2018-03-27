import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

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
  color: #fff;
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
  /* max-width: 600px;
  margin: 0 auto; */
  display: flex;
  color: #fff;
  flex: 1;
`;

const Box = styled.div`
  padding: 15px 0;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = ({ item }) => <p>{item}</p>;

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
          <i className="fas fa-trophy fa-10x" />
        </Box>
        <Box>
          <div>
            <H2>Premios</H2>
            {premiosArray.map(item => <Item item={item} />)}
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
