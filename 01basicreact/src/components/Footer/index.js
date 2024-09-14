import {Component} from 'react'
import './index.css'

class Footer extends Component{
    render(){
        return (
    
        <footer className="footer">
            <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </div>
            <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
        </footer>
    

  )
    }

    
}
export default Footer