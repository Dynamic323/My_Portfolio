"use client";

import { useState } from "react";
import "./admin-login.css";
import { useRouter } from "next/navigation";
import { loginUser } from "../api"; // Capital "U"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (!email || !password) {
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    setError("");

    try {
      const credentials = { email, password, rememberMe };
      const response = await loginUser(credentials);
      // Handle successful login (store token, redirect, etc.)
      console.log("Login successful:", response);

      // Example: Store token and redirect
      if (response.token) {
        localStorage.setItem("adminToken", response.token);
        // Assuming token for ProtectedRoutes is "token" based on previous file, but Login sets "adminToken".
        // Checking ProtectedRoutes again: it checks "token".
        // I should set "token" too or update ProtectedRoutes.
        localStorage.setItem("token", response.token);
        router.push("/admin/dashboard");
      }
    } catch (err) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
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
              {isloading ? (
                <>
                  <span className="spinner"></span>
                  Logging in...
                </>
              ) : (
                <span>Sign In</span>
              )}
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
