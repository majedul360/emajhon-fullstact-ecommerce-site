import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import auth from "../firebase/Firebase.int";
import Loading from "../loading/Loading";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-container">
      <div className="container">
        <h3>login</h3>
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
          <div className="input-group">
            <label htmlFor="">password</label> <br />
            <input
              type="password"
              placeholder="enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input className="btn" type="submit" value="login" />
        </form>
        <p className="option">
          new to emajon? <Link to="/registar">registar</Link>
        </p>
        <p className="or">
          <a>or</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
