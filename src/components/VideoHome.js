import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  height: ${props => (props.contact ? 80 : 100)}vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Video = styled.video`
  /* Make video to at least 100% wide and tall */
  min-width: 100%;
  min-height: 100%;

  /* Setting width & height to auto prevents the browser from stretching or squishing the video */
  width: auto;
  height: auto;

  /* Center the video */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  z-index: 20;
  padding: 40px 80px;
  /* top: 50%; */
  pointer-events: none;
  /* opacity: 0; */
  transition: opacity 1.3s;
  width: 93.3333%;
  max-width: 1600px;
  text-align: center;
  margin: 0 auto;
  color: #fff;
`;

const H2 = styled.h2`
  font-size: 122px;
  line-height: 0.9em;
  margin: 0 auto;
  padding: 0 20px;
  transform: translateX(-1px);
  display: inline-block;
  transition: line-height 1s;
  text-transform: uppercase;
  font-weight: 700;
  font-style: italic;
  text-align: center;

  &::after,
  &::before {
    content: '';
    display: block;
    width: 0;
    border-top: 1px solid #fff;
    transition: width 0.6s 0.2s, left 0.6s 0.2s, right 0.6s 0.2s;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    position: absolute;
    top: 50%;
    margin-top: -15px;
    transform: translateZ(0);
    width: 70px;
  }

  &::before {
    left: -70px;
  }

  &::after {
    right: -70px;
  }
`;

export default props => {
  let video = 'video/videoIntroXX.mp4';
  let videoLink = video.replace('XX', props.contact ? '02' : '03');

  return (
    <Section {...props}>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src={videoLink} type="video/mp4" />
        </Video>
      </VideoContainer>

      <Text>
        <H2>{props.title}</H2>
      </Text>
    </Section>
  );
};
