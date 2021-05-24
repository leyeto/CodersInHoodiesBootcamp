const calculator = {
  sum: 0,
  add: function (input) {
    this.sum += input;
    console.log("this.sum = ", this.sum);
    return this;
  },
  subtract: function (input) {
    this.sum -= input;
    return this;
  },
  multiply: function (input) {
    this.sum *= input;
    return this;
  },
  divide: function (input) {
    this.sum /= input;
    return this;
  },
  total: function () {
    const totalReturned = this.sum;
    this.sum = 0;
    return totalReturned;
  },
};

module.exports = calculator;
