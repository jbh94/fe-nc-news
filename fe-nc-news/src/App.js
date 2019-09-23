import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav.js';
import Articles from './Components/Articles';
import Homepage from './Components/Pages/Homepage';
import Topics from './Components/Topics';
import SingleArticlePage from './Components/Pages/SingleArticlePage';
import ErrorHandler from './Components/ErrorHandler';
import Users from './Components/Users';
import UsersPage from './Components/Pages/UsersPage';

class App extends React.Component {
  state = {
    username: 'jessjelly'
  };
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header username={username} handleUserChange={this.handleUserChange} />
        <Nav />
        <Router>
          <Homepage path="/" />
          <Articles path="/articles" />
          <Users
            path="/users/:username"
            handleUserChange={this.handleUserChange}
            username={username}
          />
          <Articles path="/topics/:slug" />
          <SingleArticlePage path="/articles/:article_id" username={username} />
          <Topics path="/topics" username={username} />
          <ErrorHandler default />
          <UsersPage path="/users" />
        </Router>
        <Footer />
      </div>
    );
  }
  handleUser = event => {
    const { username } = event.target;
    this.setState({ username });
  };
}

export default App;
