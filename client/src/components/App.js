import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import getUser from '../controllers/userService';

class App extends Component {
  state = {
    user: false
  };
  componentDidMount = () => {
    this.setState({ user: false });
  };
  logout = () => {
    this.setState({ user: false });
  };
  login = async () => {
    const user = await getUser();
    this.setState({ user });
  };
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar
            user={this.state.user}
            login={this.login.bind(this)}
            logout={this.logout.bind(this)}
          />
          <Route />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
