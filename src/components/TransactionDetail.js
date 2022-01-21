import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./TransactionDetails.css";
function TransactionDetail() {
  const [transaction, setTransaction] = useState({});
  const API_URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${id}`)
      .then((response) => setTransaction(response.data))
      .catch(() => {
        navigate("/not_found");
      });
  }, [id]);
  const handleDelete = () => {
    axios
      .delete(`${API_URL}/transactions/${id}`)
      .then(() => navigate("/transactions"))
      .catch(() => navigate("/page_not_found"));
  };
  const { name, amount, category, from, date } = transaction;
  return (
    <div className="detail-trans">
      <div>
        {amount} {name} from <strong>{from}</strong> on <strong>{date}</strong>
      </div>
      <div>
        <strong>Category:</strong> {category}
      </div>
      <div className="details-buttons">
        <button>
          <Link to="/transactions">Back</Link>
        </button>
        <button>
          <Link to={`/transactions/${id}/edit`}>Edit</Link>
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default TransactionDetail;
