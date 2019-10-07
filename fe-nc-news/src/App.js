import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './Components/WebPages/Header';
import Footer from './Components/WebPages/Footer';
import Nav from './Components/WebPages/Nav.js';
import Articles from './Components/Pages/Articles/Articles';
import Homepage from './Components/WebPages/Homepage';
import Topics from './Components/Pages/Topics/Topics';
import SingleArticlePage from './Components/Pages/Articles/SingleArticlePage';
import ErrorHandler from './Components/Pages/Utils/ErrorHandler';
import Users from './Components/Pages/Users/Users';
import UsersPage from './Components/Pages/Users/UsersPage';

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
          <UsersPage path="/users" username={username} />
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
