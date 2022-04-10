import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [conPass, setConPass] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, hookError] =
    useCreateUserWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleConPassBlur = (event) => {
    setConPass(event.target.value);
  };
  if (user) {
    navigate("/shop");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (pass.length < 6) {
      setError("pass should contain at least 6 character");
      return;
    }
    if (pass !== conPass) {
      setError("Your passwords are not same");
      return;
    }
    createUserWithEmailAndPassword(email, pass);
  };

  return (
    <div className="form-container">
      <div>
        <form className="form" onSubmit={handleCreateUser}>
          <h2 className="form-title">SignUp</h2>
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
          <div className="input-group">
            <label htmlFor="confirm-password">ConfirmPassword :</label>
            <input
              onBlur={handleConPassBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p className="error">{error || hookError}</p>
          <p className="error">{hookError}</p>
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          Already have an account?
          <Link className="form-link" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
