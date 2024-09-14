import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class Admin extends Component {
  state = {
    admin_name: '', // changed from name to admin_name
    password: '',
    errorMessage: '',
    successMessage: '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { admin_name, password } = this.state;

    axios.post('http://localhost:8000/api/admin-login/', {
      name: admin_name,  // Changed field to match the Django backend
      password: password,
    })
    .then((response) => {
      this.setState({
        successMessage: response.data.message,
        errorMessage: '',
      });
      // Optionally redirect to the dashboard
      // this.props.history.push('/dashboard');
    })
    .catch((error) => {
      if (error.response) {
        this.setState({
          errorMessage: error.response.data.message,
          successMessage: '',
        });
      }
    });
  };

  render() {
    const { admin_name, password, errorMessage, successMessage } = this.state;

    return (
      <section className="vh-10" style={{ paddingTop: 30, paddingBottom: 100 }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ width: 1500 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Login</p>

                      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                      {successMessage && <div className="alert alert-success">{successMessage}</div>}

                      <form className="mx-1 mx-md-4" onSubmit={this.handleSubmit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example3c"
                              name="admin_name"  // changed from name to admin_name
                              value={admin_name}
                              onChange={this.handleInputChange}
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">Admin Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              name="password"
                              value={password}
                              onChange={this.handleInputChange}
                              className="form-control"
                              required
                            />
                            <label className="form-label" htmlFor="form3Example4c">Admin Password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" style={{ marginLeft: 200 }}>
                          <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img src="images/6613565.jpg" className="img-fluid" alt="Conference room with people discussing" />
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

export default Admin;
