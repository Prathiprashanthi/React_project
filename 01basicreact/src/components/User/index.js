import React, { Component } from 'react';
import './index.css';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

class User extends Component {
  state = {
    email: '',
    password: '',
    redirect: null,
    errorMessage: ''
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      const response = await axios.post('http://localhost:8000/api/login/', { email, password });

      if (response.status === 200) {
        // Login successful
        Swal.fire({
          title: 'Success!',
          text: 'You are logged in.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirect to dashboard or another page
          this.setState({ redirect: '/dashboard' });
        });
      }
    } catch (error) {
      // Login failed
      if (error.response) {
        // Server responded with a status other than 200 range
        this.setState({ errorMessage: error.response.data.error });
        Swal.fire({
          title: 'Error!',
          text: error.response.data.error,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        // Network error or something else
        this.setState({ errorMessage: 'An unexpected error occurred. Please try again later.' });
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  render() {
    if (this.state.redirect) {
      return <Navigate to={this.state.redirect} />;
    }

    return (
      <section className="vh-10" style={{ paddingTop: 30, paddingBottom: 100 }}>
        <div className="custom-container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11 col-md-12 d-flex justify-content-center">
              <div className="card text-black" style={{ width: 1000 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">User Login</p>

                      <form className="mx-1 mx-md-4" onSubmit={this.handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              name="email"
                              value={this.state.email}
                              onChange={this.handleInputChange}
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              name="password"
                              value={this.state.password}
                              onChange={this.handleInputChange}
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <p className="text-center mt-3">
                          Don't have an account? <Link to="/register">Register</Link>
                        </p>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="images/pic1.jpg"
                        className="img-fluid"
                        alt="Person enjoying a sunny day in the park"
                      />
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

export default User;
