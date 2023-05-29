import React, { useState } from "react";
import { Cards, Clients } from "../data/data";
import {
  testCardNumber,
  cardDateValid,
  passwordCorrect,
  testAllowedAmount,
  testNegative,
  sleep
} from "./Functions";
const Multistate = () => {
  const [show, setShow] = useState("start");
  const [cardNumber, setCardNumber] = useState("");
  const [output, setOutpyt] = useState("");
  const [cardPassword, setCardPassword] = useState("");
  const [balance, setBalance] = useState("");
  const [oPassword, setOPassword] = useState("Enter the Card Password");
  const [i, setI] = useState(2);

  var card = testCardNumber(cardNumber, Cards);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Boolean(card)) {
      if (cardDateValid(card)) {
        setShow("password");
      } else {
        setShow("output");
        setOutpyt("The card is expired");
      }
    } else {
      setShow("output");
      setOutpyt("The card number is invalid");
    }
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    if (passwordCorrect(cardPassword, card)) {
      setShow("balance");
    } else {
      if (i === 0) {
        setShow("output");
        setOutpyt("Your card has been blocked");
      } else {
        let x = i - 1;
        setI(x);
        setOPassword(
          "Please re-enter your password, note that you only have " +
            i +
            " attempts"
        );
        setCardPassword("");
        setShow("password");
      }
    }
  };
  const handleSubmit3 = (e) => {
    e.preventDefault();
    var clientID = card["idclient"];
    if (
      testAllowedAmount(balance, clientID, Clients) ||
      (!testAllowedAmount(balance, clientID, Clients) &&
        testNegative(clientID, Clients))
    ) {
      setShow("output");

      setOutpyt("operation accomplished successfully");
    } else {
      setShow("output");
      setOutpyt("It is not allowed to withdraw " + balance + " amount");
    }
  };
  var element;
  if (show === "start") {
    element = (
      <button
        className="submit-input"
        type="button"
        onClick={() => setShow("cardNumber")}
      >
        Start
      </button>
    );
  }
  if (show === "cardNumber") {
    element = (
      <>
        <h2>Enter the Card Number</h2>
        <form onSubmit={handleSubmit}>
          <>
            <label className="sr-only" htmlFor="card_number">
              Card Number
            </label>
            <input
              value={cardNumber}
              type="text"
              className="form-input"
              id="card_number"
              name="Card Number"
              placeholder="Card Number"
              required="required"
              onChange={(e) => setCardNumber(Number(e.target.value))}
            />
          </>
          <input className="submit-input" type="submit" value="Sent" />
        </form>
      </>
    );
  }
  if (show === "password") {
    element = (
      <>
        <h2>{oPassword}</h2>
        <form onSubmit={handleSubmit2}>
          <>
            <label className="sr-only" htmlFor="card_password">
              Card Password
            </label>
            <input
              value={cardPassword}
              type="password"
              className="form-input"
              id="card_password"
              name="Card Password"
              placeholder="Card Password"
              required="required"
              onChange={(e) => setCardPassword(Number(e.target.value))}
            />
          </>
          <input className="submit-input" type="submit" value="Sent" />
        </form>
      </>
    );
  }
  if (show === "balance") {
    element = (
      <>
        <h2>Enter the balance you wish to withdraw</h2>
        <form onSubmit={handleSubmit3}>
          <>
            <label className="sr-only" htmlFor="card_balance">
              balance
            </label>
            <input
              value={balance}
              type="text"
              className="form-input"
              id="card_balance"
              name="balance"
              placeholder="balance"
              required="required"
              onChange={(e) => setBalance(Number(e.target.value))}
            />
          </>
          <input className="submit-input" type="submit" value="Sent" />
        </form>
      </>
    );
  }

  if (show === "output") {
    element = output;
    sleep(5000).then(() => {
      window.location.reload(false);
    });
  }
  return element;
};

export default Multistate;
