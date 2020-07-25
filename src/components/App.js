import React, {Component} from 'react';
import TopBar from './TopBar';
import Main from './Main';
import '../styles/App.css';
import { TOKEN_KEY, USER_NAME } from '../constants';

class App extends Component{
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }

    handleLoginSucceed = (token, username) => {
        localStorage.setItem(TOKEN_KEY, token)
        localStorage.setItem(USER_NAME, username)
        this.setState({ isLoggedIn: true });
    }


    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_NAME);
        this.setState({ isLoggedIn: false });
    }

    handleLogin = () => {

    }

    render(){
    return (
        <div className="App">
          <TopBar handleLogout={this.handleLogout}
                  isLoggedIn={this.state.isLoggedIn}
                  username = {localStorage.getItem(USER_NAME)}
          />
          <Main handleLoginSucceed={this.handleLoginSucceed}
                isLoggedIn={this.state.isLoggedIn}
          />
        </div>
    )
  }
}

export default App;
