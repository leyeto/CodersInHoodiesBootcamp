const calculator = {
  sum: 0,
  add: function (input) {
    this.sum += input;
    console.log("this.sum = ", this.sum);
    return this;
  },
  subtract: function (input) {
    this.sum -= input;
    console.log("this.sum = ", this.sum);
    return this;
  },
  multiply: function (input) {
    this.sum *= input;
    console.log("this.sum = ", this.sum);
    return this;
  },
  divide: function (input) {
    this.sum /= input;
    console.log("this.sum = ", this.sum);
    return this;
  },
  total: function () {
    const totalReturned = this.sum;
    this.sum = 0;
    console.log("Total here");
    return totalReturned;
  },
};

console.log(calculator.add(5).subtract(2).multiply(10). divide(2). total());

module.exports = calculator;
