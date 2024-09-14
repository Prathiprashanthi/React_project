import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,  // Add state to handle redirection
        };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        try {
            const response = await axios.post('http://localhost:8000/api/users-register/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            
            console.log('Success:', response.data);  // Log success message
            Swal.fire({
                icon: 'success',
                title: 'Registration Successful',
                text: 'You have been successfully registered. Redirecting to login page...',
                timer: 2000,
                showConfirmButton: false,
            }).then(() => {
                this.setState({ redirect: true });
            });
        } catch (error) {
            console.error('Error:', error.response?.data || error.message);  // Log error
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.response?.data?.detail || 'An error occurred during registration.',
            });
        }
    }

    render() {
        // Redirect to login if the registration was successful
        if (this.state.redirect) {
            return <Navigate to="/user" />;
        }

        return (
            <section className="vh-80" style={{ paddingTop: 30, paddingBottom: 30 }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12">
                            <div className="row">
                                {/* Left Column: Image */}
                                <div className="col-md-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src="images/2402277.jpg"
                                        className="img-fluid"
                                        alt="Person enjoying a sunny day in the park"
                                    />
                                </div>

                                {/* Right Column: Form */}
                                <div className="col-md-6">
                                    <div className="custom-card text-black">
                                        <div className="custom-card-body p-md-5">
                                            <p className="text-center h1 fw-bold mb-5">Sign Up</p>
                                            <form className="form-container" onSubmit={this.handleSubmit}>
                                                <div className="row mb-4">
                                                    <div className="col-md-6">
                                                        <div className="form-outline">
                                                            <input type="text" name="user_name" className="form-control" required />
                                                            <label className="form-label">Your Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-outline">
                                                            <input type="email" name="user_email" className="form-control" required />
                                                            <label className="form-label">Your Email</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col-md-6">
                                                        <div className="form-outline">
                                                            <input type="password" name="user_password" className="form-control" required />
                                                            <label className="form-label">Password</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-outline">
                                                            <input type="text" name="user_contact" className="form-control" required />
                                                            <label className="form-label">Contact</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col-md-6">
                                                        <div className="form-outline">
                                                            <input type="number" name="user_age" className="form-control" required />
                                                            <label className="form-label">Age</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-outline">
                                                            <input type="text" name="user_address" className="form-control" required />
                                                            <label className="form-label">Address</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col-md-12">
                                                        <div className="form-outline">
                                                            <input type="file" name="user_image" className="form-control" />
                                                            <label className="form-label">Choose Profile Image</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <label className="form-check-label">
                                                        Already an existing user? <Link to="/">Login</Link>
                                                    </label>
                                                </div>
                                                <div className="d-flex justify-content-center mb-4">
                                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Register;
