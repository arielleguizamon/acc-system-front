import { useState } from "react";

import {
  Stack,
  Link,
  Collapsible,
  Card,
  Button,
  TextContainer,
} from "@shopify/polaris";

const TransactionCard = ({ transaction }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card sectioned>
      <Stack vertical>
        <Button
          onClick={() => setOpen(!open)}
          ariaExpanded={open}
          ariaControls="basic-collapsible"
        >
          Toggle
        </Button>
        <TextContainer>
          <p style={{ color: transaction.type === "debit" ? "red" : "green" }}>
            <b>Type: </b>
            {transaction.type}
          </p>
        </TextContainer>
        <Collapsible
          open={open}
          id="basic-collapsible"
          transition={{
            duration: "500ms",
            timingFunction: "ease-in-out",
          }}
          expandOnPrint
        >
          <TextContainer>
            <p>
              <b>Amount: </b>${transaction.amount}
            </p>
            <p>
              <b>Date: </b>
              {new Date(transaction.effectiveDate).toLocaleDateString()}
            </p>
          </TextContainer>
        </Collapsible>
      </Stack>
    </Card>
  );
};
export default TransactionCard;
