import React, { Component } from "react";
import axios from "axios";
import './index.css';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      age: '',
      userEmail: '',
      userPhNum: '',
      userAddress: '',
      password: '',
      userImage: null,
      userImageUrl: '', // To store the image URL
    };
  }

  componentDidMount() {
    // Fetch the profile data from the API when the component mounts
    axios.get('http://localhost:8000/api/profile/')
      .then(response => {
        const profile = response.data;
        // Fix the logic to ensure no duplicate '/media/' in the URL
        this.setState({
          userName: profile.user_name,
          age: profile.user_age,
          userEmail: profile.user_email,
          userPhNum: profile.user_contact,
          userAddress: profile.user_address,
          password: profile.user_password, 
          userImageUrl: profile.user_image.userImageUrl,
        });
      })
      .catch(error => {
        console.error("There was an error fetching the profile data!", error);
      });
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleImageChange = (e) => {
    this.setState({ userImage: e.target.files[0] });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user_name', this.state.userName);
    formData.append('user_age', this.state.age);
    formData.append('user_email', this.state.userEmail);
    formData.append('user_contact', this.state.userPhNum);
    formData.append('user_address', this.state.userAddress);
    
    // Only append password if it's been entered
    if (this.state.password) {
      formData.append('user_password', this.state.password);
    }
    
    // Append the image file if selected
    if (this.state.userImage) {
      formData.append('user_image', this.state.userImage);
    }

    // Post updated profile data
    axios.post('http://localhost:8000/api/profile/', formData)
      .then(response => {
        alert('Profile updated successfully!');
      })
      .catch(error => {
        console.error("There was an error updating the profile!", error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row" style={{ paddingTop: 100, paddingBottom: 100 }}>
          <div className="profile-nav col-md-3">
            <div className="panel">
              <div className="user-heading round">
                {this.state.userImageUrl ? (
                  <img
                    src={this.state.userImageUrl}
                    alt="Profile"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/150" // Placeholder if no user image is available
                    alt="Default Profile"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                  />
                )}
              </div>
              <ul className="nav nav-pills nav-stacked">
                <p>
                  <span>Profile Picture </span>
                  <input
                    type="file"
                    name="userImage"
                    className="form-control"
                    onChange={this.handleImageChange}
                  />
                </p>
              </ul>
            </div>
          </div>

          <div className="profile-info col-md-9">
            <div className="panel">
              <div className="bio-graph-heading" style={{ fontSize: 30 }}>
                Profile
              </div>
              <div className="panel-body bio-graph-info">
                <div className="row" style={{ marginLeft: 150 }}>
                  <div className="bio-row col-md-6 mb-3">
                    <p>
                      <span>First Name </span>
                      <input
                        type="text"
                        name="userName"
                        className="form-control"
                        value={this.state.userName}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <div className="bio-row col-md-6 mb-3">
                    <p>
                      <span>Age</span>
                      <input
                        type="text"
                        name="age"
                        className="form-control"
                        value={this.state.age}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <div className="bio-row col-md-6 mb-3">
                    <p>
                      <span>Email </span>
                      <input
                        type="email"
                        name="userEmail"
                        className="form-control"
                        value={this.state.userEmail}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <div className="bio-row col-md-6 mb-3">
                    <p>
                      <span>Phone </span>
                      <input
                        type="text"
                        name="userPhNum"
                        className="form-control"
                        value={this.state.userPhNum}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <div className="bio-row col-md-6 mb-3">
                    <p>
                      <span>Address </span>
                      <input
                        type="text"
                        name="userAddress"
                        className="form-control"
                        value={this.state.userAddress}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                  <div className="bio-row col-md-6 mb-3">
                    <p>
                      <span>Password </span>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </p>
                  </div>
                </div>

                <div className="text-center" style={{ marginLeft: 30 }}>
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill py-2 px-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Profile;
