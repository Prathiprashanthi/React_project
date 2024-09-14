import {Component} from 'react'
import './index.css'
import { Link } from 'react-router-dom';

// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
class Navbar extends Component{
    render(){
        return (<nav className="navbar">
            <div className="logo"style={{marginLeft:100}}>MyLogo</div>
            <div className="menu-icon">
                <i className="fas fa-bars"></i>
            </div>
            <div className="menu" style={{marginRight:150}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/user">User</Link>
            <Link to="/admin">Admin</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
    }
}
export default Navbar