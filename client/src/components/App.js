import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import AuthenticationPage from './AuthenticationPage';
import controller from '../controllers/userService';
import NewsFeed from './NewsFeed';
import ErrorPage from './ErrorPage';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props => (auth !== false ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);
class App extends Component {
  state = {
    user: false
  };
  componentDidMount = async () => {
    this.setState({ user: false });
  };
  logout = () => {
    this.setState({ user: false });
  };
  login = async body => {
    const response = await controller.login(body);
    const user = await controller.getUser(response.token);
    this.setState({ user });
  };
  signup = async body => {
    const signupResponse = await controller.signup(body);
    console.log(signupResponse.data);
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
          <Switch>
            <PrivateRoute
              exact
              path="/"
              auth={this.state.user}
              component={() => <NewsFeed user={this.state.user} />}
            />
            <Route
              path="/login"
              component={() => (
                <AuthenticationPage
                  type="login"
                  login={this.login.bind(this)}
                  user={this.state.user}
                />
              )}
            />
            <Route
              path="/signup"
              component={() => (
                <AuthenticationPage
                  type="signup"
                  signup={this.signup.bind(this)}
                  user={this.state.user}
                />
              )}
            />
            <Route component={() => <ErrorPage code="404" />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
