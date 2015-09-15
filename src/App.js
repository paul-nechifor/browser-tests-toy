var App = module.exports = function (opts) {
    this.opts = opts = opts || {};
    this.backgroundColor = opts.backgroundColor || '#F00';
    this.appName = opts.appName || 'App';
};

App.prototype.init = function () {
    $('html').css('background-color', this.backgroundColor);
    $('body').append($('<p>').text(this.appName));
};
