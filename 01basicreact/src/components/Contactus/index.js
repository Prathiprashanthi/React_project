import React, { useState } from "react";
import './index.css';
import Swal from 'sweetalert2'; // Import Swal

const Contactus = () => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      contact: contact,
      message: message
    };

    try {
      const response = await fetch('http://localhost:8000/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Message Sent',
          text: data.success || 'Your message has been sent successfully!',
        });
        // Reset the form fields
        setEmail("");
        setContact("");
        setMessage("");
      } else {
        // Error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: data.error || 'Something went wrong. Please try again.',
        });
      }
    } catch (error) {
      // Network or server error
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ width: 2500 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact Us</p>

                    <form className="mx-1 mx-md-5" onSubmit={handleSubmit}>
                      <div className="row mb-4">
                        <div className="col-md-6 d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="col-md-6 d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example4cd"
                              className="form-control"
                              value={contact}
                              onChange={(e) => setContact(e.target.value)}
                              required
                            />
                            <label className="form-label" htmlFor="form3Example4cd">Contact</label>
                          </div>
                        </div>
                      </div>

                      <div className="form-outline mb-4">
                        <textarea
                          className="form-control"
                          id="form4Example3"
                          rows="4"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                        <label className="form-label" htmlFor="form4Example3">Message</label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" style={{ marginLeft: 180 }}>
                        <button type="submit" className="btn btn-primary btn-lg">Send</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="images/2503645.jpg" className="img-fluid" alt="Beach sunset with waves crashing" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
