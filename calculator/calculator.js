class Calculator {
  constructor() {
    this.inputs = [];
    this.output = 0;
  }
}

Calculator.prototype.evaluate = function() {
  let input = this.inputs.join('');
  console.log(input);
  this.output = eval(input);
  console.log(this.output);
};