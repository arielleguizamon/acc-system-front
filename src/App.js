import "./App.css";
import "@shopify/polaris/dist/styles.css";

import { AppProvider, Page } from "@shopify/polaris";
import TransactionCard from "./components/transactioncard";

function App() {
  const a = [
    {
      id: 0,
      type: "credit",
      amount: 100,
      effectiveDate: 1614011841291,
    },
    {
      id: 0,
      type: "debit",
      amount: 20,
      effectiveDate: 1614011841291,
    },
    {
      id: 0,
      type: "credit",
      amount: 100,
      effectiveDate: 1614011841291,
    },
    {
      id: 0,
      type: "credit",
      amount: 100,
      effectiveDate: 1614011841291,
    },
    {
      id: 0,
      type: "debit",
      amount: 30,
      effectiveDate: 1614011841291,
    },
  ];

  return (
    <AppProvider>
      <Page>
        <div style={{ height: "200px" }}>
          {a.map((e) => (
            <TransactionCard transaction={e} />
          ))}
        </div>
      </Page>
    </AppProvider>
  );
}

export default App;
