import React, { Component } from "react";
import './index.css';

class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: ''
    };
  }

  // Focus on the next input field after entering a digit
  focusNext = (current, next) => {
    if (this.state[current].length === 1) {
      document.getElementById(next).focus();
    }
  };

  // Handle input change
  handleChange = (e) => {
    const { id, value } = e.target;
    if (value.length <= 1 && /^\d*$/.test(value)) { // Only allow 1 digit and numbers
      this.setState({ [id]: value }, () => {
        if (value.length === 1) {
          if (id === 'otp1') this.focusNext('otp1', 'otp2');
          if (id === 'otp2') this.focusNext('otp2', 'otp3');
          if (id === 'otp3') this.focusNext('otp3', 'otp4');
        }
      });
    }
  };

  render() {
    return (
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                      <form className="mx-auto" style={{ maxWidth: 400 }}>
                        <div className="d-flex justify-content-center mb-4">
                          <input
                            type="text"
                            className="form-control otp-input"
                            maxLength="1"
                            id="otp1"
                            value={this.state.otp1}
                            onInput={this.handleChange}
                          />
                          <input
                            type="text"
                            className="form-control otp-input"
                            maxLength="1"
                            id="otp2"
                            value={this.state.otp2}
                            onInput={this.handleChange}
                          />
                          <input
                            type="text"
                            className="form-control otp-input"
                            maxLength="1"
                            id="otp3"
                            value={this.state.otp3}
                            onInput={this.handleChange}
                          />
                          <input
                            type="text"
                            className="form-control otp-input"
                            maxLength="1"
                            id="otp4"
                            value={this.state.otp4}
                            onInput={this.handleChange}
                          />
                        </div>

                        <div className="d-flex justify-content-center">
                          <button type="button" className="btn btn-primary btn-lg">
                            Submit OTP
                          </button>
                        </div>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="images/3816471.jpg"
                        className="img-fluid"
                        alt="Sample"
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

export default Otp;
