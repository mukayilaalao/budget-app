import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar({ total }) {
  return (
    <div className="nav-bar">
      <h1>
        <Link to="/transactions">BUDGET APP</Link>
      </h1>
      <h2 id="acc-total">Account Balance: {total}</h2>
      <h3>
        <Link to="/transactions/new">New Transaction</Link>
      </h3>
    </div>
  );
}

export default NavBar;
