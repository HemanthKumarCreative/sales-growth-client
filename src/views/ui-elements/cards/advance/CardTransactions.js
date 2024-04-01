// ** Custom Components
import Avatar from "@components/avatar";

// ** Icons Imports
import * as Icon from "react-feather";
import { useEffect, useState } from "react";
import { getTransactions } from "../../../../redux/salesGrowth";
// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";

const CardTransactions = () => {
  const dispatch = useDispatch();
  const transactions = useSelector((state) => state.salesGrowth.transactions);
  const [trans, setTrans] = useState([]);
  const COLORS = [
    "light-primary",
    "light-success",
    "light-danger",
    "light-warning",
    "light-info",
  ];
  const ICONS = ["Pocket", "Check", "DollarSign", "CreditCard", "TrendingUp"];
  const formatTransactions = (transactions) => {
    return transactions?.map((transaction, index) => {
      const updatedTransaction = {
        title: transaction.vendor,
        color: COLORS[index],
        subtitle: transaction.purpose,
        amount:
          transaction.type === "credit"
            ? "+ " + "$" + transaction.amount
            : "- " + "$" + transaction.amount,
        Icon: Icon[ICONS[index]],
        down: transaction.type === "credit" ? false : true,
      };
      return updatedTransaction;
    });
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, []);

  useEffect(() => {
    setTrans(formatTransactions(transactions?.slice(0, 5)));
    console.log({ transactions });
  }, [transactions]);

  const transactionsArr = [
    {
      title: "Wallet",
      color: "light-primary",
      subtitle: "Starbucks",
      amount: "- $74",
      Icon: Icon["Pocket"],
      down: true,
    },
    {
      title: "Bank Transfer",
      color: "light-success",
      subtitle: "Add Money",
      amount: "+ $480",
      Icon: Icon["Check"],
    },
    {
      title: "Paypal",
      color: "light-danger",
      subtitle: "Add Money",
      amount: "+ $590",
      Icon: Icon["DollarSign"],
    },
    {
      title: "Mastercard",
      color: "light-warning",
      subtitle: "Ordered Food",
      amount: "- $12",
      Icon: Icon["CreditCard"],
      down: true,
    },
    {
      title: "Transfer",
      color: "light-info",
      subtitle: "Refund",
      amount: "+ $98",
      Icon: Icon["TrendingUp"],
    },
  ];

  const renderTransactions = () => {
    return trans?.map((item, index) => {
      return (
        <div key={index} className="transaction-item">
          <div className="d-flex">
            <Avatar
              className="rounded"
              color={item.color}
              icon={<item.Icon size={18} />}
            />
            <div>
              <h6 className="transaction-title">{item.title}</h6>
              <small>{item.subtitle}</small>
            </div>
          </div>
          <div
            className={`fw-bolder ${
              item.down ? "text-danger" : "text-success"
            }`}
          >
            {item.amount}
          </div>
        </div>
      );
    });
  };

  return (
    <Card className="card-transaction">
      <CardHeader>
        <CardTitle tag="h4">Recent Transactions</CardTitle>
      </CardHeader>
      <CardBody>{renderTransactions()}</CardBody>
    </Card>
  );
};

export default CardTransactions;
