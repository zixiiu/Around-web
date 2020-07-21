import React, {Component} from 'react';
import { Icon } from 'antd';
import logo from '../assets/images/logo.svg';
import { TOKEN_KEY } from '../constants';


class TopBar extends Component {


    render() {
        return (
            <header className="App-header">
                <img src={logo} alt="logo" className="App-logo"/>
                <span className="App-title">Around</span>
                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}Logout
                    </a> : <a className="logout">
                        <Icon type="login"/>{' '}Not Logged in </a> }
            </header>
        );
    }
}

export default TopBar;
