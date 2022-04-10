import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
    const navigate=useNavigate();
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, pass);
  
  };
  if (user){
    navigate('/shop')
  }
  return (
    <div className="form-container">
      <div>
        <form onSubmit={handleLogin}>
          <h2 className="form-title">Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email :</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password :</label>
            <input
              onBlur={handlePassBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
         
          <p>Error: {hookError?.message}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
