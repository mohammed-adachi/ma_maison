import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from './images/logo.svg'; 
import { FaAlignRight } from "react-icons/fa";

class Navbar extends Component {
    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={Logo} alt="ma maison" />
                        </Link>
                        <button 
                            type="button" 
                            className="nav-bttn" 
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>
                        <ul className={this.state.isOpen ? "nav-linkks show-nav" : "nav-linkks"}>
                            <li className="Ulli">
                                <Link className="Ulli" to="/" >Home</Link>
                            </li>
                            <li>
                                <Link  className="Ulli" to="/Room">Room</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
