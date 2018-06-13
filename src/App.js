import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';
import styled from 'styled-components';
import './assets/css/App.css';
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
    let history = createBrowserHistory();

    history.listen(location => {
      setTimeout(() => {
        if (location.action === 'POP') {
          return;
        }

        window.scrollTo(0, 0);
      });
    });

    return (
      <Router history={history}>
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