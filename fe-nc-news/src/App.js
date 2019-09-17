import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav.js';
import Articles from './Components/Articles';
import Homepage from './Components/Pages/Homepage';
import Topics from './Components/Pages/Topics';
import SingleArticlePage from './Components/Pages/SingleArticlePage';
import ErrorHandler from './Components/ErrorHandler';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Router>
          <Homepage path="/" />
          <Articles path="/articles" />
          <SingleArticlePage path="/articles/:article_id" />
          <Topics path="/topics" />
          <ErrorHandler default />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
