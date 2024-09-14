import React, { Component } from "react";
import './index.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      review: ''
    };
  }

  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  };

  handleReviewChange = (e) => {
    this.setState({ review: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { rating, review } = this.state;

    if (!rating || !review) {
      toast.error("Rating and review are required.");
      return;
    }

    fetch('http://localhost:8000/api/feedback/', {  // Ensure this URL matches your Django API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        Rating: rating,
        Review: review
      })
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success("Feedback submitted successfully!", {
          className: 'toast-success', // Apply custom class for success toast
        });
        this.setState({ rating: '', review: '' }); // Clear the form
      }
    })
    .catch(error => {
      console.error('Error:', error);
      toast.error("An error occurred while submitting feedback.");
    });
  };

  render() {
    return (
      <div className="container d-flex justify-content-center mt-5" style={{ paddingTop: 30 }}>
        <div className="card text-center mb-5" style={{ width: 500 }}>
          <form onSubmit={this.handleSubmit}>
            <div className="location mt-4">
              <h1>Feedback</h1>
            </div>
            <div className="rating">
              <input type="radio" name="rating" value="5" id="5" onChange={this.handleRatingChange} checked={this.state.rating === '5'} />
              <label htmlFor="5">☆</label>
              <input type="radio" name="rating" value="4" id="4" onChange={this.handleRatingChange} checked={this.state.rating === '4'} />
              <label htmlFor="4">☆</label>
              <input type="radio" name="rating" value="3" id="3" onChange={this.handleRatingChange} checked={this.state.rating === '3'} />
              <label htmlFor="3">☆</label>
              <input type="radio" name="rating" value="2" id="2" onChange={this.handleRatingChange} checked={this.state.rating === '2'} />
              <label htmlFor="2">☆</label>
              <input type="radio" name="rating" value="1" id="1" onChange={this.handleRatingChange} checked={this.state.rating === '1'} />
              <label htmlFor="1">☆</label>
            </div>

            <div className="form-group mt-3">
              <textarea id="comments" name="review" rows="4" cols="50" className="form-control" placeholder="Write your review here" value={this.state.review} onChange={this.handleReviewChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary rounded-pill py-2 px-4 mt-3" style={{ color: "#333" }}>
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Feedback;
