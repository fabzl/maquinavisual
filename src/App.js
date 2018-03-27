import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Sections
import Home from './pages/Home';
import Work from './pages/Work';
import ShowWork from './pages/ShowWork';
import About from './pages/About';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Loader from './components/Loader';
import VideoPlayer from './components/VideoPlayer';
import Modal from './components/Modal';
import Fade from './components/Fade';
import Footer from './components/Footer';

import { fetchData } from './redux/actions';

const Wrap = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  height: 100%;
  background: #040029;
  /* overflow: ${props => (props.showVideo ? 'hidden' : 'visible')}; */
`;

class App extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.showVideo && !this.props.showVideo)
    // window.scrollTo(0, prevProps.scrollY);
  }

  render() {
    if (this.props.posts.length === 0) return <Loader />;

    return (
      <Wrap {...this.props}>
        <Fade in={this.props.showVideo}>
          <Modal />
        </Fade>

        <Router>
          <div style={{ display: 'flex', flex: 1 }}>
            <Header />

            <div style={{ flex: 1 }}>
              <Route exact path="/" component={Home} />
              <Route exact path="/work" component={Work} />

              <Route exact path="/work/:link" component={ShowWork} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            </div>

            {/* <VideoPlayer /> */}
          </div>
        </Router>
        <Footer />
      </Wrap>
    );
  }
}

const mapStateToProps = state => {
  return {
    showVideo: state.video.showVideo,
    scrollY: state.video.scrollY,
    pages: state.data.pages,
    posts: state.data.posts,
    loading: state.data.loading
  };
};

export default connect(mapStateToProps, { fetchData })(App);
