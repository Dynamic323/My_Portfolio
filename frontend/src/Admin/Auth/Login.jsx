"use client";

import { useState } from "react";
import "./admin-login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password, rememberMe });
    // Add your authentication logic here



    if (email=="" || password == "" ) {
        alert("error wereh  ")
    }

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-left">
          <div className="brand-logo">
            <div className="logo-circle">
              <span>D</span>
            </div>
            <h2>Admin Portal</h2>
          </div>
          <div className="welcome-text">
            <h1>Welcome Back Dy!</h1>
            <p>Please sign in to access your admin dashboard</p>
          </div>
          <div className="login-image">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Login Illustration"
            />
          </div>
        </div>
        <div className="login-right">
          <div className="login-header">
            <h2 className="gradient-text">Sign In</h2>
            <p>Enter your credentials to continue</p>
          </div>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-container">
                <i className="icon email-icon"></i>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@company.com"
                //   required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-container">
                <i className="icon password-icon"></i>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                //   required
                />
              </div>
            </div>
            <div className="form-options">
              <div className="remember-me">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
          <div className="login-footer">
            <p>
              Don't have an account? <a href="#">Contact Admin</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
