import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function UpdateTransaction() {
  const [state, setState] = useState({
    date: "",
    name: "",
    Amount: 0,
    from: "",
    category: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${id}`)
      .then((response) => setState(response.data))
      .catch(() => navigate("/transactions"));
  }, [id]);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/transactions/${id}`, state)
      .then(() => navigate(`/transactions/${id}`))
      .catch(() => navigate(`/transactions/${id}/edit`));
  };

  const { name, date, amount, category, from } = state;
  return (
    <form onSubmit={handleSubmit} className="form">
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
      <label htmlFor="update-from">
        <strong>From</strong>
      </label>
      <input
        type="text"
        name="from"
        id="update-from"
        value={from}
        placeholder="From"
        onChange={handleChange}
      />
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
      <button>
        <Link to={`/transactions/${id}`}>Cancel</Link>
      </button>
      <button type="submit">UPDATE ITEM</button>
    </form>
  );
}

export default UpdateTransaction;
