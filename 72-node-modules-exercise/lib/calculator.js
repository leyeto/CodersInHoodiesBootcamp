class Calculator {
  constructor() {
    sum = 0;
  }
  add = (input) => {
    sum += input;
    return sum;
  };
  subtract = (input) => {
    sum -= input;
    return sum;
  };
  multiply = (input) => {
    sum *= input;
    return sum;
  };
  divide = (input) => {
    sum /= input;
    return sum;
  };
  total = () => sum;
}
const user = new Calculator();
// console.log(user.add(5).multiply(2));

module.exports = new Calculator();
