var Calc = module.exports = function (number) {
    if (typeof number !== 'number') {
        throw 'You need a number.';
    }
    this.number = number;
};

Calc.prototype.add = function (number) {
    this.number += number;
    return this;
};

Calc.prototype.get = function () {
    return this.number;
};
