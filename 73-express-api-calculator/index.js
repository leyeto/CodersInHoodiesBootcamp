const cal = require("./lib/calculator");
const express = require("express");
const calculator = require("./lib/calculator");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Leye!");
});

app.get("/double/:num", (req, res) => {
  const number = parseInt(req.params.num);
  const result = calculator.add(number).multiply(2).total();
  resultCheck(result);
  console.log("result is", result);
  console.log("Param is ", req.params.num);
  res.send({ result });
});

app.get("/square/:num", (req, res) => {
  const number = parseInt(req.params.num);
  const result = calculator.add(number).multiply(number).total();
  // resultCheck(result);
  console.log("result is", result);
  console.log("Param is ", req.params.num);
  res.send({ result });
});

app.get("/:num1/:operation/:num2", (req, res) => {
  const number1 = parseInt(req.params.num1);
  const number2 = parseInt(req.params.num2);
  const operator = req.params.operation;
  let result;
  console.log(`number1= ${number1} number2= ${number2} operator= ${operator}`);

  switch (operator) {
    case "add":
      result = calculator.add(number2).total();
      break;
    case "subtract":
      result = calculator.subtract(number2).total();
      break;
    case "multiply":
      result = calculator.subtract(number2).total();
      break;
    case "divide":
      result = calculator.subtract(number2).total();
      break;
  }
  if (isNaN(result)) {
    res.status(400);
    res.send("Bad Request");
  } else {
    res.send(`Operation valid \n ${result}`);
  }
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
