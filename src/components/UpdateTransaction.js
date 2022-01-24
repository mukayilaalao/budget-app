import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import NewCalendar from "./NewCalendar";
import "./UpdateTransaction.css";

function UpdateTransaction() {
  const [state, setState] = useState({
    date: "",
    name: "",
    Amount: 0,
    from: "",
    category: "",
  });
  const [categories, setCategories]=useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const API_URL = process.env.REACT_APP_API_URL;
   useEffect(() => {
    axios
      .get(`${API_URL}/transactions/categories`)
      .then((response) => setCategories(response.data))
      .catch(e => console.log(e));
  }, []);
  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${id}`)
      .then((response) => setState(response.data))
      .catch(() => navigate("/transactions"));
  }, [id]);
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  //get the date
  const getDate=date=>{
      setState({...state, date});
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`${API_URL}/transactions/${id}`, state)
      .then(() => navigate(`/transactions/${id}`))
      .catch(() => navigate(`/transactions/${id}/edit`));
  };

  const { name, date, amount, category, from } = state;
  return (
      <div className="update-form">
        <NewCalendar getDate={getDate}/>
        <form onSubmit={handleSubmit} >
        
        <br />
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
        <br />
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
        <br />
        <label htmlFor="from">
            <strong>From</strong>
        </label>
        <br />
        <input
            type="text"
            name="from"
            id="from"
            value={from}
            placeholder="From"
            onChange={handleChange}
        />
        <br />
        <label htmlFor="category">
            <strong>Category</strong>
        </label>
        <br />
        <select id="category" value={category} onChange={handleChange}>
            <option value="">Please Choose category...</option>
            {categories.map((category,i)=> <option value={category.toLowerCase()} key={"category"+i}>{category}</option>)}
            </select>
        
        <hr />
        <button>
            <Link to={`/transactions/${id}`}>Cancel</Link>
        </button>
        <button id="update-submit" type="submit">
            UPDATE ITEM
        </button>
        </form>
    </div>
  );
}

export default UpdateTransaction;
