import React, { Component } from "react";
import styled from "styled-components";
import logo from "../img/logo_loader.svg";

//import { keyframes } from "styled-components";
//import { bounce } from "react-animations";

import { colors, fadeOut } from "../styles/globals";
import { growOld, hide } from "../styles/globals";

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    loaded: false,
    isVisible: true,
    isDyingFlag: false,
    in: false
  };

  componentDidMount() {
    console.dir(this.state);
    this.setState({ isDyingFlag: true }, this.transitionEnd);
    // this.setState({ isDyingFlag: true });
    console.log("will appear");
    console.dir(this.state);

    if (this.state.isDyingFlag === true) {
      console.log("timeeoutt");
    } else {
      this.setState({ isDyingFlag: true });
      console.log("not timeeoutt");
    }
    // console.log("timeeoutt");
    // this.setState({ isDying: true });
    // setTimeout(this.setState({ isVisible: false }), 800);
    // }
  }

  transitionEnd() {
    console.log("transitionEnd");
    // if(!this.props.mounted){ //remove the node on transition end when the mounted prop is false
    //   this.setState({
    //     show: false
    //   })
    // }
  }

  unMountStyle() {
    //css for unmount animation
    this.setState({
      style: {
        fontSize: 60,
        opacity: 0,
        transition: "all 1s ease"
      }
    });
  }

  setToDestroy = props => {
    if (this.state.isVisible === true && !this.state.isDying) {
      // console.log("timeeoutt");
      this.setState({ isDying: true }, this.transitionEnd);
      setTimeout(this.setState({ isVisible: false }), 800);
    }
    return this.state.isVisible;
  };

  isLoaded = props => {
    if (this.props.loaded) {
      // console.log("loaded");
      return true;
    } else {
      // console.log("not");
      return false;
    }
  };

  render() {
    const LoaderContent = styled.div`
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999999;
      display: ${this.state.isVisible ? "grid" : "none"};
      grid-template-rows: repeat(3, 1fr);
      grid-template-columns: repeat(3, 1fr);
      width: 100vw;
      height: 100vh;
      background: ${colors.violet};
      align-items: center;
      animation: ${this.isLoaded() ? fadeOut : ""};
      animation-duration: 800ms;
      animation-fill-mode: forwards;

      img {
        width: 100%;
        height: auto;
        cursor: pointer;
        grid-column: 2 / 2;
        grid-row: 2 / 2;
        flex-grow: 2;
        display: flex;
        align-self: center;
        animation: ${growOld};
        animation-duration: 3000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        animation-direction: alternate-reverse;
      }
    `;
    return (
      <LoaderContent>
        <img src={logo} alt="loaderContent" />
      </LoaderContent>
    );
  }
}

export default Loader;
