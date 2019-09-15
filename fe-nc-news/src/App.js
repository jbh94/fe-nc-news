import React from 'react';
import './App.css';
// import { Router } from '@reach/router';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav.js';
import Articles from './Components/Articles';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Articles />
        <Footer />
      </div>
    );
  }
}

export default App;
