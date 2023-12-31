import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class NavBar extends Component {
    state = {

    }

    handlerClick = () => {
        $.ajax({
            // url: '/api2/logout/',
            url: 'https://app5593.acapp.acwing.com.cn/calculator/logout/',
            type: 'get',
            data: {
                username: this.state.username,
                password: this.state.password,
            },
            dataType: 'json',
            success: resp => {
                console.log(resp);
                if (resp.result === 'success')
                    window.location.href = '/calculator';
            },
        })
    }

    render_calculator = () => {
        if (this.props.is_login) {
            return (
                <li className="nav-item">
                    <Link className="navbar-brand" to="calculator/calculator">Calculator</Link>
                </li>
            )
        } else {
            return '';
        }
    }

    render_user = () => {
        if (this.props.is_login) {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="navbar-brand" style={{ cursor: 'pointer' }}>{this.props.username}</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={ this.handlerClick } className="navbar-brand" style={{ cursor: 'pointer' }}>logout</Link>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="navbar-brand" to="calculator/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="navbar-brand" to="calculator/register">Register</Link>
                    </li>
                </ul>
            )
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link className="navbar-brand" to="/calculator">WEIWEI</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="navbar-brand active" to="calculator/home">Home</Link>
                            </li>
                            {this.render_calculator()}
                        </ul>
                        {this.render_user()}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;