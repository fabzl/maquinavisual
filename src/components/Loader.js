import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo_loader.svg';

import { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
 


import { merge, zoomIn, fadeIn } from 'react-animations';


const bounceAnimation = keyframes`${bounce}`;

const Zoom = merge(zoomIn, fadeIn);


const Loader = styled.div`


  position: fixed;
  top: 0;
  left: 0;
  z-index: $z-high+1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  width: 100vw;
  height: 100vh;
  background: $mwhite;
  align-items: center;
  /* &.animation {
		animation: fadeOutCurtain 1.2s ease-out;
	} */

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
    grid-column: 2 / 2;
    grid-row: 2 / 2;
    animation: 1s ${Zoom};
    flex-grow: 2;
    display: flex;
    align-self: center;
  }
`;

export default () => (
  <Loader>
    <img src={logo} alt="loader" />
  </Loader>
);
