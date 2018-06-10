import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from 'styled-components';
import './App.css';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Map from './Map';
import Trails from './Trails';
import TrailsPost from './TrailsPost';

const Container = styled.main`
  max-width: 1225px;
  margin: 0 auto;
  padding: 85px 0 75px;
  background: #fff;
  @media only screen and (min-width: 768px) {
    width: 85%;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Container>
            <Route exact path="/" component={Home} />
              <Route exact path="/trails" component={Trails} />
                <Route exact path="/trails/:trailId" component={TrailsPost}/>
              <Route exact path="/map" component={Map} />
              <Route exact path="/blog" component={Blog} />
                <Route exact path="/blog/:postId" component={BlogPost}/>
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;