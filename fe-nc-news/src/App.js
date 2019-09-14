import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
