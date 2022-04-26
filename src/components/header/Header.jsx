import { Link } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="header">
      <img src="images/Logo.svg" alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/order-review">Order review</Link>
        <Link to="/manage-inventory">Manage Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/registar">Registar</Link>
        {user ? (
          <button
            style={{ marginLeft: "1rem", cursor: "pointer" }}
            onClick={() => signOut(auth)}
          >
            log out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
