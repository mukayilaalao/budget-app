import { Link } from "react-router-dom";

function Transaction({ transaction, id }) {
  const { date, amount, name } = transaction;
  return (
    <tr>
      <td>{date}</td>
      <td>
        <Link to={`/transactions/${id}`}>{name}</Link>
      </td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
