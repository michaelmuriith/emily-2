import React from 'react';
//import '../auth.css';

const Resgister = () => {
  return (
    <form>
    <h3>Sign Up</h3>
    <div className="mb-3">
      <label>Full names</label>
      <input
        type="text"
        className="form-control"
        placeholder="First name"
      />
    </div>
    <div className="mb-3">
      <label>Display name</label>
      <input type="text" className="form-control" placeholder="Display name" />
    </div>
    <div className="mb-3">
      <label>Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
      />
    </div>
    <div className="mb-3">
      <label>Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-primary">
        Sign Up
      </button>
    </div>
    <p className="forgot-password text-right">
      Already registered <a href="/login">sign in?</a>
    </p>
  </form>

    );
}

export default Resgister