import React from 'react';
import { useState } from "react";
import "./Login.scss" ;
import login from "../../Assets/Images/login.png";
import signup from "../../Assets/Images/signup.png";


function Login() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  return (
    
    <div className={`container__login ${isSignUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="API/index.html" className="sign-in-form">
            <h2 className="title">Sign In</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button type="submit" className="btn cart">
              Sign In
            </button>
            <p className="social-text">Or Sign In with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="Username" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn cart">
              Sign Up
            </button>

            <p className="social-text">Or Sign Up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt sequi soluta adipisci molestiae minima pariatur sapiente
              ipsum ab vitae!
            </p>
            <button className="btn cart transparent" id="sign-up-btn" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>

          <img src={signup} alt="" className="image" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
              deserunt sequi soluta adipisci molestiae minima pariatur sapiente
              ipsum ab vitae!
            </p>
            <button className="btn cart transparent" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>

          <img src={login} alt="" className="image" />
        </div>
      </div>
      
    </div>
  );
  }
export default Login;
