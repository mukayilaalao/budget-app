import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      <input
        type="text"
        name="date"
        id="date"
        value={date}
        placeholder="date"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="name">
        <strong>Name</strong>
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        placeholder="name"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="amount">
        <strong>Amount</strong>
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        value={amount}
        placeholder="amount"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="update-from">
        <strong>From</strong>
      </label>
      <input
        type="text"
        name="from"
        id="new-from"
        value={from}
        placeholder="From"
        onChange={handleChange}
      />
      <br />
      <label htmlFor="category">
        <strong>Category</strong>
      </label>
      <input
        type="text"
        name="category"
        id="category"
        value={category}
        placeholder="category"
        onChange={handleChange}
      />
      <br />
      <button>
        <Link to={"/transactions/"}>Cancel</Link>
      </button>
      <button type="submit">CREATE A NEW ITEM</button>
    </form>
  );
}

export default NewTransaction;
