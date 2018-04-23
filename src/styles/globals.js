import styled from "styled-components";
import { keyframes } from "styled-components";

export const colors = {
  black: "#1e1814",
  gray: "#282828",
  white: "#f1f1f2",
  orange: "#d73875",
  violet: "#cd4952"
};

// keyframes returns a unique name based on a hash of the contents of the keyframes
export const rotate360 = keyframes`
  from {
    transform: (0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
`;

// keyframes returns a unique name based on a hash of the contents of the keyframes
export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const FadeIn = styled.div`
  /* display: inline-block; */
  animation: ${fadeIn} 0.8s forwards;
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const FadeOut = styled.div`
  /* display: inline-block; */
  animation: ${fadeIn} 0.8s forwards;
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1); }
  40% { transform: scale(1.08); }
  50% { transform: scale(1); }
  60% { transform: scale(1); }
  70% { transform: scale(1.05); }
  80% { transform: scale(1); }
  100% { transform: scale(1); }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Pulse = styled.div`
  /* display: inline-block; */
  animation: ${pulse} 0.8s;
  animation-duration: 5000ms;
  transform-origin: 70% 70%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
