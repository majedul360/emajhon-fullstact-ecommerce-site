import { Link, useNavigate } from "react-router-dom";
import "./Registar.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import { useState } from "react";
const Registar = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("please enter your email");
    }
    if (!password) {
      setPasswordError("please enter your password");
    } else {
      if (password.length < 6) {
        setPasswordError("please enter at least 6 character");
        return;
      } else {
        setPasswordError("");
      }
    }
    if (!confirmPassword) {
      setConfirmPasswordError("please enter your confirmPassword");
      return;
    } else {
      setConfirmPasswordError("");
      if (password !== confirmPassword) {
        setConfirmPasswordError("two passwords did not match");
        return;
      }
    }

    createUserWithEmailAndPassword(email, password);
    navigate("/");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
  };
  return (
    <div className="form-container">
      <div className="container">
        <h3>registar</h3>
        <form onSubmit={formSubmitHandler} action="">
          <div className="input-group">
            <label htmlFor="">email</label> <br />
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <p style={{ color: "red" }}>{emailError}</p>
          <div className="input-group">
            <label htmlFor="">password</label> <br />
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p style={{ color: "red" }}>{passwordError}</p>

          <div className="input-group">
            <label htmlFor="">confirm password</label> <br />
            <input
              type="password"
              placeholder="enter your confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <p style={{ color: "red" }}>{confirmPasswordError}</p>

          <p style={{ color: "red" }}>
            {error?.message.includes("already-in-use")
              ? "email already use"
              : error?.message}
          </p>
          <input className="btn" type="submit" value="registar" />
        </form>
        <p className="option">
          already have an account? <Link to="/login">login</Link>
        </p>
        <p className="or">
          <a>or</a>
        </p>
      </div>
    </div>
  );
};

export default Registar;
