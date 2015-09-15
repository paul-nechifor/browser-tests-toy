exports.Calc = require('./Calc');
exports.App = require('./App');

if (typeof window !== 'undefined') {
    window.project = module.exports;
}
