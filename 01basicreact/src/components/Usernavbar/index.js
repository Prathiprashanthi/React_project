import React, { Component }  from "react";
import './index.css';
import { Link } from 'react-router-dom';
class Usernavbar extends Component{
    render(){
        return(<nav className="navbar">
            <div className="logo"style={{marginLeft:100}}>MyLogo</div>
            <div className="menu-icon">
                <i className="fas fa-bars"></i>
            </div>
            <div className="menu" style={{marginRight:150}}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/feedback">Feedback</Link>
            <Link to="/user">Logout</Link>
            </div>
        </nav>);
    }
}
export default Usernavbar