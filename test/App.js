describe('App', function () {
    afterEach(function () {
        $('body').empty();
    });

    it('should initialize the background to red', function () {
        new project.App().init();
        $('html').css('background-color')
        .should.equal('rgb(255, 0, 0)');
    });

    it('should initialize the background to blue if specified', function () {
        new project.App({backgroundColor: '#00F'}).init();
        $('html').css('background-color')
        .should.equal('rgb(0, 0, 255)');
    });

    it('should add the app name', function () {
        new project.App().init();
        $('body').html().should.equal('<p>App</p>');
    });

    it('should support a custom app name', function () {
        new project.App({appName: 'Custom App'}).init();
        $('body').html().should.equal('<p>Custom App</p>');
    });

    it('should support not break on non ASCII', function () {
        new project.App({appName: 'Paulică'}).init();
        $('body').html().should.equal('<p>Paulică</p>');
    });
});
