import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled, { css } from 'styled-components';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Map from './Map';

const Container = styled.main`
  width: 85%;
  max-width: 1225px;
  margin: 0 auto;
  padding: 45px 0 75px;
  background: #fff;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Container>
            <Route exact path="/" component={Home} />
            <Route exact path="/map" component={Map} />
          </Container>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;