import React, {Component} from 'react';
import { Icon } from 'antd';
import logo from '../assets/images/logo.svg';
import { TOKEN_KEY } from '../constants';
import {Link} from "react-router-dom";


class TopBar extends Component {


    render() {
        return (
            <header className="App-header">
                <img src={logo} alt="logo" className="App-logo"/>
                <Link to='/' className="App-title">Around</Link>
                {this.props.isLoggedIn ?
                    <a className="logout" onClick={this.props.handleLogout} >
                        <Icon type="logout"/>{' '}logged in as {this.props.username}, click to log out
                    </a> : <a className="logout">
                        <Icon type="login"/>
                        <Link to='login'>Click to log in</Link> </a> }
            </header>
        );
    }
}

export default TopBar;
