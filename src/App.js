import "./App.css";
import "@shopify/polaris/dist/styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { AppProvider, Page } from "@shopify/polaris";
import TransactionCard from "./components/transactioncard";
import { API_URL } from "./configs.js";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(false);

  const fetchTransactions = async () => {
    try {
      const resp = await axios.get(`${API_URL}/transactions`);
      setTransactions(resp.data);
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <AppProvider>
      <Page>
        <div style={{ height: "200px" }}>
          {error && <p>There was an error fetching the data</p>}
          {transactions.map((e) => (
            <TransactionCard transaction={e} key={e.id} />
          ))}
        </div>
      </Page>
    </AppProvider>
  );
}

export default App;
