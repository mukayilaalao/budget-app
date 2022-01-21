import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NewTransaction.css";

function NewTransaction() {
  const [state, setState] = useState({
    date: "",
    name: "",
    Amount: 0,
    from: "",
    category: "",
  });
  const navigate = useNavigate();
  const API_URL = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API_URL}/transactions/`, state)
      .then(() => navigate("/transactions"))
      .catch(() => navigate("/transaction/new"));
  };

  const { name, date, amount, category, from } = state;
  return (
    <form onSubmit={handleSubmit} className="new-form">
      <label htmlFor="date">
        <strong>Date</strong>
      </label>
      <br />
      <input
        type="text"
        name="date"
        id="date"
        value={date}
        placeholder="date"
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="name">
        <strong>Name</strong>
      </label>
      <br />
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        placeholder="name"
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="amount">
        <strong>Amount</strong>
      </label>
      <br />
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount}
        placeholder="amount"
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="update-from">
        <strong>From</strong>
      </label>
      <br />
      <input
        type="text"
        name="from"
        id="new-from"
        value={from}
        placeholder="From"
        onChange={handleChange}
      />
      <hr />
      <label htmlFor="category">
        <strong>Category</strong>
      </label>
      <br />
      <input
        type="text"
        name="category"
        id="category"
        value={category}
        placeholder="category"
        onChange={handleChange}
      />
      <hr />
      <div className="new-buttons">
        <button id="cancel">
          <Link to={"/transactions/"}>Cancel</Link>
        </button>
        <button id="new-submit" type="submit">
          CREATE A NEW ITEM
        </button>
      </div>
    </form>
  );
}

export default NewTransaction;
