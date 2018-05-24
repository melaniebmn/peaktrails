import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Footer from './Footer';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <main>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;