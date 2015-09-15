describe('Calc', function () {
    it('should take a number', function () {
        new project.Calc(4).number
        .should.equal(4);
    });
    it('should require a number as a param', function () {
        (function () {
            new project.Calc();
        }).should.throw('You need a number.');
    });
    it('should be able to add two numbers', function () {
        new project.Calc(2).add(4).number
        .should.equal(6);
    });
});
