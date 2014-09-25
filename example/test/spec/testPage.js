describe('Page options', function() {
    it('PhantomJS userAgent should be overrided via options.page', function() {
        expect(navigator.userAgent).to.equal("grunt-mocha-agent");
    });

});
