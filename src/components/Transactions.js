import axios from "axios";
import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import Transaction from "./Transaction";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${API_URL}/transactions`)
      .then((response) => setTransactions(response.data));
  }, []);
  return (
    <section>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Transaction amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, i) => (
            <Transaction key={"key" + i} id={i} transaction={transaction} />
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default Transactions;
